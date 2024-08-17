import get from "./getElement.js";

//! ===========
//? basic concept of template leteral
//! ===========

const person = {
  name: "Smilga",
  job: "developer",
  hobbies: ["book reading", "traveling", "gardening"],
};

const name = get(".name");
const job = get(".job");
const hobbies = get(".hobbies");

name.textContent = person.name;
job.textContent = person.job;

const hobby = person.hobbies
  .map((hobby) => {
    return `<li>${hobby}</li>`;
  })
  .join("");

hobbies.innerHTML = hobby;

//! ===========
//? root-2
//! ===========

const person2 = {
  name: "nazmul",
  job: "programmer",
  friends: ["foysal", "tamim", "sakib"],
};

const rootTwo = get(".root-2");

//* Not using of templete leteral...
// rootTwo.innerHTML =
//   "<h1>" +
//   person2.name +
//   "</h1>" +
//   "<h3>" +
//   person2.job +
//   "</h3>" +
//   "<ul>" +
//   "<li>" +
//   person2.friends[0] +
//   "</li>" +
//   "<li>" +
//   person2.friends[1] +
//   "</li>" +
//   "<li>" +
//   person2.friends[2] +
//   "</li>" +
//   "</ul>";

//* same thing using using of templete leteral...
rootTwo.innerHTML = `
<h1>${person2.name}</h2>
<h3>${person2.job}</h3>
<ul>${person2.friends
  .map((friend) => {
    return `<li>${friend}</li>`;
  })
  .join("")}</ul>
`;
