//! ==================
//? Arrays Destructuring
//! ==================

//? faster/easier way to access/unpack values from arrays
//? objects into variables

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

//* without array destructuring :-
const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon);

//? Array destructuring always maintain the sequelae of index number of array

//* array destructuring :-
const [john, , enemy, , susan] = friends;
// console.log(john, enemy, susan); //// "jhon","bob","kelly"

//! ==================
//? Destructuring swap varible
//! ==================

let glassOne = "milk";
let glasstwo = "water";
console.log(glassOne, glasstwo);

//* varible swaping
// let glassThree = glassOne;
// glassOne = glasstwo;
// glasstwo = glassThree;
// console.log(glassOne, glasstwo);

//* array swap
[glassOne, glasstwo] = [glasstwo, glassOne];
console.log(glassOne, glasstwo);
