const fs = require("fs")

// console.log(fs)

// writeFileSync

// console.log("START"); // This will print first (1)
// fs.writeFileSync("aman.txt", "Created using writeFileSync"); // Then a new file will be created synchronously (2)
// console.log("END"); // This will print after the file is created (3)

// writeFile
// console.log("START"); // This will print first (1)

// fs.writeFile("aman2.txt", "Created using writeFile", () => { // The file creation is scheduled, and "Done" will print once the file is created (3)
//   console.log("Done"); 
// });

// console.log("END"); // This will print immediately after "START", before the file is created (2)

// writeFile and readFile
console.log("START");

fs.writeFile("aman2.txt", "Created using writeFile() and reading using readFile()", () => {
    console.log("Done");
    fs.readFile("aman2.txt", (error, data) => {
        console.log(error, data.toString())
    })
});

console.log("END");
// If we add more nested write and read operations inside each other, it will lead to "callback hell",
// where code becomes deeply nested and harder to read, maintain, and debug.

// 
fs.appendFile("aman.txt", " Adding text using appendFile()", (e,d) => {
  console.log(d);
  console.log(e)
})