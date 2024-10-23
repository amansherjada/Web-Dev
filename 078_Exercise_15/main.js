// You have to write a Node.js program to clear clutter inside of a directory and organize the
// contents of that directory into different folders

// for example, these files become:
// from this
// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// to this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import path from "path"
// console.log(fs)

const basepath = "C:\\Users\\Sher Mohammed Khan\\OneDrive\\Desktop\\Coding\\Web Dev\\078_Exercise_15"

let files = await fs.readdir(basepath)
// console.log(files)

for (const items of files) {
    console.log("Running for ", items)
    let ext = items.split(".")[items.split(".").length - 1]
    // Move the file to this directory if its not a js or json file
    if (ext != "js" && ext != "json" && items.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            fs.rename(path.join(basepath, items), path.join(basepath, ext, items))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, items), path.join(basepath, ext, items))
        }
    }
}