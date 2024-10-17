console.log("ERRORRRRRR HANDLING")
// List of JavaScript Errors = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

// let a = prompt("Enter a number")
// a = Number(a); 
// console.log(a + 1); // or use parseInt(a) for integers

let a = prompt("Enter first number")
let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Enter a Number")
}

let sum = parseInt(a) + parseInt(b)

// try {
//     //console.log(`${a} + ${b} = ${sum*x}`) //Error Encontered because x is not defined
//     console.log(`${a} + ${b} = ${sum}`)
// } catch (error) {
//     console.log(`Error name = ${error.name} and Error message = ${error.message}`)
// } finally{
//     console.log("FILES ARE BEING CLOSED")
// }

// The finally block is mainly used in try-catch statements. 
// It always executes, even if a return statement is encountered in the try or catch block.
// This ensures that code in the finally block runs regardless of whether an exception occurred or if the function returns early.

function main(){
    try {
        //console.log(`${a} + ${b} = ${sum*x}`) //Error Encontered because x is not defined
        console.log(`${a} + ${b} = ${sum}`)
        return true

    } catch (error) {
        console.log(`Error name = ${error.name} and Error message = ${error.message}`)
        return false

        //console.log("FILES ARE BEING CLOSED") this will not work because function returns early

    } finally{
        console.log("FILES ARE BEING CLOSED") //This will work regardless function returns early
    }
}

main()