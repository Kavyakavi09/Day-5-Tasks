// JavaScript Functions — Warmup Pbms
//Problem:
//1)Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.

// function addFive(num){
//     return 5+num;
// }
// console.log(addFive(5));

//2) Write a function called “getOpposite”.
//Given a number, return its opposite.
// var num = 5;
// function getOpposite(num) {
//     num= -num;
//     return num;
// }
// var result = getOpposite(num);
// console.log(result);

//3) Fill in your code that takes an number minutes and converts it to seconds.

// var min = 5;
// function toSeconds(min) {
//        let seconds = 60*min;
//        return seconds;
// }
// var secs = toSeconds(min)
// console.log(secs);

//4) Create a function that takes a string and returns it as an integer.

// var mystr = "5";
// function toInteger(mystr) {
//   num =parseInt(mystr);
//   return num;
// }
// var myint = toInteger(mystr);
// console.log(myint);

//5) Create a function that takes a number as an argument,
// increments the number by +1 and returns the result.

// var myint = -3;
// function nextNumber(myint) {
//      myint= ++myint;
//      return myint;
// }
// var myNextint = nextNumber(myint)
// console.log(myNextint)

//6)Create a function that takes an array and returns the first element.
// var arr = [1, 2, 3];
// function getFirstElement(arr) {
//     arr = arr[0];
//     return arr;
// }
// var data = getFirstElement(arr);
// console.log(data);

//7) Convert Hours into Seconds
//Write a function that converts hours into seconds.
// var arr = [1, 2, 3];
// function hourToSeconds(arr) {
//     let seconds="";
//     for(let i=0;i<arr.length;i++){
//      seconds+=3600*arr[i]+" ";
// }
// return seconds;
// }
// var data = hourToSeconds(arr)
// console.log(data);

//8) Find the Perimeter of a Rectangle
//Create a function that takes height and width and finds the perimeter of a rectangle.
// function findPerimeter(num1,num2) {
//    let result = 2*(num1+num2);
//    return result;
// }
// var peri = findPerimeter(6,7);
// console.log(peri);

//9) Given two numbers, return true if the sum of both numbers is less than 100.
// function lessThan100(num1,num2) {
// if(num1+num2<100){
//     return true;
// }
// else{
//     return false;
// }
// }
// var res = lessThan100(22,15);
// console.log(res);

//10)  Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero.
// Return that value.
// function remainder(num1,num2) {
//       let result = num1%num2;
//       return result;
// }
// var res = remainder(1,3);
// console.log(res);

//11) You have to implement a function that returns the total number of legs of all the animals.
// function CountAnimals(tur,horse,pigs) {
//             tur = 2*tur;
//             horse =4* horse;
//             pigs = 4*pigs;
//             let result = tur+horse+pigs;
//             return result;
// }
// var legs = CountAnimals(2,3,5);
// console.log(legs);

//12) Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// function frames(num1,num2) {
//   let sec = 60*num1*num2;
//   return sec;
// }
// var fps = frames(10,25);
// console.log(fps);

//13) Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// function divisibleByFive(num1) {
//     if(num1%5==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// var divisible = divisibleByFive(-55);
// console.log(divisible);

//14) Given a number, “isEven” returns whether it is even.
// function isEven(num){
//     if(num%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
//  }
//    var even = isEven(10);
//    console.log(even);

//15) Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// function areBothOdd(num1, num2){
//     if((num1,num2)%2!=0){
//         return true;
//     }
//     else{
//         return false;
//     }
//     }
//     let odd = areBothOdd(1,8);
//     console.log(odd);

//16) Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
// function getFullName(firstName, lastName){
//      console.log(`${firstName} ${lastName}`);
// }
// getFullName("GUVI","GEEK");

//17) Write a function called “getLengthOfWord”.
//Given a word, “getLengthOfWord” returns the length of the given word.
// function getLengthOfWord(word1){
//     let word = word1.split("");
//     let length =word.length;
//     return length;
//    }
//    let result =getLengthOfWord("GUVI");
//    console.log(result);

//18) Given two words, “isSameLength” returns whether the given words have the same length.
// function isSameLength(word1, word2){
//     let word = word1.split("");
//     let length =word.length;
//     let wor = word2.split("");
//     let length1 = wor.length;
//     if(length==length1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let result = isSameLength("GUVI","GEEK");
// console.log(result);

//19)Create a function to calculate the distance between two points defined by their x, y coordinates

// console.log(getDistance(100, 100, 400, 300));
// function getDistance(x1, y1, x2, y2)
// {
//     var dist = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
//     return dist;
// }

