//? JS is a synchronous, single-threaded language.
//? It is execute the synchronously.

console.log("hello world");
setTimeout(() => console.log("my name is yusuf"), 1000);
console.log("bye bye");

//// Javascript setTimeout() method executes a block of code after the specified time. The method executes the code only once. The commonly used syntax of JavaScript setTimeout is: setTimeout(callback, milliseconds);

//! =============
//? callback hell in Dom
//! =============

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const btn = document.querySelector(".btn");

//! callback hell :-
//? callback func --> inside a callback func --> inside a callbackfunc

//* maintain the programme of async func using callback
btn.addEventListener("click", () => {
  setTimeout(() => {
    first.style.color = "red";
    console.log("red is print");

    setTimeout(() => {
      second.style.color = "green";
      console.log("green is print");

      setTimeout(() => {
        third.style.color = "blue";
        console.log("blue is print");
      }, 2000);
    }, 3000);
  }, 1000);
});
