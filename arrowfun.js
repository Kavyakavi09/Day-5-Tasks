//3) Do the below programs in arrow functions
//a )Print odd numbers in an array in arrow functions

let oddArray = [1,2,3,4,5,6,7,8,9,10];
let oddNumbers = (oddArray) =>{
    let oddResult =[];
    for(let i=0;i<oddArray.length;i++){
           if(oddArray[i]%2!=0){
                oddResult.push(oddArray[i]);
                
     }
    }
    return oddResult; 
}


let oddFinal =oddNumbers(oddArray);
console.log(oddFinal);

//b)Convert all the strings to title caps in a string array

let titleCase= (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  let newstr= titleCase("GUVI FOR STUDENT");
    console.log(newstr);


//C) Sum of all numbers in an array
let arrTotal = (arr) =>{
    let sum =0;
   for(let i=0;i<arr.length;i++){
       sum += arr[i];
   }
   return sum;
};
let Total = arrTotal([1,2,3,4,5,6,7,8,9,10]);
console.log(Total);


//d) Return all the prime numbers in an array 
const array = [-5, -3, -2, -1, ...Array(20).keys()]; 
// Array(20).keys() generates numbers from 0 to 19.
let isPrime= (num)=>{
  for (let start = 2; num > start; start++) {
    if (num % start==0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); 


// e) Return all the palindromes in an array

let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
let palindromes = arr.filter(w => {
  let len = w.length;
  for (let i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(palindromes);

