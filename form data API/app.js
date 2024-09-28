const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const values = [...formData.values()]

  if (values.includes("")) {
    console.log("please enter all values")
    return
  }
  const formObject = Object.fromEntries(formData)
  // do something
  console.log(formObject)

  e.currentTarget.reset()
})

// const form = document.querySelector(".form")
// // also valid approach
// // const formData = new FormData(form);

// form.addEventListener("submit", (e) => {
//   e.preventDefault()
//   const formData = new FormData(e.currentTarget)
//   // won't directly return values
//   console.log(formData)

//   // spread out - entries, values, keys
//   // const entries = [...formData.entries()]
//   // console.log(entries)
//   const values = [...formData.values()]
//   console.log(values)
//   const keys = [...formData.keys()]
//   console.log(keys)

//   // iterate over with "for of" loop
//   // for (let [name, value] of formData) {
//   //   console.log(`${name} = ${value}`)
//   // }

//   // // check for value
//   // const name = formData.get('name');
//   // console.log(name);
//   // // append
//   // formData.append('test', 'test');
//   // // delete
//   // formData.delete('test');
//   // formData.delete('email');
//   // // check property
//   // const checkName = formData.has('name');
//   // console.log(checkName);

//   // const entries = [...formData.entries()];
//   // console.log(entries);

//   // // it's not JSON so....(depends on the server)
//   // axios.post('someUrl', formData);

//   // const formObject = Object.fromEntries(formData);
//   // console.log(formObject);
//   // // will work
//   // axios.post('someUrl', formObject);

//   // // reset
//   // e.currentTarget.reset();
// })
