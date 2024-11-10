## ...Rest Operator

- Its basically useing for gathers or collects the items

[What is different between spread and rest operator](https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/)

**in function**

```js
const num = (numbers) => {
  return numbers
}
console.log(num(1, 2, 3, 4, 5)) //# 1

const restNum = (...numbers) => {
  return numbers
}
console.log(restNum(1, 2, 3, 4, 5)) //# [1, 2, 3, 4, 5]

//? Basically we derectly get a array from rest operator. So can use any array method with them

const doubleNum = (...numbers) => {
  return numbers.map((num) => num * 2)
}

console.log(doubleNum(1, 2, 3, 4, 5)) //# [2, 4, 6, 8, 10]
```

**in arrays**

```js
const pegion = ["makxhi", "chila", "chuina", "seraji", "lakkah"]

const [pegion2, ...pegion3] = pegion
// console.log(typeof pegion2); //# makxhi --> typeof string.
// console.log(typeof pegion3); // # ["chila", "chuina", "seraji", "lakkah"] --> typeof object.

const fruit = ["apple", "orange", "lemon", "banana", "pear"]
const [first, second, ...fruits] = fruit
console.log(first, fruits) //# apple ["lemon", "banana", "pear"]
```

**in object**

```js
const personRest = { firstName: "john", lastName: "smith", job: "developer" }
const { job, ...end } = personRest
console.log(end) //# { firstName: "john", lastName: "smith" }

// const { ...rest,job } = personRest;
// console.log(job, rest); //# SyntaxError: Rest element must be last element

const testScores = [78, 90, 56, 43, 99, 65]

const getAverage = (name, ...scores) => {
  console.log(name)
  console.log(scores)
  let total = 0
  for (const score of scores) {
    total += score
  }
  console.log(`${name}'s average score is ${total / scores.length}`)
}

getAverage(personRest.name, 78, 90, 56, 43)
getAverage(personRest.name, ...testScores)
```
