console.log("Hello World!")

var a = 5;
var b = 6;

var c = "Aman";
c = c + 1;
console.log(c); //Aman1

var _a = "Ram";
// var 5a = "5Aman" invalid syntax

console.log(a+b+9);

console.log(typeof a, typeof b, typeof c);

const a1 = 6;
// a1 = a1 + 5 not allowed in (const)ant

// use (let) let is block scoped

{
    let aman = "Khan Aman"; //local let
    console.log(aman);
}

let aman = "Aman Khan"; //global let
console.log(aman);

// Primative Datatypes
let x = "amankhan";
let y = 5;
let z = 5.5;
const m = true;
let n = undefined;
let o = null;

console.log(x, y, z, m, n ,o)
console.log(typeof x, typeof y, typeof z, typeof m, typeof n ,typeof o)

// Object
let p = {
    "name": "Aman",
    "job code": 5200,
    "poor": true
}
console.log(p);
console.log(typeof p);

p.salary = "20 Rupees";
console.log(p);

p.salary = "200 Rupees";
console.log(p);

// Quick Quiz solution
let student = {
    "name" : "Ram",
    "phone" : 7021757536,
    "marks" : 8
}
console.log(student)