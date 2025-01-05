## JSON = (JavaScript Object Notation) data-interchange format

- Used for exchanging data between a server and a web application .
- JSON files {key:value} OR [value1, value2, value3]

#### `JSON.stringify()` = converts a JS object to a JSON string.

#### `JSON.parse()` = converts a JSON string to a JS object

```js
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]

const jsonString = JSON.stringify(names)

const jsonParse = JSON.parse(jsonString)

console.log(names) // names array

console.log(jsonString) //  whole array convert a single string

console.log(jsonParse) // single json string conver into a array
```
