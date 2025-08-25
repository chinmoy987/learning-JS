const userId=12345;
var userEmail="chinmoy@growUpCoder.com";
let userCountry="India";
userCity="Kolkata";

console.table([userId,userEmail,userCountry,userCity]);

// userId=45363563; 
//redefining the data of const is not possible

userEmail="helloWorld@gup.com";
userCountry="Bharat";
userCity="Bengaluru";

console.table([userId,userEmail,userCountry,userCity]);

/*
    prefer not to use var
    beacuse of issues in block scope and functional scope
*/