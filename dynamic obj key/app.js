//! =============
//? dot notation
//! =============

const person = {
  name: "Ysusf",
}

person.age = 27

console.log(person) //# {name: 'Ysusf', age: 27}

//! =============
//? squre bracket notation
//! =============

//? when we use bracket notation , we must use string inside bracket
//_ Example
console.log(person["name"]) //# "Yusuf"

//* Basics

const item = {
  "feather-items": ["item1", "item2"],
}

item["item-property"] = "perfume set"

console.log(item) //# {feather-items: Array(2), item-property: 'perfume set'}

console.log(item["feather-items"]) //# ['item1', 'item2']

//! ==============
//? create dynamic key using squre bracket notation
//! ==============

let appState = "loading"

let app = {
  [appState]: true,
}

console.log(app) //# {loading: true}
//? here key name of app obj === value of appState

//! ==========
//? second example
//! ==========

appState = "error"

app = {
  [appState]: true,
  //# value of appState == error
  //# error : true
}

//* add item
app["key-name"] = "apple"

console.log(app) //# {error: true ,  key-name: 'apple'}

const state = {
  loading: "true",
  name: "",
  job: "",
}

//* create a function to add key dinamically
function updateState(key, value) {
  state[key] = value
}

updateState("job", "developer")
updateState("name", "shahin")

console.log(state) //# {loading: 'true', name: 'shahin', job: 'developer'}

//* we also update and add element

// add
updateState("location", "chittagong")
// update
updateState("loading", "false")
console.log(state) //# {loading: 'false', name: 'shahin', job: 'developer', location: 'chittagong'}
