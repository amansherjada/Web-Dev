const express = require('express')
const router = express.Router()

// define the home page route
http://127.0.0.1:3000/blog
router.get('/', (req, res) => {
    res.send('blog home page')
})

// define the about route
http://127.0.0.1:3000/blog/about
router.get('/about', (req, res) => {
    res.send('About blog')
})

// define the about route
// http://127.0.0.1:3000/blog/blogpost/hehe
router.get('/blogpost/:slug', (req, res) => {
    res.send(`fetch blog for ${req.params.slug}`)
})

module.exports = router

// refer (ExpressJS Resquest, Response and Routers Notes pdf) for what is express.routers?