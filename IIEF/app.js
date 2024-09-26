//! ==================
//? IIFE Immediately-Invoked Function Expression
//! ==================

//* gloval varible
const num1 = 30;
const num2 = 50;
// const num1 = 70;

//* older approach
// function add() {
//   console.log(`the result is : ${num1 + num2}`);
// }
// add();

//? simple approach to avoid global scope pollution.
//? good way at protecting the scope of your function and the variables within it.

//* IIFE
(function () {
  //# as the varible inside the function the varible is protected...
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();
//? IIFE function are annynomous

//* pass arguments in IIFE
// (function (num3, num4) {
//   console.log(`the result is : ${num3 + num4}`);
// })(500, 900);

//* return/assing to variable
const result = (function (num3, num4) {
  // console.log(`the result is : ${num3 + num4}`);
  return `In return the result is ${num3 + num4}`;
})(500, 900);

console.log(result);
