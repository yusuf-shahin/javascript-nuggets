//! ==================
//? Spread Operator...
//! ==================

const udemy = "udemy";
const letters = [...udemy];
//* Allows an iterable to spread/expand individually inside reciever
console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];
const bestFriend = "arnold";

//* array inside ayyay
// const friends = [boys, girls, bestFriend];

//* Allows an iterable to spread/expand individually inside reciever
const friends = [...boys, bestFriend, ...girls];
console.log(friends);

//! Why it is importent copy the value  not the referance

//* Split into single items and copy them.
const newFriends = [...friends];
// newFriends[0] = "karina";
// console.log(newFriends);
// console.log(friends);

//? If we change the value of newFriend , friends array dose not affected by it. Coz we create a new copy of friends array.

//* reference
// const newFriends = friends;
//? In here the referance of friends and newFriens array are same position.So, if we change the value of newFriends array, friends array will automatic change.

// newFriends[0] = "karina";
// console.log(newFriends);
// console.log(friends);

//! ==============
//? Spread Operator (object)
//! ==============

//? Allows an iterable to spread/expand individually inside reciever
//? Split into single items and copy them.

const person = { name: "john", job: "developer" };

//* first copy the object then change the value :-
const newPerson = { ...person, city: "chicago", name: "peter" };
console.log(person);
console.log(newPerson);

//? Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const headings = document.querySelectorAll("h3");
const result = document.querySelector("#result");

// console.log(headings.map((item) => console.log(item)));
// console.log(...headings.map((item) => console.log(item)));

let text = [...headings];
console.log(text);

const newText = text
  .map((item) => `<span>${item.textContent}</span>`)
  .join(" + ");
// console.log(newText);

result.innerHTML = newText;

//! ===============
//? function argument
//! ===============

const numbers = [23, 45, 66, 88, 2345];

console.log(Math.max(...numbers));

const john = ["john", "sanders"];

const sayHello = (name, lastName) => {
  console.log(`Hello my name is, ${name} ${lastName}`);
};

//? Allows an iterable to spread/expand individually inside reciever

//* Split into single items and copy them.
sayHello(...john);
