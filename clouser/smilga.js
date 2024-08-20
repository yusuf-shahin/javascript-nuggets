//! =================
//? Closure Basic
//! =================

//! What is closure ?
//? closure gives you an access to an outer function's scope from an inner function

//* make private variables with closures
function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`hello there secret is : ${privateVar} `);
  }
  return inner;
  // inner();
}
// console.log(privateVar); // we dont excess it .

outer()();

const value = outer();
// console.log(value);
value();

//! =================
//? Closure Simple Example
//! =================

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}
// newAccount('susan', 500)();

const john = newAccount("john", 300);
const bob = newAccount("bob", 1000);

john();
bob();

//! =================
//? Closure Compleceted Example
//! =================

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const jonnny = newAccount("jonnny", 1000);
const bobo = newAccount("bobo", 1000);

jonnny.showBalance();
jonnny.deposit(400);
jonnny.deposit(1000);
jonnny.withdraw(400);
jonnny.balance = 10000;
jonnny.withdraw(2001);
bobo.showBalance();
bobo.deposit(400);
