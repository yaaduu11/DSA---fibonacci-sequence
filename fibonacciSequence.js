// TODO : SOME TIPS TO COVER
f(n) = f(n-1) + f(n-2)
f(0) = 0  ;  f(1) = 1
f(2) = f(1) = f(0)
f(2) = 1 + 0
f(2) = 1 
// TODO :  FIBONACCI OF 2 IS 1 

////! FIBONACCI SEQUENCE

function fibonacci(n) {
    let fib = [0,1]
    for(let i= 2; i<= n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

console.log(fibonacci(2))
console.log(fibonacci(5))
console.log(fibonacci(7))


////! FIBONACCI SEQUENCE WITH RECURSION

function recursiveFibonacci(n) {
    if(n < 2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(6))