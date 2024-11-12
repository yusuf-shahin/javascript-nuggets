//_ Map

//! https://www.freecodecamp.org/news/set-and-map-in-javascript/

const player = new Map()
// console.log(player)

const arrayMap = new Map([
  [1, "one"],
  [2, "two"],
])
// console.log(arrayMap)

const player1 = { name: "kamal", age: 30 }

const playerData = new Map([[player1, [{ date: "today", price: 400 }]]])
console.log(playerData)

//_ Set

const simpleNum = new Set([4, 5, 5, 6, 11, 1, 2, 3, 2, 2, 3])
const numArray = [...simpleNum]
// console.log(numArray.sort((a, b) => a - b))
