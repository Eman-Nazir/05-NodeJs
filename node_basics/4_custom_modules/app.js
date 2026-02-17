const { multiply, subtract, greet, shout, firstItem } = require("./index");

//  math functions
console.log("Multiply:", multiply(6, 7)); 
console.log("Subtract:", subtract(15, 4)); 

//  string functions
console.log(greet("Eman")); 
console.log(shout("hello nodeJS")); 

//  array function
console.log("First item:", firstItem([10, 20, 30]));
