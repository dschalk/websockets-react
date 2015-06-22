module Paths_score2 (
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
version = Version [0,2,0,0] []
bindir, libdir, datadir, libexecdir, sysconfdir :: FilePath

bindir     = "/home/d/.cabal/bin"
libdir     = "/home/d/.cabal/lib/x86_64-linux-ghc-7.8.4/score2-0.2.0.0"
datadir    = "/home/d/.cabal/share/x86_64-linux-ghc-7.8.4/score2-0.2.0.0"
libexecdir = "/home/d/.cabal/libexec"
sysconfdir = "/home/d/.cabal/etc"

getBinDir, getLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath
getBinDir = catchIO (getEnv "score2_bindir") (\_ -> return bindir)
getLibDir = catchIO (getEnv "score2_libdir") (\_ -> return libdir)
getDataDir = catchIO (getEnv "score2_datadir") (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "score2_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "score2_sysconfdir") (\_ -> return sysconfdir)

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir ++ "/" ++ name)
