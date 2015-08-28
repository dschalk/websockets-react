{-# LANGUAGE OverloadedStrings #-}
module Impossibles where
import Data.List
import System.CPUTime

notWhole :: Double -> Bool
notWhole x = fromIntegral (round x) /= x

cat :: Double -> Double -> Double
cat l m   | m < 0  = 3.1
          | l == 0  = 3.1
          | notWhole l  = 3.1
          | notWhole m  = 3.1
          | otherwise  = read (show (round l) ++ show (round m))

f :: Double -> String
f x = show (round x)

scoreDiv :: Double -> Double -> Double
scoreDiv az bz  | bz == 0  = 99999
                | otherwise = (/) az bz

ops :: [Double -> Double -> Double]
ops =  [cat, (+), (-), (*), scoreDiv]

calc a b c d e = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op2 (op1 a' b') c' == e]

calc2 a b c d e = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op2 a' (op1 b' c') == e]

calc3 a b c d e = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op3 <- ops,
                            op3 (op1 a' b') (op2 c' d') == e]

calc4 a b c d e = [ (a',b',c',d')  |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op3 <- ops,
                            op3 (op2 (op1 a' b') c') d' == e]

calc5 :: Double -> Double -> Double -> Double -> Double -> [(Double, Double, Double, Double)]
calc5 a b c d e = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op3 <- ops,
                            op3 (op2 a' (op1 b' c')) d' == e]

calc6 a b c d e = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op3 <- ops,
                            op3 a' (op2 (op1 b' c') d') == e]

calc7 a b c d e = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op3 <- ops,
                            op3 a' (op2 b' (op1 c' d')) == e]

impossibles :: Double -> Double -> Double -> Double -> Double -> [[Double]]
impossibles v w x y z = [ [a, b, c, d] | a <- [1..v], b <- [1..w], c <- [1..x], d <- [1..y],
                     a <= b, b <= c, c <= d,
                     null $ calc a b c d z, null $ calc2 a b c d z, null $ calc3 a b c d z,
                     null $ calc4 a b c d z, null $ calc5 a b c d z, null $ calc6 a b c d z,
                     null $ calc7 a b c d z ]

main = do
    t1 <- getCPUTime
    let imp = impossibles 5 5 5 5 15
    print $ length imp
    mapM_ print imp
    t2 <- getCPUTime
    let t = fromIntegral (t2-t1) * 1e-12
    print t
