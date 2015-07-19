module Logger2 where
import Control.Concurrent
import Control.Concurrent.STM
import Control.Monad.IO.Class (liftIO)
-- -----------------------------------------------------------------------------

-- <<Logger
data Logger = Logger (TMVar LogCommand)

data LogCommand = Message String | Stop (TMVar ())
-- >>

-- <<initLogger
initLogger :: IO Logger
initLogger = do
  m <- newEmptyTMVarIO
  let l = Logger m
  forkIO (logger l)
  return l
-- >>
f :: FilePath
f = "log.txt"

logger :: Logger -> IO ()
logger (Logger m) = loop
 where
  loop = do
    cmd <- atomically $ takeTMVar m
    case cmd of
      Message msg -> do
        -- putStrLn msg
        appendFile f (msg ++ "\n")
        loop
      Stop s -> do
        putStrLn "logger: stop"
        atomically $ putTMVar s ()
    liftIO $ print "THE END"
-- >>

-- <<logMessage
logMessage :: Logger -> String -> IO ()
logMessage (Logger m) s = atomically $ putTMVar m (Message s)
-- >>

-- <<logStop
logStop :: Logger -> IO ()
logStop (Logger m) = do
  s <- newEmptyTMVarIO
  atomically $ putTMVar m (Stop s)
  atomically $ takeTMVar s
-- >>

-- <<main
main :: IO ()
main = do
  l <- initLogger
  logMessage l "hello"
  logMessage l "bye"
  logStop l
-- >>
