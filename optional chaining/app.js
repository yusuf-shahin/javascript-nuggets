const people = [
  {
    name: "bob",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  { name: "peter", location: { street: "123 Pine street" } },
  {
    name: "susan",
    location: { street: "123 Apple street", timezone: { offset: "+9:00" } },
  },
]

people.forEach((person) => {
  // console.log(person.name) //# "bob", "peter", "susan"
  // console.log(person.location) //# three object
  // console.log(person.location.timezone.offset) //#TypeError: Cannot read properties of undefined
  //* && operator
  // console.log(
  //   person.location &&
  //     person.location.timezone &&
  //     person.location.timezone.offset
  // ) //# "+7:00" , undefine, "+9.00"
  //* same thing using optional chaining
  console.log(person?.location?.timezone?.offset) //# "+7:00" , undefine, "+9.00"
})

//  const data = [
//    { id: 1, name: "john" },
//    { id: 2, name: "peter" },
//    { id: 3, name: "susan" },
//    { id: 4, name: "anna" },
//  ]

//  const people = [
//    { id: 1, name: "bob", nickName: "Stud Muffin" },
//    { id: 2, name: "peter" },
//    {
//      id: 3,
//      name: "oliver",
//      images: [
//        {
//          small: {
//            url: "https://res.cloudinary.com/diqqf3eq2/image/upload/ar_1:1,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1595959121/person-1_aufeoq.jpg",
//          },
//        },
//      ],
//    },
//    { id: 4, name: "david" },
//  ]

//  const myObj = {
//    name: "Yusuf",
//    fame: "programmer",
//    address: {
//      location: "Andorkillah",
//      district: "Chittagong",
//    },
//    write: function () {
//      console.log("Hello World, I want to learn js")
//    },
//  }
//  const { address } = myObj
//  const { location, district } = address
//  console.log(location)

//  const str = "my name is yousuf"
//  const newStr = str.split("")
//  console.log(newStr)
//  console.log([...str])
