console.log("JavaScripts Loops")

a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    "name": "Aman",
    "role": "Data",
    "company": "Finding",
}

for (const key in obj) {
    const value = obj[key];
    console.log(value, key)
}

for (const c of "RamRahim") {
    console.log(c)
}

// let i = 1;
// while (i < 6) {
//     console.log(i)
//     i++;
// }

let i = 2;
do {
    console.log(i)
    i++;
} while (i<6);