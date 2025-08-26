const score = 400;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));       // read in MDN

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // read in MDN

const hundreads = 100000000;
console.log(hundreads.toLocaleString('en-IN'));     //read

//+++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  // only changes the negative value
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5 ,always choose the top value
console.log(Math.floor(4.2)); //4,always choose the lowest value
console.log(Math.min(2, 3, 4, 5)) //2
console.log(Math.max(2, 3, 4, 5)) //5

console.log(Math.random());
console.log(Math.floor((Math.random() * 10) + 1));

// extremely important
const min = 10;
const max = 20;
// to range between 10 and 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min );