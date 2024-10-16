// let numbers = [6,5,4,3,2,1];
// let sum = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// console.log(sum);  // Output: 720

// The first time, the accumulator is 1, and the currentValue is 6. So, 1 * 6 = 6.
// Next, the accumulator is 6, and the currentValue is 5. So, 6 * 5 = 30.
// Then, 30 * 4 = 120, and so on.
// It multiplies all the numbers until the final result is 720.

function fac(num) {
    if (num < 0) {
        return "NOT DEFINED";  // Factorial of negative numbers is not defined
    }

    let result = 1;
    for (let i = 1; i <= num; i++) {  // Start from 1 and go up to num
        result *= i;   // Multiply result by i at each step
    }
    return result;
}

console.log(`Factorial is ${fac(6)}`);  // Output: 720


// First step: result = 1 * 1 → result is 1.
// Next step: result = 1 * 2 → result is 2.
// Then: result = 2 * 3 → result is 6.
// Next: result = 6 * 4 → result is 24.
// Next: result = 24 * 5 → result is 120.
// Finally: result = 120 * 6 → result is 720.
