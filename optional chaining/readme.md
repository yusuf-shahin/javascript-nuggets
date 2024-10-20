## Optional Chaining

**Array of Obj**

```js
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
```

```js
people.forEach((person) => {
  console.log(person.name) //# "bob", "peter", "susan"
  console.log(person.location) //# three object
  console.log(person.location.timezone.offset) //#TypeError: Cannot read properties of undefined
})
```

**&& operator**

- In `and --> &&` operator, If the first value is **true** , then Its gonna check following value.

```js
console.log(true && "Hello World") //# "Hello World"
console.log(false && "Hello People") //# false
```

```js
console.log(
  person.location && person.location.timezone && person.location.timezone.offset
) //# "+7:00" , undefine, "+9.00"
```

**same thing using optional chaining**

```js
console.log(person?.location?.timezone?.offset) //# "+7:00" , undefine, "+9.00"
```
