//! =================
//? global name space / hard to navigate
//! =================

//* import from data.js , must export varible and function name need to match
import { random as pompom, people } from "./utils/data.js";

//* import from showPeople.js, do not need to match the name
import anyname from "./utils/showPeople.js";

//* default import
// import get from "./utils/getElement.js";

//*  {} import :-
import { get } from "./utils/getElement.js";

//! ===================
//? code start
//! ===================

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn")
const container = get(".container");
const btn = get(".btn");

console.log(pompom);

//* value of below function import from showPeople.js
// const showPeople = () => {
//   const newPeople = people
//     .map((person) => {
//       const { name, job } = person;
//       return `<p>${name} <strong>${job}</strong></p>`;
//     })
//     .join("");
//   container.innerHTML = newPeople;
// };

btn.addEventListener("click", () => {
  //# value of anyName() come from showPeople.js
  container.innerHTML = anyname(people);
});
