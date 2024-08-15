function fullName(fName, sName) {
  console.log(`My name is ${fName} ${sName}`);
  return `My name is ${fName} ${sName}`;
}

function loopValue(n, value) {
  for (let i = 0; i < n; i++) {
    console.log(value);
  }
}

debugger;
setTimeout(() => {
  //! It's take two second to enter this function

  console.log("time lapes");
}, 3000);
fullName("yusuf", "shahin");
loopValue(5, "war zone");
