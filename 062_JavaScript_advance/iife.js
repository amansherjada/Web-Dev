// The sleep function returns a promise that resolves after 1 second
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    });
}

// This will cause a SyntaxError: "await is only valid in async functions and the top level bodies of modules"
// let a = await sleep();
// let b = await sleep();

// To use await, we need to wrap the code inside an IIFE (Immediately Invoked Function Expression) or use an async function
(async function main() {
    // Now await works correctly inside this async IIFE
    let a = await sleep();
    console.log(a); // This will log the result of the first sleep() call

    let b = await sleep();
    console.log(b); // This will log the result of the second sleep() call
})();


// An IIFE (Immediately Invoked Function Expression) is a function in JavaScript that runs as soon as it is defined. 
//It is wrapped in parentheses and immediately called after that.
(function() {
    console.log("I run immediately!");
})();

// How It's Different from a Normal Function:
// (1) Immediate Execution:
// - An IIFE runs immediately without needing to be called separately.
// - A normal function needs to be defined and then called to execute.

// (2) Scope:
// - An IIFE creates its own scope, keeping variables inside private, and avoids polluting the global scope.
// - Normal functions can store variables in the global or local scope when they are invoked.

// IIFE runs right away and helps keep your code clean by avoiding global variables, while a normal function waits to be called.