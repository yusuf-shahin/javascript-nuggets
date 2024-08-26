//! ===========
//? Default Export
//! ===========

// export default (selection) => {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   } else {
//     throw Error("you did not select element");
//   }
// };

//! ===========
//? Export as a obj
//! ===========

const get = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error("you did not select element");
  }
};

export { get };
