const stateList = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
]

//@ return the element
// const mapState = stateList.map(ele => {
//? here ele(element) basically a object . if we return the ele , then basically we return thouse two object
//     return  ele
// })
//# [ { id: 1, count: 0 }, { id: 2, count: 0 } ]

//@
const mapState = stateList.map((ele) => {
  //? as value of ele is  object.
  // return { ele }
  //! example :
  const abc = { name: "yusuf", id: 3 }
  return { abc }
})
//# [ { ele: { id: 1, count: 0 } }, { ele: { id: 2, count: 0 } } ]

//@ return the object copy
// const mapState = stateList.map((ele) => {
//? here we copy the ele(element) , which is basically a objecy. Change the value of count in ele . Then pass those things as object
//   return { ...ele, count: 44 }
// })
//# [ { id: 1, count: 44 }, { id: 2, count: 44 } ]

// console.log(stateList)
console.log(mapState)
