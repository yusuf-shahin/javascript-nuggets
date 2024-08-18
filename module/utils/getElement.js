// export default (selection) => {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   } else {
//     throw Error("you did not select element");
//   }
// };

//* different way :-
const get = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error("you did not select element");
  }
};

export { get };
