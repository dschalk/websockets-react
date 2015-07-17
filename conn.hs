{-# LANGUAGE OverloadedStrings #-}
import           Control.Monad      (forever)
import qualified Data.Text          as T
import qualified Network.WebSockets as WS

meow :: WS.Connection -> IO ()
meow conn = forever $ do
    msg <- WS.receiveData conn
    WS.sendTextData conn $ msg `T.append` ", meow"


