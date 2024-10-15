let fruits = ["apple", "banana", "mango"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);

let arr = ["aman", 24, "mumbai", true];
console.log(arr);

// array are mutable that why we can change like this
arr[0] = "manaf";
console.log("new array= ", arr);

// Array methods

// toString() converts the array to string 
let a = ["aman", "is", "a", "good", "boy"]
console.log(a.toString())
console.log(typeof a.toString()) //string

// .join() converts array element using separator
let b = [1,2,3,4]
console.log(b.join(" and "))
console.log(typeof b.join(" and ")) //string

// .pop() removes last element from the array
let c = [1,2,3] 
console.log(c.pop()) //returns the popped element (3)
console.log(c)

// .push() add new element at the end of the array
let d = [22,32,53,45]
console.log(d.push(69)) //returns the new array length (5) modeifies the og array
console.log(d)

//.shift() removes the first element from the array
let x = ["one", "two", "three"]
console.log(x.shift()) // returns the removed element (one)
console.log(x)

// .unshift() adds element to the beginning
let y = ["doo", "theen"]
console.log(y.unshift("ek")) //returns the new length of the array
console.log(y)

let del = [1,2,3,4,5]
console.log(delete del[2])
console.log(del)

// .concat() joins two or more array to the given array
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

console.log(a1.concat(a2, a3)) //returns a new array does not change the og array
console.log(a1)

// .sort() is used to sort an array alphabetically
let alpha = [9,8,7,6,5,4,3,2,1]
console.log(alpha.sort()) //modifies the og array


// .splice() used to add, remove, or replace elements in an array
// array.splice(start, deleteCount, item1, item2, ..., itemN)

// Removing elements:
let fruits1 = ['apple', 'banana', 'cherry', 'date'];
fruits1.splice(1, 2);  // Starting at index 1, remove 2 elements
console.log(fruits1);   // Output: ['apple', 'date']

// Adding elements:
let fruits2 = ['apple', 'date'];
fruits2.splice(1, 0, 'banana', 'cherry');  // Add elements at index 1 without removing any
console.log(fruits2);   // Output: ['apple', 'banana', 'cherry', 'date']

// Replacing elements:
let fruits3 = ['apple', 'banana', 'cherry', 'date'];
fruits3.splice(1, 2, 'orange', 'grape');  // Remove 2 elements at index 1 and add 'orange' and 'grape'
console.log(fruits3);   // Output: ['apple', 'orange', 'grape', 'date']

// .slice()
let num = [1,2,3,4,5,6,7,8,9]
// console.log(num.slice(1))
console.log(num.slice(1, 4))

// .reverse()
console.log(num.reverse())