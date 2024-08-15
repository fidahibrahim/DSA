
//fibonacci series
function fibonacci(n){
    const fib = [0,1];
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib 
}
console.log( fibonacci(3) );



// factorial 
function factorial(n){
    let result = 1;
    for(let i=2; i<=n; i++){
        result = result * i
    }
    return result 
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));




// power of two 

function isPowerOfTwo(n){              
    if( n<1 ){
        return false 
    }
    while( n>1 ){
        if( n%2 !==0 ){
            return false
        }
        n = n/2
    }
    return true
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));


// method 2

function isPowerOfTwoBitwise(n){
    if(n<1){
        return false
    }
    return ( n&(n-1)) === 0
}
console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(2));
console.log(isPowerOfTwoBitwise(5));
