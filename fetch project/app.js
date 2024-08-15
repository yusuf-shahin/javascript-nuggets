const url = "https://icanhazdadjoke.com/";
const wrongUrl = "https://icanhazdadjo.com/";
const extenUrl = "https://icanhazdadjoke.com/fff";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// btn.addEventListener("click", () => {
//   // console.log("hello world");
//   fetchDadJoke();
// });

// //* create async function
// const fetchDadJoke = async () => {
//   try {
//     result.innerHTML = `<h3 style="color: purple;">Loading...</h3>`;
//     const resp = await fetch(url, {
//       headers: {
//         Accept: "application/json",
//         "User-Agent": "learning app",
//       },
//     });
//     //* to see our resp status , is that ok:true or ok:false .
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error(" error");
//     }

//     const data = await resp.json();
//     console.log(data);
//     result.textContent = data.joke;
//   } catch (error) {
//     //# If the url of API is wrong then it show this meessage...
//     // for example "https://icanhazdadjo.com/" this url is wrong
//     result.innerHTML = `<h3 style="color: brown;">There is no joke... :)</h3>`;
//   }
// };

// //* See the the after opening window , invoke the function outside.
// fetchDadJoke();

//* create async function
// const fetchDadJoke = async () => {
//   try {
//     result.innerHTML = `<h3 style="color: purple;">Loading...</h3>`;
//     const resp = await fetch(url, {
//       headers: {
//         Accept: "application/json",
//         "User-Agent": "learning app",
//       },
//     });
//     //* to see our resp status , is that ok:true or ok:false .
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error("error");
//     }

//     const data = await resp.json();
//     console.log(data);
//     result.textContent = data.joke;
//   } catch (error) {
//     //# If the url of API is wrong then it show this meessage...
//     // for example "https://icanhazdadjo.com/" this url is wrong
//     result.innerHTML = `<h3 style="color: brown;">There is no joke... :)</h3>`;
//   }
// };

//* See the the after opening window , invoke the function outside.
// fetchDadJoke();

//=======================
//! same function done use promise chain
//=======================

btn.addEventListener("click", () => {
  // console.log("hello world");
  fetchDadJoke();
});

const fetchDadJoke = () => {
  result.innerHTML = `<h3 style="color: purple;">Loading...</h3>`;
  fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "learning app",
    },
  })
    .then((resp) => resp.json())
    .then((data) => (result.textContent = data.joke))
    .catch(
      (error) =>
        (result.innerHTML = `<h3 style="color: brown;">There is no joke... :)`)
    );
};

fetchDadJoke();
