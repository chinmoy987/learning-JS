// some simple comparison operators
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == );
// etc...........

// when same datatypes are not compared
console.log("2" > 1);            // changes the data types
console.log("02" > 1);           // somoetimes we will get some outpurs which are not as same as we assume
console.log(2 > true);
console.log("2" > true);

console.log(null > 0);      //false         // avoid this kind of comparisons
console.log(null == 0);     // false
console.log(null >= 0);     // true, value conversion problem occured

// the reason is that an equality check "==" and comparison "<,>,<=,>=" work differently.
// Comparisons convert null to a number, treating it as 0.
//Thats why (3) null >=0 is true and (1) null > 0 is false

console.log(undefined == 0);    // false        // avoid this kind of comparisons
console.log(undefined > 0);     //false
console.log(undefined < 0);     //false    //ALWAYS FALSE FOR UNDEFINED

console.log("2" === 2);    //"===" checks the datatypes also