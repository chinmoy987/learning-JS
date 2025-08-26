// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);     // Object

let myCreatedDateOne = new Date(2025,0,23);
console.log(myCreatedDateOne.toDateString())       // run to see
// In javascript months starts from zero

let myCreatedDateTwo = new Date(2025,0,23,15,40);
console.log(myCreatedDateTwo.toLocaleString()) 
                                // YYYY-MM-DD
let myCreatedDateThree = new Date("2025-01-14")
console.log(myCreatedDateThree.toLocaleString()) 
                             //   MM-DD-YYYY
let myCreatedDateFour = new Date("01-14-2025")
console.log(myCreatedDateFour.toLocaleString()) 

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDateOne.getTime());

console.log(Math.floor((Date.now())/1000));

// Read all the methods, Run them and check the output