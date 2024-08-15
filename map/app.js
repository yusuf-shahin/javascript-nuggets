//! MAP Method

//* What is map?
//# https://www.freecodecamp.org/news/javascript-map-method/

const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];

//? returns a new array
//? does not change the size of original array (unlike filter)
//? uses values from original array when making new one

//* create a function
const getAges = (person) => person.age * 2;

//* pass callBack function
const ages = people.map(getAges);
console.log(ages);
// console.log(ages.join(""));

const newPeople = people.map((item) => {
  //* return a object...
  return {
    firsName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector("#result");

console.log(names.join("")); // get everything as a long string
result.innerHTML = names.join("");