/* 
Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times
*/

let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**"
}

if (random > 0.1) {
  // Correct operation
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

else {
  // Wrong operation
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}