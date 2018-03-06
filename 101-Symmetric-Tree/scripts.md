n = 1   w(n)=1 (1)
n = 2   w(n)=2 (1,1)(2)
        w(3)=3 (1,1,1)(1,2)(2,1)
        w(4)=5 (1,1,1,1)(1,1,2)(1,2,1)(2,1,1)(2,2)
        w(5)=8 = 3 + 5
        w(6)=13
        
* Fibonacci!
 w(n) = w(n-1) + w(n-2)
 w(1) = 1
 w(2) = 2
 -> Recursive Formula
 
 Dynamic Programming(動的計画法)
 - a method for solving a complex problem by breaking it down into a collection of simpler subproblems
 - solving each of those subproblems just once, and storing their solutions
 部分な問題に分割し、その回答を次の計算に活かしていくやり方。
 
 