{-# LANGUAGE OverloadedStrings, TemplateHaskell #-}
import Data.Char (isPunctuation, isSpace)
import Data.Monoid (mappend)
import Data.Text (Text)
import Control.Exception (finally)
import Control.Monad (forM_, forever)
import Control.Concurrent
import Control.Concurrent.STM
import Control.Monad.IO.Class (liftIO)
import Network.WebSockets.Connection (sendClose)
import qualified Data.Text as T
import qualified Data.Text.IO as T
import qualified Network.WebSockets as WS
import qualified Network.Wai
import qualified Network.Wai.Handler.Warp as Warp
import qualified Network.Wai.Handler.WebSockets as WaiWS
import qualified Network.Wai.Application.Static as Static
import Data.FileEmbed (embedDir)
import Fm hiding (main)
import Data.List (intersperse)
import Control.Exception.Base (mask_)
import Data.List.Split (splitOn)
-- import System.Environment (getEnv)
import Logger2 hiding (main)

type Name = Text
type Score = Int
type Group = Text
type Client = (Name, Score, Group, WS.Connection)
type ServerState = [Client]

froll :: [String] -> [Double]
froll [_,_,_,a,b,c,d,e] = map read [a, b, c, d, e]
froll _ = [1.0,2.0,3.0,4.0]

getName :: Client -> Name
getName (a,_,_,_) = a

getConn :: Client -> WS.Connection
getConn (_,_,_,d) =d

filterGroup :: Text -> ServerState -> [Text]
filterGroup group s = [ a `mappend` " _ " `mappend` T.pack (show b)
    `mappend` " _ " `mappend` c | (a,b,c,_) <- s, group == c]

get4 :: [String] -> [Int]
get4 [_,_,_,a,b,c,d] = fmap read [a,b,c,d]
get4 _ = [-1,-1,-1,-1]

{-
test :: Client -> Client -> Bool
test (a,b,c,d) (a',b',c',d')  | c == c' = True
                              | otherwise = False

select :: Text -> ServerState -> ServerState
select g st = [ x | x <- st, test x (_,_,g,_) ]

compare' :: Client -> Client -> Ordering
compare' (a,b,c,d) (a',b',c',d') = compare c c'
-}

subState :: Text -> [(Text,Int,Text,WS.Connection)] -> [(Text,Int,Text,WS.Connection)]
subState g state = [ (a,b,c,d) | (a,b,c,d) <- state, g == c ]

extract :: [a] -> a
extract [x] = x

getGroup :: Text -> [(Text,Int,Text,WS.Connection)] -> Text
getGroup name state = extract [ c | (a,b,c,d) <- state, name == a ]

first :: (a,a1,a2,a3) -> a
first (w,x,y,z) = w

bcast :: Text -> ServerState -> IO ()
bcast message clients = do
    T.putStrLn message
    forM_ clients $ \(_ , _, _, conn) -> WS.sendTextData conn message

test :: (Text,Int,Text,WS.Connection) -> (Text,Int,Text,WS.Connection) -> Bool
test (_,_,c,_) (_,_,c',_)  | c == c' = True
                              | otherwise = False

textState :: Show a => [(Text, a, t, t1)] -> [Text]
textState s = [ a `mappend` " [ "  `mappend` T.pack (show b) `mappend` " ] " | (a,b,c,d) <- s]

newGroup :: Text -> Text -> Client -> Client
newGroup name group (a, b, c, d)   | name == a  = (a, 0, group, d)
                                   | otherwise = (a, b, c, d)

getText :: [Text] -> Text
getText (x:xs)  | null xs    = "Error in getText. Argument is null."
                | otherwise  = x

changeGroup :: Text -> Text -> ServerState -> ServerState
changeGroup name group = map (newGroup name group)

changeS :: Text -> Int -> Client -> Client
changeS x y (a, b, c, d) | x == a    = (a, b+y, c, d)
                         | otherwise = (a, b, c, d)

changeScore :: Text -> Int -> ServerState -> ServerState
changeScore name k = map (changeS name k)

newServerState :: ServerState
newServerState = []

matches :: Text -> ServerState -> [Client]
matches a ss = [ x | x <- ss, getName x == a]

notMatches :: Text -> ServerState -> ServerState
notMatches a ss = [ x | x <- ss, getName x /= a]

clientExists :: Text -> ServerState -> Bool
clientExists a ss  | null (matches a ss)   = False
                   | otherwise             = True

addClient :: Client -> ServerState -> ServerState
addClient client clients = client : clients

removeClient :: Client -> ServerState -> ServerState
removeClient client = filter ((/= getName client) . getName)

closeClientConn :: WS.WebSocketsData a => Client -> ServerState -> a -> ServerState
closeClientConn client s = do
    let s' = removeClient client s
    _ <- sendClose (getConn client)
    return s'

broadcast :: Text -> ServerState -> IO ()
broadcast message clients = do
    T.putStrLn message
    forM_ clients $ \(_ , _, _, conn) -> WS.sendTextData conn message

main :: IO ()
main = do
    -- por <- getEnv "PORT"
    -- let port = read por
    state <- atomically $ newTMVar newServerState
    Warp.runSettings Warp.defaultSettings
      { Warp.settingsTimeout = 36000,
        Warp.settingsPort = 3015
      } $ WaiWS.websocketsOr WS.defaultConnectionOptions (application state) staticApp
staticApp :: Network.Wai.Application
staticApp = Static.staticApp $ Static.embeddedSettings $(embedDir "client")
application :: TMVar ServerState -> WS.ServerApp
application state pending = do
    conn <- WS.acceptRequest pending
    msg <- WS.receiveData conn
    clients <- atomically $ readTMVar state
    case msg of
        _   | not (prefix `T.isPrefixOf` msg) ->
                WS.sendTextData conn ("Wrong announcement" :: Text)
            | any ($ getName client)
                [T.null] ->
                    WS.sendTextData conn ("Name cannot be empty" :: Text)
            | clientExists (getName client) clients ->
                WS.sendTextData conn ("CC#$42,seven,seven,%#8*&&^1#$%^" :: Text)
            | otherwise -> flip finally disconnect $ do
                    st <- atomically $ takeTMVar state
                    let st2 = addClient client st
                    atomically $ putTMVar state st2
                    WS.sendTextData conn $ T.pack "CC#$42"
                    -- broadcast ("CB#$42, solo,0, solo, new player, solo") clients
                    talk conn state client
         where
                prefix     = "CC#$42"
                client     = (T.drop (T.length prefix) msg, 0, T.pack "Jimbo", conn)
                disconnect = do
                    s <- atomically $ takeTMVar state
                    let s' = removeClient client s
                    atomically $ putTMVar state s'
                    let gr = getGroup (first client) s
                    let subSt = subState gr s'
                    broadcast ("CB#$42," `mappend` gr `mappend` ",dummy," `mappend` T.concat (intersperse "<br>" (textState subSt))) subSt
                    broadcast "SX#$42,pass,pass,pass" s' >> return (s', s')

talk :: WS.Connection -> TMVar ServerState -> Client -> IO ()
talk conn state (_, _, _, _) = forever $ do
    msg <- WS.receiveData conn
    let msgArray = splitOn "," (T.unpack msg)
    let group = T.pack (msgArray !! 1)
    let sender = T.pack (msgArray !! 2)
    let extra = T.pack (msgArray !! 3)
    let extraNum = (read (msgArray !! 3)) :: Int
    let range = get4 msgArray  -- 7 items in msgArray

    l <- initLogger

    --print "****************************msgArray next: "
    --mapM_ print msgArray
    --print "****************************That was msgArray"

    if "CA#$42" `T.isPrefixOf` msg
        then
            do
                st <- atomically $ readTMVar state
                z <- rText range
                broadcast ("CA#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` z) st

    else if "CZ#$42" `T.isPrefixOf` msg
            then do
                y <- liftIO $ truck $ froll msgArray
                let yzz = T.pack y
                st <- atomically $ readTMVar state
                broadcast ("CZ#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` yzz) st

    else if "DZ#$42" `T.isPrefixOf` msg
            then do
                y <- liftIO $ truck $ froll msgArray
                let yzz = T.pack y
                st <- atomically $ readTMVar state
                broadcast ("DZ#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` yzz) st

    else if "CW#$42" `T.isPrefixOf` msg
            then do
                y <- liftIO $ truck $ froll msgArray
                let zz = T.pack y
                st <- atomically $ readTMVar state
                broadcast ("CW#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` zz) st

    else if "CC#$42" `T.isPrefixOf` msg || "CE#$42" `T.isPrefixOf` msg || "CF#$42" `T.isPrefixOf` msg ||
        "CH#$42" `T.isPrefixOf` msg || "CJ#$42" `T.isPrefixOf` msg || "CK#$42" `T.isPrefixOf` msg ||
        "CP#$42" `T.isPrefixOf` msg || "CQ#$42" `T.isPrefixOf` msg || "CS#$42" `T.isPrefixOf` msg ||
        "CY#$42" `T.isPrefixOf` msg || "CR#$42" `T.isPrefixOf` msg || "CD#$42" `T.isPrefixOf` msg ||
        "IA#$42" `T.isPrefixOf` msg || "DY#$42" `T.isPrefixOf` msg || "DI#$42" `T.isPrefixOf` msg ||
        "XI#$42" `T.isPrefixOf` msg || "XK#$42" `T.isPrefixOf` msg || "XY#$42" `T.isPrefixOf` msg ||
        "QI#$42" `T.isPrefixOf` msg || "XO#$42" `T.isPrefixOf` msg
        then
            do
                st <- atomically $ readTMVar state
                broadcast msg st

    else if "CG#$42" `T.isPrefixOf` msg
        then
            mask_ $ do
                -- let extraNum = read (fyy msgArray) :: Int
                old <- atomically $ takeTMVar state
                let new = changeScore sender extraNum old
                atomically $ putTMVar state new
                let subSt = subState group new
                broadcast msg subSt
                broadcast ("CB#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` T.concat (intersperse "<br>" (textState subSt))) subSt

    else if "CO#$42" `T.isPrefixOf` msg
        then
            mask_ $ do
                old <- atomically $ takeTMVar state
                let new = changeGroup sender extra old
                atomically $ putTMVar state new
                let subState1 = subState group new
                let subState2 = subState extra new
                let x = "CB#$42," `mappend` group `mappend` "," `mappend` sender `mappend` "," `mappend` T.concat (intersperse "<br>" (textState subState1))
                let y = "CB#$42," `mappend` extra `mappend` "," `mappend` sender `mappend` "," `mappend` T.concat (intersperse "<br>" (textState subState2))
                print "**************************** in CO#$42 "
                print group
                print extra
                print x
                print y
                print "**************************** leaving CO#42 "
                broadcast y subState2
                if group /= "solo"
                   then
                   broadcast x subState1
                   else
                   print "Hello from CO#$42"

    else if "SX#$42" `T.isPrefixOf` msg
        then
            do
                new <- atomically $ readTMVar state
                let subSt = subState group new
                let x = "CB#$42," `mappend` group `mappend` "," `mappend` sender `mappend` "," `mappend` T.concat (intersperse "<br>" (textState subSt))
                broadcast x subSt
                broadcast ("DB#$42," `mappend` "pass" `mappend` "," `mappend` sender) subSt

    else if "SU#$42" `T.isPrefixOf` msg
        then
            do
                st <- atomically $ readTMVar state
                broadcast ("DU#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` extra) st

    else if "XXXXX" `T.isPrefixOf` msg
      then
            logMessage l (T.unpack msg)

      else
            print "Hello Jackie"

