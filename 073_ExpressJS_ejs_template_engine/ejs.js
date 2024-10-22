const express = require("express")
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    let siteName = "RamLal.com"
    let searchText = "Search Now"
    res.render("index2.ejs", { siteName: siteName, searchText: searchText })
})
app.get("/blog/:slug", (req, res) => {
    let blogTitle = "Why and When";
    let blogContent = "Hehe I don't know";
    res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent });
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express