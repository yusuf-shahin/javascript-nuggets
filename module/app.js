//! =================
//? global name space / hard to navigate
//! =================

//* import from "data.js" , must export varible and function name need to match
import { random as pompom, people } from "./utils/data.js";

//* import from "showPeople.js", do not need to match the name
import anyname from "./utils/showPeople.js";

//* default import from "getElement.js"
// import get from "./utils/getElement.js";

//*  import from "getElement.js" by obj destructuring :-
import { get } from "./utils/getElement.js";

//! ===================
//? code start
//! ===================

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn")
const container = get(".container");
const btn = get(".btn");

console.log(pompom);

btn.addEventListener("click", () => {
  //# value of anyName() come from showPeople.js
  container.innerHTML = anyname(people);
});

//? js modules means, build any js datatype (varible, array , obj, func) "export" them and use then anypage by "import" .
