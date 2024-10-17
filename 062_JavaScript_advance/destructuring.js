// Destructuring is a technique that allows you to unpack values from arrays or objects into separate variables. 
// This process involves breaking down complex data structures into simpler parts, making it easier to work with them.

// let [x, y] = [1, 5, 8] // x = 1, y = 5; 8 is ignored because only two variables (x and y) are declared
// console.log(x, y)

// Destructuring with rest parameter in JavaScript
let [x, y, ...rest] = [1, 5, 8, 4, 9] // x = 1, y = 5; the rest (8, 4, 9) is stored in the 'rest' array
console.log(x, y, rest)
