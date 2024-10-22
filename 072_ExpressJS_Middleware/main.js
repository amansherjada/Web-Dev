const express = require("express")
const app = express()
const fs = require("fs") //importing fs
const birds = require('./routes/birds') //importing router
const port = 3000

// Serve static files from the 'public' directory
app.use(express.static("public"));
app.use('/birds', birds) //using router

// Middleware 1
app.use("/", (req, res, next) => {
    // console.log("m1");
    fs.appendFileSync("logs.txt", `At ${Date.now()} we had a (${req.method}) request\n`) //Logging time and request in logs.txt
    console.log(`At ${Date.now} we had a (${req.method}) request`)
    next(); // If we don't call next(), the request will not proceed to the next middleware or route handler
});

// Middleware 2
app.use("/", (req, res, next) => {
    console.log("m2");
    next(); // Calls the next middleware or route handler in the stack
});

app.get("/", (req, res) => {
    console.log("HELLO ITS ME")
    res.send("Hello World!")
})

app.get("/about", (req, res) => {
    console.log("HELLO ABOUT")
    res.send("Hello About")
})

app.get("/contact", (req, res) => {
    console.log("HELLO Contact")
    res.send("Hello Contact")
})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})

// https://expressjs.com/en/guide/writing-middleware.html
// https://expressjs.com/en/guide/using-middleware.html