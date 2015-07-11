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

fw :: [String] -> Text
fw x = case x of
    [_,b,_] -> T.pack b
    [_,b,_,_] -> T.pack b
    [_,b,_,_,_,_,_,_] -> T.pack b
    [_,b,_,_,_,_,_] -> T.pack b
    _ -> T.pack "fw malfunctioned"

fx :: [String] -> Text
fx x = case x of
    [_,_,c] -> T.pack c
    [_,_,c,_] -> T.pack c
    [_,_,c,_,_,_,_,_] -> T.pack c
    [_,_,c,_,_,_,_] -> T.pack c
    _ -> T.pack "fx malfunctioned"

fy :: [String] -> Text
fy x = case x of
    [_,_,_,d] -> T.pack d
    [_,_,_,d,_,_,_,_] -> T.pack d
    [_,_,_,d,_,_,_] -> T.pack d
    _ -> T.pack "fy malfunctioned"

fyy :: [String] -> String
fyy [_,_,_,d] = d
fyy _ = "Error in fyy"

gG :: ServerState -> Group
gG [a] = getGroup a
gG _   = "Error Group"

allGroups :: ServerState -> Text
allGroups (x:xs)  | length (x:xs) == 0  = ""
                  | length (x:xs) == 1  = gG (x:xs)
                  | length (x:xs) > 1  = ((getGroup x) `mappend` "<br>") `mappend` (allGroups xs)
                  | otherwise          = "Error in allGroups"

froll :: [String] -> [Double]
froll [_,_,_,a,b,c,d,e] = map read [a, b, c, d, e]
froll _ = [1.0,2.0,3.0,4.0]

fw3 :: [String] -> Text
fw3 [_,b,_,_,_,_,_,_] = T.pack b
fw3 _ = T.pack "EE#$42"

fx3 :: [String] -> Text
fx3 [_,_,c,_,_,_,_,_] = T.pack c
fx3 _ = T.pack "EE#$42"

get4 :: [String] -> [Int]
get4 [_,_,_,a,b,c,d] = fmap read [a,b,c,d]
get4 _ = [-1,-1,-1,-1]

get4Group :: [String] -> Text
get4Group [_,b,_,_,_,_,_] = T.pack b
get4Group _ = "get4Group error"

get4Player :: [String] -> Text
get4Player [_,_,c,_,_,_,_] = T.pack c
get4Player _ = "get4Player error"

getName :: Client -> Name
getName (a,_,_,_) = a

getGroup :: Client -> Text
getGroup (_,_,c,_) = c

getConn :: Client -> WS.Connection
getConn (_,_,_,d) =d

filterGroup :: Text -> ServerState -> [Text]
filterGroup group s = [ a `mappend` " _ " `mappend` T.pack (show b)
    `mappend` " _ " `mappend` c | (a,b,c,_) <- s, group == c]

textState :: ServerState -> [Text]
textState s = [ a `mappend` " _ " `mappend` T.pack (show b)
    `mappend` " _ " `mappend` c | (a,b,c,_) <- s]

newGroup :: Text -> Text -> Client -> Client
newGroup name group (a, b, c, d)   | name == a  = (a, 0, group, d)
                                   | otherwise = (a, b, c, d)

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
                    talk conn state client
         where
                prefix     = "CC#$42"
                client     = (T.drop (T.length prefix) msg, 0, T.pack "solo", conn)
                disconnect = do 
                    s <- atomically $ takeTMVar state
                    let s' = removeClient client s
                    atomically $ putTMVar state s'
                    broadcast "SX#$42,pass,pass,pass" s' >> return (s', s')

