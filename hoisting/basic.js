//! =============
//? hoisting
//! =============

//? Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.

//* regular function

// getName(); // Namaste Javascript
// console.log(x); // undefined

// //* function and var both are hoisted
// var x = 7;
// function getName() {
//   console.log("Namaste Javascript");
// }

//* function expression

// getName(); // Uncaught TypeError: getName is not a function
//# In here getName() behave like a varible

console.log(getName);
var getName = function () {
  console.log("Namaste JavaScript");
};
// The code won't execute as the first line itself throws an TypeError.
