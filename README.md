To run this app from your terminal, enter:

```
git clone https://github.com/dschalk/websockets-react
cd websockets-react
./dist/build/server/server
```
Or, if you modify the code and have ghc installed, enter:
```
git clone https://github.com/dschalk/websockets-react
cd websockets-react
runghc Main
```
You can also re-compile and run the code by entering:
```
git clone https://github.com/dschalk/websockets-react
cd websockets-react
cabal configure
cabal build
./dist/build/server/server
```

"runghc" is a Glasgow Haskell Compiler (ghc) command. "ghc" can be downloaded from https://www.haskell.org/ghc/download. If a version of Haskell Platform is available for your operating system, it is recommended that you install it instead of "ghc" from "www.haskell.org". Haskell Platform comes with "cabal", which is mentioned above. You don't need "cabal" in order to compile the application; you can just enter:

```
ghc -O Main
```

Documentation for this project is at
[ProjectDocumentation](https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score?show=tutorials).
