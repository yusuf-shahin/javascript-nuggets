//! what is callback function ?
//? A callback is a function passed as an argument to another function.

//!=============
//? simple example
//!=============

const nameCallback = (a) => {
  console.log(`hello , my name is ${a}`)
}

const node = (cbName, name) => {
  //* invoke a function inside a function
  cbName(name)
}

//* pass the function inside another function
node(nameCallback, "yusuf") //# hello my name is yusuf
node(nameCallback, "shahin") //# hello my name is shahin

//? https://www.freecodecamp.org/news/javascript-callback-function-plain-english/

//!=============
//? complecated example
//!=============

function makeUppercase(value) {
  console.log(value.toUpperCase())
}
// makeUppercase('yusuf')

function reverseString(value) {
  console.log(value.split("").reverse().join(""))
}
// reverseString("shahin");

//* create a function
function handleName(name, cb) {
  const fullName = `mohammad ${name}`
  console.log(`Hello ${fullName}`)
  cb(fullName)
}

//* passed as an argument to another function.
handleName("yusuf", makeUppercase)

//* we also passed the argument like that :-
// handleName("yusuf", (value) => {
//   console.log(value.toUpperCase());
// });

handleName("farhan", reverseString)

//* we also passed the argument like that :-
// handleName("farhan", (value) => {
//   console.log(value.split("").reverse().join(""));
// });

//! ===========
//? callback in DOM
//! ===========

const btn = document.querySelector(".btn")

//* pass the callback func in js addEventListener
// btn.addEventListener('click', function () {
//   console.log('hello world')
// })

//* same thing on different way
btn.addEventListener("click", sayHello)

function sayHello() {
  console.log("hello people")
}

//? use of callback, array methods, setTimeout etc. here we discuss about setTimeOut() :-

//// Javascript setTimeout() method executes a block of code after the specified time. The method executes the code only once. The commonly used syntax of JavaScript setTimeout is: setTimeout(callback, milliseconds);

//? JS is a synchronous, single-threaded language.
//? It is execute the synchronously.

// console.log("hello world");
// setTimeout(() => console.log("my name is yusuf"), 1000);
// console.log("bye bye");
