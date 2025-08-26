const name = "Chinmoy";
const repoCount = 5;

// console.log(name + repoCount + " value");  // old 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// another method to decleare a string
const gameName = new String ("Squid-Game");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("G"));

const newString = gameName.substring(0,4);  // last letter will not be include
console.log(newString);

const anotherString =  gameName.slice(-10,4);   //we can also use negative values
console.log(anotherString);
// read slice in MDN docs

const newStringOne = "      Chinmoy     ";
console.log(newStringOne.trim());
// read trim in MDN documentation

const url = "https://chinmoy.com/chinmoy%20biswas"

console.log(url.replace('%20','-'))

console.log(url.includes('chinmoy'))    // true
console.log(url.includes('chinu'))  // false

console.log(gameName.split('-'))