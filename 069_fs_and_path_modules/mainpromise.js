import fs from "fs/promises"

// await keyword at the top level, is not allowed in CommonJS modules 
let a = await fs.readFile("aman2.txt")
// console.log(a) //This will print Buffer code
console.log(a.toString())

// let b = await fs.writeFile("aman3.txt", "Hello World! \n Hello GitHub")
// console.log(b)

let c = await fs.appendFile("aman3.txt", "\n\n\nHello")