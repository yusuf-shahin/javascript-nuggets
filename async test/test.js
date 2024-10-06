// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// callbacks, promises, async/await

// boilWater();
// console.log(`chop carrot`);

// function boilWater() {
//   console.log('boiling 5 min...');
//   setTimeout(() => {
//     console.log(' boiling  done.');
//     console.log('add carrots.');
//     console.log('carrots boiling 5 min.');
//     setTimeout(() => {
//       console.log('carrots boiling done');
//       console.log('add onions');
//       console.log('boiling onion 5 min');

//       setTimeout(() => {
//         console.log('onion boiling done');
//       }, 5000);
//     }, 5000);
//     console.log('chop onion');
//   }, 5000);
// }

//? ==================
//* callBack hell
//? ==================

// console.log('hello my name is yousuf');
// console.log('I woke up 11 pm');
// setTimeout(() => {
//   // after 5 sec coffe function will call
//   coffe();
//   // after 5 sec coffe function will call
//   setTimeout(() => {
//     // after printing coffe function this function will call

//     code();
//   }, 5000);
// }, 5000);

// function coffe() {
//   console.log('After woking up, drinking coffe in 2min');
// }
// function code() {
//   console.log('After drinking coffe , do some random code in js');
// }
// console.log('Eat breakfast');
// console.log('Eat lunch');
// console.log(' Eat dinner');

// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback

//? ==================
//* Dom callBack hell
//? ==================

// const heading1 = document.querySelector('.one');
// const heading2 = document.querySelector('.two');
// const heading3 = document.querySelector('.three');

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     heading1.style.color = 'red';
//     setTimeout(() => {
//       heading2.style.color = 'green';
//       setTimeout(() => {
//         heading3.style.color = 'blue';
//       }, 1000);
//     }, 2000);
//   }, 1000);

//   //
// });

//? ==================
//* Promise chain
//? ==================

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   // console.log('hello world');

//   const promise = new Promise((resolve, reject) => {
//     let value = true;
//     if (value) {
//       resolve({
//         name: 'Yusuf Shahin',
//         address: 'andorkillah , chittagong',
//       });
//     } else reject('connection error');
//   });

//   promise
//     .then((res) => console.log(res.address))
//     .catch((rej) => console.log(rej));
// });

//? ==================
//* Dom Promise chain
//? ==================

// const heading1 = document.querySelector('.one');
// const heading2 = document.querySelector('.two');
// const heading3 = document.querySelector('.three');
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//   addColor(1000, heading1, 'red')
//     .then(() => addColor(2000, heading2, 'green'))
//     .then(() => addColor(1000, heading3, 'blue'))
//     .catch((err) => console.log(err));
// });

// function addColor(time, element, color) {
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(new Error(`There is no such element ${element}`));
//     }
//   });
// }

//? ==================
//* async / await ...
//? ==================

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
  const result = await displayColor();
  console.log(result);
});

async function displayColor() {
  try {
    const first = await addColor(1000, heading1, 'red');
    await addColor(1000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
    console.log(first);
  } catch (error) {
    console.log(error);
  }
  return 'hello';
}

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}
