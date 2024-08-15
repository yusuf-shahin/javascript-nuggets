//? A function in JavaScript is a reusable block of code that performs a specific task. You define it once, and then you can run (or “call”) it whenever you need that task done in your program. In javascript everything act like function

//! Long story shorts, Function is the code execution context in javascript.

//* There are two execution context :-

//# 1. gloval execution context. (window)
//# 2. local  execution context.

//? Beside this we can store any value string, array, func in func by using return .

//! Code execution context :-

//* diclare func
function greet(name) {
  console.log(`hello everyone , my name is ${name}`);
}

//* invoke func
// greet('yusuf');
// greet('sabqat');

//* store this func in a varible
const hi = greet;
hi("azad");
//# we dont invoke this func when we store it in a varible. When we invoke this func , this function will execute. We just pass this in a varible.
//// const hi = greet('azad')

//! But if we store a value using func. We can do that thing. For example:-

function add(f, s) {
  return `f + s = ${f + s}`;
}
// const get = add(5, 7);
// console.log(typeof add); // function
// console.log(typeof add()); // string
// console.log(typeof get); // string

//* diff thing
const get = add;
console.log(typeof get); // function
console.log(get(45, 22)); // string

//! ==============
//? return func inside func
//! ==============

const returnFunc = () => {
  const insideReturnFunc = (n) => {
    return `My favourite prog lang is ${n}`;
  };
  return insideReturnFunc;
};

console.log(returnFunc()("haskle"));
// same thing :-
const keepValue = returnFunc();
console.log(keepValue);
console.log(keepValue("python"));

// ==============

// const returnFunc2 = (n) => {
//   const insideReturnFunc = () => {
//     return `My favourite prog lang is ${n}`;
//   };
//   return insideReturnFunc;
// };

// const keepValue2 = returnFunc2("C++");
// console.log(keepValue2);
// console.log(keepValue2());

// ================

// const pName = 'java'

// const returnFunc3 = () => {
//    const  insideReturnFunc = () => {
//       return `My favourite prog lang is ${pName}`
//    }
//  return insideReturnFunc;
// }

// const keepValue3 = returnFunc3();
// console.log(keepValue3())
