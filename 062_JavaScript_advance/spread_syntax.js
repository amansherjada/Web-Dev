// The spread syntax in JavaScript allows you to "spread out" the elements of an array, object, or other 
// iterable into individual elements. 
// It's written using three dots (...) and is often used to copy or combine data.

function sum(a, b, c) {
    return a + b + c;
}

let arr = [1, 5, 7];
console.log(sum(arr[0], arr[1], arr[2])) // Manually passing each element from the array as arguments
console.log(sum(...arr)) // Using spread syntax to pass the elements of 'arr' as individual arguments (equivalent to the above)

// If you want to expand an array into individual items, you can use spread syntax.
const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3

// You can combine arrays easily using the spread syntax.
const numbers1 = [1, 2];
const numbers2 = [3, 4];
const combined = [...numbers1, ...numbers2]; // [1, 2, 3, 4]
console.log(combined)

// You can also copy or merge objects.

const person = { name: "Ramu", age: 25 };
const updatedPerson = { ...person, city: "Pune" }; // {name: "Ramu", age: 25, city: "Pune"}

console.log(person) // {name: 'Ramu', age: 25}
console.log(updatedPerson) // {name: "Ramu", age: 25, city: "Pune"}

const a = "the", b="no"
const c = {a, b}
console.log(c) //{a: 'the', b: 'no'}