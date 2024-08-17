//? Object Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Objects

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

//! without arrat desturtuing...
// const firstName = bob.first;
// const lastName = bob.last;
// const city = bob.city;
// const favoriteSibling = bob.siblings.sister;

// console.log(firstName, lastName, favoriteSibling);

//* array destructuring :-
const {
  //# in array destructuring we must keep our varible name accurite with key(property) of object

  first: firstName,
  last: lastName,
  //# then we can change our varible name like that
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;
// console.log(firstName, lastName, city, zip, favoriteSibling);

//! ============
//? how obj destructuring work :-
//! ============

const myProfile = {
  name: "Yushah",
  job: "web developer",
  address: {
    current: "chittagong",
    permanent: "noakhali",
  },
};

const pAddress = myProfile.address.permanent;
console.log(pAddress);
const {
  address: { current: cAddress },
} = myProfile;
console.log(cAddress);

//* desturtuing function peremater :-
function printPerson({ first, last, city, siblings: { sister } }) {
  // const { first, last, city } = person;
  console.log(first, last, city, sister);
}

printPerson(bob);

//! ============
//? obj destructuring in details
//! ============

//* create varible
const name = "yusuf";
const age = [
  {
    myAge: 27,
    nazAge: 25,
  },
];
const currentAddress = {
  thana: "kotoali",
  district: "ctg",
  river: {
    fRev: "podma",
    sRev: "megna",
  },
};
const homeDistrict = "noakhali";

//* addEverything in obj
const myBio = {
  // every varible hold value inside it
  name,
  age,
  currentAddress,
  homeDistrict,
};

//* destructering obj
const pickAge = myBio.age[0];
const { myAge, nazAge } = pickAge;
const {
  currentAddress: { thana, district },
} = myBio;
const {
  currentAddress: {
    river: { fRev: p, sRev: m },
  },
} = myBio;

// console.log(myBio);
// console.log(thana, district);
// console.log(myAge, nazAge);
// console.log(p, m);
