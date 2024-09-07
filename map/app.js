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

//* pass argument as callBack function
// const ages = people.map(getAges);
// console.log(ages);

//* same thinf in different way :-
const name = people.map((e) => {
  // return e.name;
  //# same thing on different way
  const { name } = e;
  return name;
});
console.log(name);
// console.log(ages.join(""));

//* create a new object of array using map method :-
const newPeople = people.map((item) => {
  //* return a object...
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
// console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector("#result");

console.log(names.join("")); // get everything as a long string
result.innerHTML = names.join("");

//! ============
//? map in advance mathod
//! ============

//* array of obj
const products = [
  {
    id: 1,
    name: "albany sofa",
    image:
      "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
    price: 39.95,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 2,
    name: "entertainment center",
    image:
      "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg",
    price: 29.98,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 3,
    name: "albany sectional",
    image:
      "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg",
    price: 10.99,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 4,
    name: "leather sofa",
    image:
      "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg",
    price: 9.99,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
];

//* create a new array of obj using map
const newProducts = products.map((product) => {
  //# obj destructering
  const { id, name, price } = product;
  //# return new created obj
  return { id, name, price };
});

console.log(newProducts);
