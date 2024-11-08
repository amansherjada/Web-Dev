require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/about", (req, res) => {
    res.send("This is the about page")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact us </h1>")
})

app.get("/hehe", (req, res) => {
    res.send("<h1>Hello, World hehe</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})