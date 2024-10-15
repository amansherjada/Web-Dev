console.log("Looping through Array".toUpperCase())

let a = [1,5,9,7,51,88,99,101]


// Sort the array in ascending order
a.sort((x, y) => x - y);

for (let index = 0; index < a.length; index++) {
    const value = a[index];
    console.log(value)
}

a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

let obj = {
    aman: 1,
    bhuvan: 2,
    chatak: 3,
    donda: 4
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, "is", element)
    }
}

for (const values of a) {
    console.log(values)
    
}

