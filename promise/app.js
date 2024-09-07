//===========
//* Promise
//===========

//! What is promise ?
//? Promise is JS method.
//? Inside promise method we pass a callBack function.
//? we pass two parameter , these two parameter are two method.
//? 1. resolve() 2. reject()

//! pending --> resolve() or pending --> reject()

//===========
//* Example
//===========

//* const promise = new Promise((resolve, reject) => {});
//* console.log(promise);
// [[PromiseState]]: "pending";

//* const promise = new Promise((resolve, reject) => {
//*   resolve("function is okk");
//* });
// console.log(promise);
//[[PromiseState]]: "fulfilled"
//[[PromiseResult]]: "function is okk"

//* const promise = new Promise((resolve, reject) => {
//*   reject("function is problematic");
//* });
// console.log(promise);
//[[PromiseState]]: "rejected"
//[[PromiseResult]]: "function is problematic"

//! ===========
//? Code Explenetion
//! ===========

//* create a callBack function :-
// function callBack(resolve, reject) {
//   let value = false;
//   if (value === false) {
//     resolve(["halim", "nasir", "jamal kodhu"]);
//   } else {
//     reject(["shaown", "tawsif", "khaled"]);
//   }
// }
//* create new Promise , pass this callBack function as argument of Promise and store it in promise varible ...
// const promise = new Promise(callBack);

// promise
//   .then((mango) => {
//     //# in then() method we get the value of resolve
//     console.log(mango[2]);
//   })
//   .catch((orenge) => {
//     //# in catch() method we get the value of reject
//     console.log(orenge[0]);
//   });

//! ===========
//? same thing inside a function :-
//! ===========

// function promiseFunc(x) {
//   //# create promise
//   const promise = new Promise((resolve, reject) => {
//     if (x) {
//       resolve(["halim", "nasir", "jamal kodhu"]);
//     } else {
//       reject(["kamal chora", "tawsif", "khaled"]);
//     }
//   });
//   //# promise chane :-
//   const p = promise
//     .then((mango) => {
//       //# in then() method we get the value of resolve
//       return mango[2];
//     })
//     .catch((orenge) => {
//       //# in catch() method we get the value of reject
//       return orenge[0];
//     });

//   return p;
// }

// const valueOfPromiseFunc = promiseFunc(true);
// // console.log(valueOfPromiseFunc); //# Promise {<pending>}

// valueOfPromiseFunc
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log(reject));

//! ===========
//? Promise Chain and use it in real life...
//! ===========

const btn = document.querySelector(".btn-1");
const name = document.querySelector(".name");
const town = document.querySelector(".town");
const village = document.querySelector(".village");

const showFunc = (a, b, c) => {
  name.textContent = a;
  town.textContent = b;
  village.textContent = c;
};

const bioObj = {
  name: "Yusuf",
  town: "andorkillah, Chittagong",
  village: "senbag, noakhali",
};

const promis = new Promise((resolve, reject) => {
  let value = false;
  value !== true ? resolve(bioObj) : reject(console.log("Error Function"));
});

btn.addEventListener("click", () => {
  promis.then((data) => {
    const { name, town, village } = data;
    showFunc(name, town, village);
  });
});

// const url = "https://fakestoreapi.com/products";

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data);
//       // displayItem(data);
//       // console.log(displayItem(data));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// ===========
//* async / await
// ===========

//? async function always return a promise

//? const asyncFunc = async () => { }
//? console.log(asyncFunc())
//? Promise {<fulfilled>: undefined}
//? [[PromiseState]]: "fulfilled"
//? [[PromiseResult]]: undefined

//! the specality of async func is that , using async func we can can usw await and async func always return a promise...

// btn.addEventListener("click", async () => {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// });

const displayItem = (item) => {
  // const displayData = item
  //   .map((element) => {
  //     let { category, description, price } = element;
  //     return `<h3>${category}</h3>`;
  //   })
  //   .join("");

  const { category } = item;
};

//========
//? Code Practice
//========

//! What is Promise ? [https://javascript.info/promise-basics]

// const promise = new Promise((resolve, reject) => {});

// console.log(promise);

// const myName = (name) => {
//   return `My name is ${name}`;
// };

// const p = new Promise((resolve, reject) => {
//   // const value = true;
//   // value ? resolve("success") : reject("failure");
//   const value = 3 + 5;
//   // value === 9 ? resolve("success") : reject("failure");
//   value === 9 ? resolve(myName("shahin")) : reject(myName("shovo"));
// });

// console.log(p); // we get response from p. p store resolve or reject value

////# If value === true p gonna fullfill other hand value === false, p gonna reject. Too get this value properly , we build a Promise chain

// p.then((mes) => console.log(mes)).catch((mes) => console.log(mes));
////# We add then() method after p, anything(value, array , obj , func) which gonna resolve in p ,we gonna find inside then() method.

////# we also add catch() method to catching error. If our promise gonna reject , we get the rejection message inside catch() method...

//==========
//! Complecated Example
//==========

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    location === "google"
      ? resolve("google say Hi")
      : reject("only google is excepted");
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information, ${response}`);
  });
}

// makeRequest("google"); //# "Making request to google"

//* create promise chain :-
// makeRequest("google")
//   .then((resp) => {
//     console.log(resp);
//     return processRequest(resp);
//   })
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((err) => console.log(err));

// console.log(fetch());
//# fetch() method is a promise base function...

//* async await :-

//! What is async/await ? [https://javascript.info/async-await]

async function doWork() {
  //# For handling error we use tryCatch inside async func...

  //! What is try/catch  ? [https://javascript.info/try-catch]
  try {
    const resp = await makeRequest("googles");
    // makeRequest(location);
    console.log("Request receive");
    const processResp = await processRequest(resp);
    console.log(processResp);
  } catch (error) {
    console.log(error);
  }
}

//* In web side we use fetch() method.
//! What is fetch ?? [https://javascript.info/fetch]

// doWork();
