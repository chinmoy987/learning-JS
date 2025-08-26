let score =" 33";   // string will convert to a number
// let score =" 33abc";   // NaN(Not a Number)
// let score = null;       // when connvert to number terurn 0
// let score = undefined;   // NaN
// let score = true;        // return 1
// let score = "Chinmoy";   // NaN


 console.log(typeof score);
console.log(typeof(score));     // another way to write with bracket

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

 let isLoggedIn = 1;  // true in boolean
// let isLoggedIn = "";    // false in boolean
// let isLoggedIn = "Chinmoy";    // true in boolean

let booleanIslogeIn = Boolean(isLoggedIn);
console.log(booleanIslogeIn);



let sumNumber = 33;
let stringNumner = String(sumNumber);
console.log(stringNumner);
console.log(typeof stringNumner);

// ***********************************************OPERATIONS**********************************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(6+2);
// console.log(6-2);
// console.log(6*2);
// console.log(6/2);
// console.log(6**2);
// console.log(6%2);

// let str1 = "Hello";
// let str2= " Chinmoy";

// let str3= str1+str2; 
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
//                             // WRITING CODE IN THIS WAY IS NOT SO EFFICIENT
// console.log("1" + 2 +2);
// console.log(1 + 2 + "3");

// console.log(( 3 + 4 ) * 5 % 3);

console.log(+true);     // wrost way to write code (output: 1)
// console.log(true+);     // wrong
console.log(+"")    // output: 0, but don't do this kind of things

console.log(-true);     // wrost way to write code ( output:  -1)

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;   // code is not consistent

let gameCounter =100;
// gameCounter++;  // output: 101; (postfix)    //  read mdn for better knowledge
++gameCounter;      // output: 101 (postfix)
console.log(gameCounter);