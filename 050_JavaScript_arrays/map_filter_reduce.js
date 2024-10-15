let arr = [1,6,7,9,2]
let newArr =[]

for (let index = 0; index < arr.length; index++) {
    const value = arr[index];
    newArr.push(value ** 2)
}
console.log(newArr)

// map(): Creates a new array by applying a function to each element/value of the original array.
let newArr2 = arr.map((value, index, arr)=>{
    return value * 2;
})
console.log(newArr2)

// filter(): Creates a new array with elements that pass a test provided by a function.
console.log(newArr2.filter(value=> value>5));

// reduce() is a method that takes all the elements in an array and combines them into a single result, like adding numbers or combining values. 
// You give it a function that tells it how to "reduce" the elements step by step.

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // Output: 10

// accumulator: This keeps track of the running total (starting with 0 here).
// currentValue: This is each number in the array (1, 2, 3, 4...).
// At each step, the current number is added to the accumulator, and the final result is 10.

// converts to a Array
let hehe = Array.from("aman")
console.log(hehe)