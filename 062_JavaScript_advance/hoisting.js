// Hoisting in JavaScript is a behavior where variable and function declarations are moved ("hoisted") 
// to the top of their scope before the code is executed. 
// This means you can use variables and functions before declaring them.

greet(); // Works due to hoisting
function greet() {
    console.log("Hello!");
}

console.log(x); // Outputs: undefined (because of hoisting, but not initialized)
var x = 5;

// Function declarations are fully hoisted, so you can call them before defining them.

// Variables declared with var are hoisted, but only the declaration is hoisted, not the assignment 
// (so they return undefined if accessed before the assignment).

// Variables declared with let or const are also hoisted, but they cannot be used before they are 
// declared (they remain in a "temporal dead zone").

// Hoisting moves declarations to the top, but initializations happen where they are written.