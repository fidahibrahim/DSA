// count vowels in array of string

const arr = ['fathima','fida','calicut']
const vowels = 'aeiouAEIOU'
let count = 0

for(let string of arr){
    for(let char of string){
        if(vowels.includes(char)){
            count++
        }
    }
}
console.log(count);

// convert comma seperated values to an array
let str = '1,2,3'
let array = []

for(let i=0;i<str.length;i++){
    if(str[i]!==','){
        array.push(str[i])
    }
}
console.log(array);

// Reverse Array
function arrayRev(array) {
    for (let i = 0; i < array.length / 2; i++) {
      [array[i], array[array.length - 1 - i]] = [
        array[array.length - 1 - i],
        array[i],
      ];
    }
    return array;
  }
  
  console.log(arrayRev([1, 2, 3]));

// Prime numbers
function primeNumebr ( num ) {
    for ( let i = 2 ; i<= num/2 ; i++  ) {
       if ( num%i === 0 ) {
        return "its not a prime number"
       }
    }
    return "its a prime number"
}

console.log(primeNumebr(4))

//fibnocci
function fib(n) {
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
  }
  
  console.log(fib(5));

// Factorial
function factorial(n) {
    let f = 1;
    for (let i = n; i > 0; i--) {
      f *= i;
    }
    return f;
  }
  
  console.log(factorial(4));

// 2D Array 
function uniw(arr) {
    let u = arr.flat();
    let arrr = [];
    for (let i = 0; i < u.length; i++) {
      if (u.indexOf(u[i]) === u.lastIndexOf(u[i])) {
        arrr.push(u[i]);
      }
    }
    return arrr;
  }
  let arr1 = [
    [1, 2, 4],
    [2, 1, 1],
    [4, 2, 7, 9],
  ];
  
  // console.log(uniw(arr1));
  
  let newArr = [];
  let row= 5;
  let columns = 3;
  
  for ( let i = 0; i< row ; i++ ){
       newArr[i] = [];
       for ( let j = 0; j< columns ; j++ ) {
          newArr[i][j] = j+1
       }
  }
  
  function * s () {
      
  }
  console.log(newArr)  