//20) Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. 
// function getNthElement(array,n){
//     array =array.length;
//     return array;
//    }
//    let result =getNthElement([1, 3, 5], 1);
//    console.log(result);

//21) Given an array, “getLastElement” returns the last element of the given array.

// function getLastElement(array){
//     let result=array[array.length-1];
   
//    return result;
// }
// console.log(getLastElement([1, 2, 3, 4]));

//22) Given an object and a key, “getProperty” returns the value of the property at the given key.

// var obj = {
//     mykey: "value"
//    };
//    function getProperty(obj,key) {
//      let result =obj.mykey;
//      return result;
//    }
//    console.log(getProperty(obj, "mykey"));

//23) Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

// var obj = {
//     mykey: "value"
//    };
//    function addProperty(obj, key){
//     obj.mykey="true";
//     return obj;
//    }
//    console.log(addProperty(obj, "mykey"));

//24) Given an object and a key, “removeProperty” removes the given key from the given object.
// var obj = {
//     mykey: "value"
// };

// function removeProperty(obj, key){
//     delete obj.mykey;
//     return obj;
//    }
//    console.log(removeProperty(obj, "mykey"));

//25) Create a function that receives an array of numbers and returns an array containing only the positive numbers
// function getPositives(ar)
// {
//     let posarr=[];
//  for(let i=0;i<ar.length;i++){
//      if(ar[i]>=0){
//         posarr.push(ar[i]);
//      }
//  }
//  return posarr;
// }
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var ar2 = getPositives(ar);
// console.log(ar2);

//26)Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
// function powersOfTwo(n){
//     let res ="";
//      for(let i=0;i<=n;i++){
//         res+=2**i+",";
//         console.log(res);
//         }
//     }
// powersOfTwo(2);

//27)Find the maximum number in an array of numbers
// function findMax(ar)
// {
//     let res =Math.max(...ar);
//     return res;
// }
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var max = findMax(ar);
// console.log("Max:" , max);

//28)Reverse a string

// function reverseString(s)
// {
//    let string = s.split("");
//    let rev = string.reverse();
//    let nwstr= rev.join("");
//    return nwstr;
// }
// var str = reverseString("JavaScript");
// console.log(str);
//29)Create a function that will merge two arrays and return the result as a new array
// var ar1 = [1, 2, 3];
// var ar2 = [4, 5, 6];
// var ar = mergeArrays(ar1, ar2);
// console.log(ar);
// function mergeArrays(ar1, ar2)
// {
//  var result = [];
// //this will add the first array to the result array
// for(let el of ar1)
//  {
//  result.push(el);
//  }
//  for(let el of ar2)
//  {
//  result.push(el);
//  }
//  //Some piece of code goes here 
 
//  return result;
// }

//30)Calculate the sum of numbers received in a comma delimited string
// console.log(sumCSV(("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")));
// function sumCSV(s)
// {
//     let strArr = s.split(",");
//     let sum = strArr.reduce(function(total, num){
//       return parseFloat(total) + parseFloat(num);
//     });

//     return sum;
// }

//31)Print the first 100 prime numbers
// printPrimes(100);

// // Function prints the first nPrimes numbers
// function printPrimes(nPrimes)
// {
//     let n = 0;
//     let i = 2;
    
//     while(n < nPrimes)
//     {
//         if (isPrime(i))
//         {
//             console.log(n, " --> ", i);
//             n++;
//         }
        
//         i++;
//     }
// }


// // Returns true if a number is prime
// function isPrime(n)
// {
//     if (n < 2)
//         return false;
        
//     if (n == 2)
//         return true;
    
//     let maxDiv = Math.sqrt(n);
    
//     for(let i = 2; i <= maxDiv; i++)
//     {
//         if (n % i == 0)
//         {
//             return false;
//         }
//     }
    
//     return true;
// }

//32)
// console.log(getPrimes(10, 100));

// function getPrimes(nPrimes, startAt)
// {
//     let ar = [];
    
//     let i = startAt;
    
//     while(ar.length < nPrimes)
//     {
//         if (isPrime(i))
//         {
//             ar.push(i);
//         }
        
//         i++;
//     }
    
//     return ar;
// }

// // Returns true if a number is prime
// function isPrime(n)
// {
//     if (n < 2)
//         return false;
        
//     if (n == 2)
//         return true;
    
//     let maxDiv = Math.sqrt(n);
    
//     for(let i = 2; i <= maxDiv; i++)
//     {
//         if (n % i == 0)
//         {
//             return false;
//         }
//     }
    
//     return true;
// }