talk :: WS.Connection -> TMVar ServerState -> Client -> IO ()
talk conn state (_, _, _, _) = forever $ do
    msg <- WS.receiveData conn

    l <- initLogger
    let msgArray = splitOn "," (T.unpack msg)

    let group = fw msgArray
    let sender = fx msgArray
    let extra = fy msgArray

    let group3 = fw3 msgArray
    let sender3 = fx3 msgArray

    let range = get4 msgArray  -- 7 items in msgArray
    let player4 = get4Player msgArray
    let group4 = get4Group msgArray

    print "****************************msgArray next: "
    mapM_ print msgArray
    print "****************************That was msgArray"

    if "CA#$42" `T.isPrefixOf` msg
        then
            do
                st <- atomically $ readTMVar state
                z <- rText range
                broadcast ("CA#$42," `mappend` group4 `mappend` ","
                    `mappend` player4 `mappend` "," `mappend` z) st

    else if "CZ#$42" `T.isPrefixOf` msg
            then do
                y <- liftIO $ truck $ froll msgArray
                let yzz = T.pack y
                st <- atomically $ readTMVar state
                broadcast ("CZ#$42," `mappend` group3 `mappend` ","
                    `mappend` sender3 `mappend` "," `mappend` yzz) st

    else if "DZ#$42" `T.isPrefixOf` msg
            then do
                y <- liftIO $ truck $ froll msgArray
                let yzz = T.pack y
                st <- atomically $ readTMVar state
                broadcast ("DZ#$42," `mappend` group3 `mappend` ","
                    `mappend` sender3 `mappend` "," `mappend` yzz) st

    else if "CW#$42" `T.isPrefixOf` msg
            then do
                y <- liftIO $ truck $ froll msgArray
                let zz = T.pack y
                st <- atomically $ readTMVar state
                broadcast ("CW#$42," `mappend` group3 `mappend` ","
                    `mappend` sender3 `mappend` "," `mappend` zz) st

    else if "CC#$42" `T.isPrefixOf` msg || "CE#$42" `T.isPrefixOf` msg || "CF#$42" `T.isPrefixOf` msg ||
        "CH#$42" `T.isPrefixOf` msg || "CJ#$42" `T.isPrefixOf` msg || "CK#$42" `T.isPrefixOf` msg ||
        "CP#$42" `T.isPrefixOf` msg || "CQ#$42" `T.isPrefixOf` msg || "CS#$42" `T.isPrefixOf` msg ||
        "CY#$42" `T.isPrefixOf` msg || "CR#$42" `T.isPrefixOf` msg || "CD#$42" `T.isPrefixOf` msg ||
        "IA#$42" `T.isPrefixOf` msg || "DY#$42" `T.isPrefixOf` msg || "DI#$42" `T.isPrefixOf` msg ||
        "XI#$42" `T.isPrefixOf` msg || "XK#$42" `T.isPrefixOf` msg || "XY#$42" `T.isPrefixOf` msg ||
        "QI#$42" `T.isPrefixOf` msg
        then
            do
                st <- atomically $ readTMVar state
                broadcast msg st

    else if "CG#$42" `T.isPrefixOf` msg
        then
            mask_ $ do
                let extraNum = read (fyy msgArray) :: Int
                old <- atomically $ takeTMVar state
                let new = changeScore sender extraNum old
                atomically $ putTMVar state new
                broadcast msg new
                broadcast ("CB#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` T.concat (intersperse "<br>" (textState new))) new

    else if "CO#$42" `T.isPrefixOf` msg
        then
            mask_ $ do
                old <- atomically $ takeTMVar state
                let new = changeGroup sender group old
                atomically $ putTMVar state new
                broadcast msg new
                let x = "CB#$42," `mappend` group `mappend` "," `mappend` sender `mappend` "," `mappend` T.concat (intersperse "<br>" (textState new))
                broadcast x new

    else if "SX#$42" `T.isPrefixOf` msg
        then
            do
                new <- atomically $ readTMVar state
                let x = ("CB#$42," `mappend` group `mappend` "," `mappend` sender `mappend` "," `mappend` T.concat (intersperse "<br>" (textState new)))
                broadcast x new
                broadcast ("DB#$42," `mappend` "pass" `mappend` "," `mappend` sender `mappend` "," `mappend` (allGroups new)) new
                print "**************************** in SX#$42 "
                print x
                print "**************************** leaving SX#42 "

    else if "SU#$42" `T.isPrefixOf` msg
        then
            do
                st <- atomically $ readTMVar state
                broadcast ("DU#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` extra) st

    else if "XXXXX" `T.isPrefixOf` msg
      then
        do
            logMessage l (T.unpack msg)

    else
            do
                print "Hello Jackie"
