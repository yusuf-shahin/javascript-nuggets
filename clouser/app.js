//! ==============
//? clouser basic
//! ==============

const name = "yusuf";

function printName() {
  //# in that case we excess the varible which is outside of function
  console.log(name);
}

// printName();

//? Thats the example of clouser ...

//! ===============
//? complecated example of closure
//! ===============
const glovalGreet = "assalamualikum";

function outerFunction(outerFuncVarible) {
  const greet = "hi";
  return function innerFunction(innerFuncVarible) {
    console.log(`outer function varible is ${outerFuncVarible}`);
    console.log(`inner function varible is ${innerFuncVarible}`);
    //# everything in outerFuntion is avalible inside the innerFunction
    console.log(greet);
    //# we also get the gloval varible by closure
    console.log(glovalGreet);
  };
}

//* store the value of outerFunction("is outside") in a varible.
const newFunction = outerFunction("outside");
// console.log(newFunction);

//* invoke the newFunc with argument :-
newFunction("inside");
