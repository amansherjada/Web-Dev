// path module
import path from "path"

// console.log(path)

let mypath = "C:\\Users\\Sher Mohammed Khan\\OneDrive\\Desktop\Coding\\Web Dev\\069_fs_and_path_modules\\aman.txt"

console.log(`Extension is ${path.extname(mypath)}`)

console.log(`Directory is ${path.dirname(mypath)}`)

console.log(`Base name is ${path.basename(mypath)}`)


// The path.format() method formats a path object into a path string.
let obj = {
    dir : "C:\\Users\\Sher Mohammed Khan\\OneDrive\\Desktop\Coding\\Web Dev\\069_fs_and_path_modules",
    base : "aman.txt",
    ext: ".txt"
}
console.log(`Format  ${path.format(obj)}`)


// path.normalize()

console.log(path.join("C:/Users/", "program\\aman.js"))  //output = C:\Users\program\aman.js
