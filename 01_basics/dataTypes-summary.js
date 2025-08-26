//  Primitive  DataTypes

// 7 types : string, Number, Boolean, null, undefined, Symbol, Bigint
/*
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;   // by default undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);
*/
// const bigNumner = 347834785454545446656654636366363n;

// Reference (Non Primitive)

// Arrays, Objects, Functions

// Array
// const heros =["Shaktiman","naagraj","doga"];

// Object
/*
let myObj={
    fullName: "Chinmoy Biswas",
    age: 22,    
};
*/
//Function
/*
const myFunction = function(){
    console.log("Namaste Duniya");
}
*/
//Read documentation
// https://262.ecma-international.org/5.1/#sec-11.4.3 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Two types of memory
// Stack Memory(Primitive), Heap Memory(Non Premitive)
// Stack mrmory -> We will get copy of a variable
//Heap Memory -> Referance of orginal value

let myName = "Chinmoy Biswas";
let anotherName = myName;

console.log(myName);

anotherName = "Chinmoy";
console.log(anotherName);   // myName is not changed

let userOne = {
    email: "user@google.com",
    upi:"user@ibp"
}

let userTwo = userOne;

userTwo.email = "Chinmoy@google.com";

console.log(userOne.email)
console.log(userTwo.email)      // email is changed everywhere
