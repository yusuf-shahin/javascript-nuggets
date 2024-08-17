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

//* desturtuing function peremater :-
function printPerson({ first, last, city, siblings: { sister } }) {
  // const { first, last, city } = person;
  console.log(first, last, city, sister);
}

printPerson(bob);
