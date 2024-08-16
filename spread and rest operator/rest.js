//! ===============
//? Rest Operator...
//! ===============
// gathers/collects the items

//* arrays
const pegion = ["makxhi", "chila", "chuina", "seraji", "lakkah"];
const [pegion2] = pegion;
console.log(pegion2); // makxhi

const fruit = ["apple", "orange", "lemon", "banana", "pear"];
const [first, second, ...fruits] = fruit;
// console.log(first, fruits);

//objects
const personRest = { name: "john", lastName: "smith", job: "developer" };
const { job, ...rest } = personRest;
// const {  ...rest,job } = personRest;
// console.log(job, rest);

const testScores = [78, 90, 56, 43, 99, 65];

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};

getAverage(personRest.name, 78, 90, 56, 43);
getAverage(personRest.name, ...testScores);
