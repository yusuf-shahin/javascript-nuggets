//! =============
//? Arrow Function
//! =============

//? Arrow Functions or Fat Arrow Functions
//? no name like func declaration , it will always func expression.

//! what is function expression ?
//? Syntax for Function Declaration :-
//# function functionName(x, y) { statements... return (z) };
//? Syntax for Function Expression (anonymous) :-
//# let variableName = function(x, y) { statements... return (z) };

//? no function keyword
//? implicit return statement

//* regular func
// function sayHi() {
//   console.log("hello");
// }
// sayHi();

//* same thing in arrow func
// const hello = () => console.log("hello");
// hello();

//* regular func
// const hello = function(name) {
//   console.log(`Hello ${name}`);
// };
// hello("bob");

//* arrow func
const hello = (name) => console.log(`hello ${name}`);
hello("bob");

//* one parameter in regular func
function triple(value) {
  return value * 3;
}
const tripleNum = triple(4);
console.log(tripleNum);

//* one parameter in arrow func
const double = (value) => value * 2;
//# arrow func will auto(implicit) return
const doubleNum = double(4);
console.log(doubleNum);

// two parameters and more than one line
const multiply = (num1, num2) => {
  const result = num1 * num2;
  // more code here
  return result;
};
const sum = multiply(3, 4);
console.log(sum);

//* return object
const object = () => ({ name: "bob", age: 25 });
const person = object();
console.log(person);

//* arrow functions as callback functions
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number) => number > 2);
console.log(big);

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => console.log("you clicked me"));

//! ==============
//? 'this' keyword
//! ==============

const bob = {
  firstName: "bob",
  lastName: "smith",
  sayName: function () {
    console.log(this); // bob obj
    setTimeout(function () {
      //# in regular func "this" refers its parents , left of the dot
      console.log(this); // window onj
      //# in regular func setTimeOut parent is window obj
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
    setTimeout(() => {
      //# in arrow func "this" refers its current surrending scope
      console.log(this);
      //# in arrow func setTimeOut parent is current obj
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

// const anna = {
//   firstName: "anna",
//   lastName: "sanders",
//   sayName: () => {
//     console.log(this); // window object
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
// };

// bob.sayName();
// anna.sayName();

//! ==============
//? use case of arrow func
//! ==============

const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   console.log(this);
//   //# this === btn
//   this.style.color = "black";
// });

//* setTimeOut func
btn.addEventListener("click", function () {
  setTimeout(function () {
    console.log(this);
    //# "this" dose not work in here
    this.style.color = "black";
  }, 2000);
});

// btn.addEventListener("click", () => {
//   console.log(this);
//   //# this === window
//   this.style.color = "black";
// });

//* setTimeOut func
// btn.addEventListener("click", function () {
//   setTimeout(() => {
//     console.log(this);
//     //# "this" work in here
//     this.style.color = "black";
//   }, 2000);
// });
