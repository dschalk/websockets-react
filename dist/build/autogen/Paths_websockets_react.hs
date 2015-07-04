module Paths_websockets_react (
    version,
    getBinDir, getLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where

import qualified Control.Exception as Exception
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude

catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
catchIO = Exception.catch

version :: Version
version = Version [0,1,0,0] []
bindir, libdir, datadir, libexecdir, sysconfdir :: FilePath

bindir     = "/home/d/.cabal/bin"
libdir     = "/home/d/.cabal/lib/x86_64-linux-ghc-7.6.3/websockets-react-0.1.0.0"
datadir    = "/home/d/.cabal/share/x86_64-linux-ghc-7.6.3/websockets-react-0.1.0.0"
libexecdir = "/home/d/.cabal/libexec"
sysconfdir = "/home/d/.cabal/etc"

getBinDir, getLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath
getBinDir = catchIO (getEnv "websockets_react_bindir") (\_ -> return bindir)
getLibDir = catchIO (getEnv "websockets_react_libdir") (\_ -> return libdir)
getDataDir = catchIO (getEnv "websockets_react_datadir") (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "websockets_react_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "websockets_react_sysconfdir") (\_ -> return sysconfdir)

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir ++ "/" ++ name)
