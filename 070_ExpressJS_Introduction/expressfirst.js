const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// This line serves static files (like HTML, CSS, images, JavaScript) from the 'public' 
// folder.
// It tells Express to look in the 'public' directory for any files the user requests, like:
// If the user visits http://localhost:3000/style.css, Express will look for 'style.css' 
// in the 'public' folder.
// This is useful for serving frontend assets (stylesheets, images, etc.) without 
// needing to write a route for each file.


// app.get(path, handler), app.post(path, handler), app.put(path, handler) or app.delete(path, handler)
app.get('/', (request, response) => {
    response.send('Hello World!')
})
app.get('/about', (request, response) => {
    response.send('Hello About!')
})

app.get('/contact', (request, response) => {
    response.send('Hello Contact!')
})
app.get('/blog', (request, response) => {
    response.send('Hello Blog!')
})

// app.get('/blog/intro-to-js', (request, response) => {
//     // Logic to fetch intro to js from the database
//     response.send('Hello JS!')
// })

// app.get('/blog/intro-to-py', (request, response) => {
//     // Logic to fetch intro to python from the database
//     response.send('Python - print("Hello World!")')
// })

app.get('/blog/:slug', (request, response) => {
    // Logic to fetch intro to ${slug} from the database

    // For this URL http://127.0.0.1:3000/blog/intro-to-mongo?mode=dark&region=in
    console.log(request.params) // output = { slug: 'intro-to-mongo' }
    console.log(request.query) // output = { mode: 'dark', region: 'in' }
    response.send(`Hello ${request.params.slug}!`)
})
// Instead of writing separate routes for each blog post like '/blog/intro-to-py', '/blog/intro-to-js'
// we can use a dynamic route with a parameter like '/blog/:slug'. This way,
// no matter which blog post is requested (e.g., '/blog/intro-to-py', '/blog/advanced-js'),
// we can handle them with the same route and fetch the appropriate content based on the slug.
// This makes the code more flexible and avoids duplicating route handlers for each post.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// request.params: It captures dynamic parts of the URL, allowing you to extract values 
// from the URL path. 
// For example, if the URL is /blog/intro-to-mongo, the :slug part becomes a parameter 
// (slug: 'intro-to-mongo'), and you can use it in your logic (e.g., fetching content based on the slug).

// request.query: It captures optional key-value pairs that are passed after a ? in the URL. 
// These are typically used for additional filters or settings. 
// For example, in /blog/intro-to-mongo?mode=dark&region=in, mode=dark and region=in are 
// query parameters that can be used for things like adjusting display settings or customizing content.