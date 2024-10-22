const express = require('express');
const blog = require('./routes/blog'); // Importing the blog router
const shop = require('./routes/shop'); // Importing the shop router

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Mount the blog router at the '/blog' path
app.use('/blog', blog); // Using the blog router
app.use('/shop', shop); // Using the shop router

app.get('/', (req, res) => {
    console.log('Hello World HEhE! 1')
    res.send('Hello World HEhE!')
})

app.post('/', (req, res) => {
    console.log('THIS IS POST REQUEST 1')
    res.send('THIS IS POST REQUEST')
})

app.put('/', (req, res) => {
    console.log('THIS IS PUT REQUEST 1')
    res.send('THIS IS PUT REQUEST')
})

app.delete('/', (req, res) => {
    console.log('THIS IS DELETE REQUEST 1')
    res.send('THIS IS DELETE REQUEST')
})

// Serving an HTML file from the 'templates' directory
app.get("/indexpage", (req, res) => {
    console.log("This is an HTML page");  // Logs a message to the console when the route is accessed
    // Sends the 'indexpage.html' file as the response
    // __dirname ensures the path is resolved relative to the current directory
    res.sendFile("templates/indexpage.html", { root: __dirname });

});

app.get("/api", (req, res) => {
    console.log("This is an api page");  // Logs a message to the console when the route is accessed
    res.json({ a: 1, b: 2, c: 3, name: ["aman", "ramu", "gulati"] });

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})