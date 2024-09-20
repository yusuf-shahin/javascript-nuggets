//? fetch always return a promise
const url = "https://api.github.com/users"

// fetch(url);

// console.log(fetch(url)); //promise

// fetch(url)
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log(err))

//#  .then((resp) => console.log(resp)) -->
//? in console we get the resp . In resp [Prototype] we get json . Which is another promise chain

// fetch(url)
//   .then((resp) => console.log(resp))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

//? in console we get the data .

//! =============
//? async/await
//! =============

//? the work of async func is similar like regular function . But it always return a promise

// const getTours = async () => {
//   try {
//     const resp = await fetch(url)
//     const data = await resp.json()
//     console.log(data)
//     // return resp.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

// getTours() //# we get the data in console

//? async func always always return a promise .

const getTours = async () => {
  try {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

console.log(getTours()) //# in console we get a promise.

//* create another async func to show the data in console
const showTours = async () => {
  const data = await getTours()
  return data[3].node_id
}

//? or we can create a promise chain .

// showTours() //# we get the data

showTours().then((resp) => console.log(resp)) //# MDQ6VXNlcjQ=
