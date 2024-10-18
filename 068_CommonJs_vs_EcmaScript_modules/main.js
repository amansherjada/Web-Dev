// const http = require('node:http'); (commonjs format)

// import http from "http" //ECMAScript

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// In ECMAScript ("type": "module" ) we do this 
// import {a, b, c, d} from "./mymodule.js" // Importing named exports

// console.log(a, b, c, d);

// import object1 from "./mymodule.js" // Importing the default export
// console.log(object1); // You can use any name for the default export when importing


// In commonjs ("type": "commonjs") we do this
const a = require("./mymodule2.js")

console.log(a)