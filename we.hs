{-# LANGUAGE OverloadedStrings, TemplateHaskell #-}
import Data.List as L
import Data.Text as T
import Data.Monoid
import qualified Network.WebSockets as WS

type Name = Text
type Score = Int
type Group = Text
type City = Text
type Client = (Name, Score, Group, Text)
type ServerState = [Client]

s :: [(Text,Int,Text,Bool)]
s = [("are",7,"b2",True), ("aww",7,"b",True), ("a",7,"b2",True),
     ("adfg",7,"b",True), ("gfgda",7,"b",True),
       ("gga",7,"b",True), ("jgha",7,"b",True), ("ga",7,"b2",True),
         ("jhghja",7,"b",True), ("gga",7,"b",True)]

test :: (Text,Int,Text,Bool) -> (Text,Int,Text,Bool) -> Bool
test (_,_,c,_) (_,_,c',_)  | c == c' = True
                              | otherwise = False

compare' :: (Text,Int,Text,Bool) -> (Text,Int,Text,Bool) -> Ordering
compare' (_,_,c,_) (_,_,c',_) = compare c c'

-- textState :: (Text,Int,Text,Bool) -> [Text]
textState s = [ (a `mappend` " [ "  `mappend` T.pack (show b) `mappend` " ] ",(a,b,c,d)) | (a,b,c,d) <- s]

--select :: Text -> ServerState -> ServerState
--select g st = [ x  | x <- st, test x ("adfgtq",7,"b2",_) ]

subState :: Text -> [(Text,Int,Text,Bool)] -> [(Text,Int,Text,Bool)]
subState g state  = [ (a,b,c,d) | (a,b,c,d) <- state, g == c ]
w = L.sortBy compare' s
x = L.groupBy test w   -- separate lists of clients

y = L.map textState x

x2 = L.map textState $ L.groupBy test $ L.sortBy compare' s
-- x4 = L.map T.concat $ L.map ((L.intersperse (T.pack "<br>") )) x2


main   = do
	print $ subState (T.pack "b2") s
	-- print $ L.map T.concat $L.map ((L.intersperse (T.pack "<br>") )) y

