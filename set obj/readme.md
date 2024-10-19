## Set object

- The Set object allows you to store a collection of elements, just like an Array. But here the value is store in a object . [click here to learn more ...](https://www.freecodecamp.org/news/javascript-map-and-set-objects-explained/)

#### Basic example :-

```js
const unique = new Set()
console.log(unique)

//! add

unique.add("first")
unique.add("first")
unique.add("first")

console.log(unique) //# Set(1) {'first'}

const random = "third"

unique.add("first")
unique.add("second")
unique.add(random)
unique.add(4)

console.log(unique) //# Set(4) {'first', 'second', 'third', 4}

//! delete

const result1 = unique.delete("third")
console.log(result1) //# true

console.log(unique) //# Set(3) {'first', 'second', 4}

const result2 = unique.delete("five")
console.log(result2) //# false

console.log(unique) //# Set(3) {'first', 'second', 4}

//! clear()

unique.clear()

console.log(unique) //# Set(0) {size: 0}
```

### new Set to except etarable object

- create a array of obj
- find the unique value
- store it in a array
- add a new Item

```js
const example = [
  {
    title: "ui designer",
    companyName: "salva",
  },
  {
    title: "front end dev",
    companyName: "jazz",
  },
  {
    title: "back end dev",
    companyName: "giga",
  },
  {
    title: "data management",
    companyName: "raiso",
  },
  {
    title: "front end dev",
    companyName: "jazz",
  },
]

//* map
const company = example.map((ele) => ele.companyName)
console.log(company) //# {'salva', 'jazz', 'giga', 'raiso', 'jazz'}

//* set
// basically we pass the company in here
const uniqueCompany = new Set(company)
console.log(uniqueCompany) //# {'salva', 'jazz', 'giga', 'raiso'}

//? typeof unique value is obj , how we turn it into a array ?

const uniqueCompanyArr = [...uniqueCompany]
console.log(uniqueCompanyArr) //#  ['salva', 'jazz', 'giga', 'raiso']

//? we also add element

const extraCompany = [...uniqueCompanyArr, "zerojan"]
console.log(extraCompany) //# ["salva", "jazz", "giga", "raiso", "zerojan"]
```

**One line shot**

```js
const oneLineAll = [...new Set(example.map((ele) => ele.companyName)), "raiso"]

console.log(oneLineAll) //#  ['salva', 'jazz', 'giga', 'raiso', 'raiso']
```