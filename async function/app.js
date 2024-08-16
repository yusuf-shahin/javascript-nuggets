//? synch ronous code base :-
// console.log("My name is yousuf");
// console.log("currently learning Javascript");
// console.log("few days practice CP");
// console.log("future plan learning python");

//! function diclare :-

function wakeup() {
  console.log("Wake up in the morning...");
}
function coffe() {
  console.log("drink coffe");
}
function coding() {
  console.log("Practice coding");
}
function sleep() {
  console.log("sleep at late night.");
}

//? synchronous function :-
// wakeup();
// coffe();
// coding();
// sleep();

//? asynchronous function :-
// setTimeout(wakeup, 1000);
// coffe();
// coding();
// sleep();

//! async/await solution :-

function upsideWakeup() {
  return (promise = new Promise((resolve, reject) => {
    //# promise pass two method, resolve() and reject()
    resolve(wakeup());
  }));
}

// async function asyncFunc() {
//   await promise;
//   coffe();
//   coding();
//   sleep();
// }

async function asyncFunc() {
  const wakeup = await upsideWakeup();
  wakeup;
  await coffe();
  await coding();
  await sleep();
}

// async function syncFunc() {
//   // const wakeup = await upsideWakeup();
//   // console.log(wakeup);
//   coffe();
//   coding();
//   sleep();
// }

// syncFunc();
// asyncFunc();

const greet = (name) => {
  console.log(`hello ${name}`);
  return 5;
};

// closure

const value = greet("Everyone");
console.log("my name is yousuf shahin");
console.log(value);
// console.log(greet("fahim"));

//? first thing before function declaration
