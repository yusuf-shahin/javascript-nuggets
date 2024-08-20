//! ===============
//? Hoisting
//! ===============

// function and var declarations are hoisted
// safer to access only after initialized

//* invoke the function :-
display();
moreComplex(random); // undefine

console.log(display);
console.log(moreComplex);

//* console the varible
// console.log(firstName);
// console.log(lastName);
// console.log(random);

const firstName = "john";
let lastName = "jordan";
var random = "random";

//* function are hoisted
function display() {
  console.log("hello world");
}

function moreComplex(x) {
  console.log(`${x}`);
}
