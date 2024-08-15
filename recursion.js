// recursive fibonaacci

function recursiveFibonacci(n){
    if( n<2 ){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}
console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));

// recursive factorial

function recursiveFactorial(n){
    if( n===0 ){
        return 1
    }
    return n * recursiveFactorial(n-1)
}
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));

//RECARSION of binary search

function RecursionBinary(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,startInd,endInd){
    if(startInd>endInd){
        return -1
    }
    let middleInd = Math.floor((startInd+endInd)/2)
    if(target === arr[middleInd]){
        return middleInd
    }
    if(target<arr[middleInd]){
        return search(arr,target,startInd,middleInd-1)
    }else{
        return search(arr,target,middleInd+1,endInd)
    }
}
console.log(RecursionBinary([-5,2,4,6,10],10));
console.log(RecursionBinary([-5,2,4,6,10],6));
console.log(RecursionBinary([-5,2,4,6,10],20));

function recursiveReverse(str){
    if(str===''||str.length ===1){
        return str
    }
    return recursiveReverse(str.substring(1))+str.charAt(0)
}

console.log(recursiveReverse('fida'));


// Array sum 
function arraySum(arr, index = arr.length - 1) {
    if (index < 1) {
      return arr[index];
    }
    return arr[index] + arraySum(arr, index - 1);
  }
  
  console.log(arraySum([5, 2, 3]));

// Multiplication 
function test(n, mul) {
    if (10 < mul) {
        return  ;
    }
    console.log(`${mul} * ${n} = `, mul* n)
   test(n,mul + 1)  ;

}
test(4, 1); 

// Palindrome Recursion
function isPalindrome(str) {
    function reverseString(s) {
      if (s === "") {
        return "";
      }
      return reverseString(s.substr(1)) + s.charAt(0);
    }
    let reversed = reverseString(str);
    if (reversed === str) {
      return "it is a pallindrome ";
    } else {
      return "its not a pallinderome";
    }
  }
  
  console.log(isPalindrome("mom"));

// Range of numbers adding
function rangeOfnumbers (start, end) {
    if ( end < start ) {
        return []
    }
    else {
        const number = rangeOfnumbers(start, end-1);
        number.push(end);
        return number;
    }
}

console.log(rangeOfnumbers(1, 5))


// reverse Array

function arrayRev(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
      return;
    }
    [arr[start], arr[end]] = [arr[end], arr[start]];
    arrayRev(arr, start + 1, end - 1);
  }
  
  const array = [1, 2, 3];
  
  // reverse array to new array
  
  function reverse(arr, i = arr.length - 1) {
    if (i < 0) {
      return [];
    }
    const number = reverse(arr, i - 1);
    number.unshift(arr[i]);
    return number;
  }
  
  // console.log(reverse(array));
  
  // reverse string
  
  function reverseString(str) {
      if ( str === "" ) {
          return ""
      }
      return reverseString(str.substr(1)) + str.charAt(0)
  }
  
  console.log(reverseString("sahal"));