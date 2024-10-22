const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    console.log("HOME PAGE")
    res.sendFile("templates/index.html", {root: __dirname})
})

// The problem is that for every new slug value, the corresponding blogTitle and blogContent need to be fetched from the DB.
// But the challenge is how to dynamically insert the blogTitle and blogContent into the blogpost.html file for each slug value.
// This is where we use EJS to render the HTML with the fetched data.
app.get("/blog/:slug", (req, res) => {
    // This route handles requests for specific blog posts based on the slug value in the URL (e.g., /blog/some-slug).
    
    // Simulate fetching blogTitle and blogContent from a database (e.g., based on the slug value).
    let blogTitle = "Why and When";
    let blogContent = "Hehe I don't know";

    // res.sendFile() is used to send static files, but it doesn't support embedding dynamic data (like blogTitle and blogContent).
    // The current code won't work for inserting dynamic content into the blogpost.html file.

    // To dynamically insert blogTitle and blogContent into blogpost.html, we should use a template engine like EJS instead of res.sendFile().
    res.sendFile("templates/blogpost.html", { root: __dirname }); // This only sends a static file without dynamic content.
});


app.listen(port, () => {
    console.log(`App is running on port ${port}`) 
})

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express