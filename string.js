let str = 'Hello World'
let arr = str.split(' ')
let res = arr.map((x)=>{
    return x.split('').reverse().join('')
}).join(' ')
console.log(res);


let string = 'fida'
let out = ''
for(let i=string.length-1; i>=0; i--){
    out += string[i]
}
console.log(out);

// To check palindrome
let word = 'malayalam'
let isPalindrome = false
for(let i=0;i<word.length;i++){
    if(word[i]===word[word.length-1-i]){
        isPalindrome = true
    }
}
console.log(isPalindrome);


// Replace alphabets with nth forward alphabet in JavaScript 
const str1 = "abcde";
const n = 4;
const replaceNth = (str1, n) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let  pos,res = "";
  for (let i = 0; i < str1.length; i++) {
    pos = alphabet.indexOf(str1[i]);
    console.log((pos + n) % alphabet.length)
    res += alphabet[(pos + n) % alphabet.length];
  }
  return res;
};
console.log(replaceNth(str1, n));

// String reverse 

function reverse (str) {
    let s ="";
    let len = str.length
    for ( let i = len-1 ; i >= 0; i--  ) {
        s+= str[i]
    }
    return s
}


console.log(reverse("hellowelcome"))
