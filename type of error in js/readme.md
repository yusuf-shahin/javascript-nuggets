## Errors in JavaScript

- Understanding and identifying JavaScript errors is crucial for developing robust applications. Every developer shoud know how to spot and fix JavaScript error for building strong apps. Proper error handling ensures code quality, maintains program flow, and enhances user experience by preventing unexpected crashes. It also helps you find and fix bugs quickly, making your code better and faster.

### Different Types of Errors in JavaScript

**Syntax error:** These occur when the syntax of code is incorrect, preventing the code from being parsed. Common causes include missing brackets, commas, or semicolons .

```js
const func = () =>
console.log(hello)
}
```

**out put**

```
SyntaxError: Unexpected token }
```

**Reference Error** - In a case where the reference of variable can't be found or hasn't been declared, then a Reference error occurs.

```js
console.log(x)
```

**output**

```
console.log(x);
            ^
ReferenceError: x is not defined
```

**Type Error** - An error occurs when a value is used outside the scope of its data type.

```js
let num = 15
console.log(num.split("")) //converts a number to an array
```

**output**

```
console.log(num.split("")); //converts a number to an array
                ^
TypeError: num.split is not a function

```
