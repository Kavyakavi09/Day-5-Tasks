//1) Do the below programs in anonymous function & IIFE

// a )Print odd numbers in an array in anonymous function
// let oddArray = [1,2,3,4,5,6,7,8,9,10];
//     let oddNumbers = function(oddArray){
//         let oddResult =[];
//         for(let i=0;i<oddArray.length;i++){
//                if(oddArray[i]%2!=0){
//                     oddResult.push(oddArray[i]);
                    
//          }
//         }
//         return oddResult; 
//     }


//  let oddFinal =oddNumbers(oddArray);
//  console.log(oddFinal);


// // a) Print odd numbers in an array in IIFE

// let oddArray = [1,2,3,4,5,6,7,8,9,10];
// let oddNumbers = (function(oddArray){
//     let oddResult =[];
//     for(let i=0;i<oddArray.length;i++){
//         if(oddArray[i]%2!=0){
//             oddResult.push(oddArray[i]);
//         }
//     }
//     console.log(oddResult);
// })(oddArray);

//b) Convert all the strings to title caps in a string array in anonymous function

// let titleCase= function(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return str.join(' ');
//   }
//   let newstr= titleCase("GUVI FOR STUDENT");
//     console.log(newstr);
 

//b) Convert all the strings to title caps in a string array in IIFE

// let titleCase= (function(str){
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     console.log(str.join(' '));
// })("GUVI FOR STUDENT");

//c) Sum of all numbers in an array in anonymous function

// let arrTotal = function(arr){
//      let sum =0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum;
// };
// let Total = arrTotal([1,2,3,4,5,6,7,8,9,10]);
// console.log(Total);

//c) Sum of all numbers in an array in IIFE

// let arrTotal = (function(arr){
//     let sum =0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     console.log(sum);
// })([20,30,40,50,60,90,100]);

//d) Return all the prime numbers in an array in anonymous function

// const array = [-5, -3, -2, -1, ...Array(20).keys()]; 
// // Array(20).keys() generates numbers from 0 to 19.
// let isPrime= function(num){
//   for (let start = 2; num > start; start++) {
//     if (num % start==0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// console.log(array.filter(isPrime)); 

// e) Return all the palindromes in an array in anonymous function

// let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
// let palindromes = arr.filter(function(w) {
//   let len = w.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (w[i] == w[len - i - 1]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// });
// console.log(palindromes);

// f) Return median of two sorted arrays of same size

// let getMedian= function (ar1, ar2, n){
//     var i = 0; /* Current index of i/p array ar1[] */
//     var j = 0; /* Current index of i/p array ar2[] */
//     var count;
//     var m1 = -1, m2 = -1;
 
//     /* Since there are 2n elements, median will be average
//     of elements at index n-1 and n in the array obtained after
//     merging ar1 and ar2 */
//     for (count = 0; count <= n; count++)
//     {
//         /*Below is to handle case where all elements of ar1[] are
//         smaller than smallest(or first) element of ar2[]*/
//         if (i == n)
//         {
//             m1 = m2;
//             m2 = ar2[0];
//             break;
//         }
 
//         /*Below is to handle case where all elements of ar2[] are
//         smaller than smallest(or first) element of ar1[]*/
//         else if (j == n)
//         {
//             m1 = m2;
//             m2 = ar1[0];
//             break;
//         }
//         /* equals sign because if two
//             arrays have some common elements */
//         if (ar1[i] <= ar2[j])
//         {
//             m1 = m2; /* Store the prev median */
//             m2 = ar1[i];
//             i++;
//         }
//         else
//         {
//             m1 = m2; /* Store the prev median */
//             m2 = ar2[j];
//             j++;
//         }
//     }
 
//     return (m1 + m2)/2;
// };
 
// /* Driver program to test above function */
// var ar1 = [1, 12, 15, 26, 38];
// var ar2 = [2, 13, 17, 30, 45];
// var n1 = ar1.length;
// var n2 = ar2.length;
// if (n1 == n2)
//     console.log("Median is "+ getMedian(ar1, ar2, n1));
// else
//     console.log("Doesn't work for arrays of unequal size");
 
//g) Remove duplicates from an array

// let names = ['Mike','Matt','Nancy','Adam','Jenny','Nancy','Carl', 'Nancy'];
// let isDuplicate = function(names){
//     let dup = [...new Set(names)]; 
//     return dup;
// }
//    let findDuplicate = isDuplicate(names);
// console.log(findDuplicate);


//h) Rotate an array by k times
var rotate = function (arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   return arr;
  };
  let arrResult = rotate([1,2,3,4,5],3);
  console.log(arrResult);
