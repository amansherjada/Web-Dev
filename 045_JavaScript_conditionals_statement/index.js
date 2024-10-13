console.log("Printing Condtional Statement....")

let age = 5;

if(age>18){
    console.log("You can drive");
}

else{
    console.log("You cannot drive");
}

let x = 3;
let y = 2;

// Arithmetic Operators
console.log("Arithmetic Operators")
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x**y)
console.log(x%y)

// Assignment Operators
console.log("Assignment Operators")
console.log(x += y)
console.log(x -= y)
console.log(x *= y)
console.log(x /= y)
console.log(x %= y)
console.log(x **= y)
// =

// Comparsion Operators
console.log("Comparsion Operators");
console.log(x==y);
console.log(x!=y);
// "3"==3 is true and "3"===3 false
console.log(x===y); //equal value and type
console.log(x!==y);//not equal value and not equal type
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);

//Logical Operators
console.log("Logical Operators")
console.log(x!=y) //logical NOT
console.log(x!=y && y==x) //logical AND
console.log(x!=y || y==x) //logical OR

// else if condition
let age1 = 0;

if(age1>18){
    console.log("You can drive");
}

else if(age1 == 0){
    console.log("WHATTTTTTTTTTT");
}

else{
    console.log("You cannot drive");
}

let m = 4;
let n = 6;

let o = m>n ? (m-n):(n-m)
console.log(o)

//  JavaScript program that checks whether a given number is divisible by both 2 and 3
let number = 18;

if(number % 2 ==0 && number % 3==0){
    console.log(number + " is divisible by both 2 and 3.");
}
else{
    console.log(number + " is not divisible by both 2 and 3.");
}