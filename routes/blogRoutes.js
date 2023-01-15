const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/blogs');
    });
    
    //Output document into view
    router.get('/blogs', (req, res) => {
        Blog.find().sort({ createdAt: -1 })   //descending order
        .then((result) => {
            res.render('index', {title: "Trent's Blogs", blogs: result})
        })
        .catch((err) => {
            console.log(err);
        })
    })
    
    router.post('/blogs', (req, res) => {
        const blog = new Blog(req.body);
    
        blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
    })
    
    router.get('/blogs/:id', (req, res) => {
        const id = req.params.id;
        Blog.findById(id)
        .then((result) => {
            res.render('details', { title: 'Blog Details', blog: result })
        })
        .catch((err) => {
            console.log(err);
        })
    })
    
    router.delete('/blogs/:id', (req, res) => {
        const id = req.params.id;
    
        Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({redirect: '/blogs'});
        })
        .catch((err) => {
            console.log(err);
        })
    })
    
    
    router.get('/about', (req, res) => {
    
        res.render('about', { title: "About Me" });
    })
    
    router.get('/create', (req, res) => {
    
        res.render('create', { title: "Create New Blog"});
    })
    
    // example scenerios for getting certain blogs
    
    //Add blog as json to browser
    
    // router.get('/add-blog', (req, res) => {
    //     const blog = new Blog({
    //         title: 'new blog 2',
    //         snippet: 'about this blog',
    //         body: 'more about this new blog boy'
    //     });
    
    //     blog.save()
    //     .then((result) => {
    //         res.send(result);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // })
    
    //Retrieve all blogs from collection
    // router.get('/all-blogs', (req, res) => {
    //     Blog.find()
    //     .then((result) => {
    //         res.send(result)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // })
    
    //Retrieve a single blog
    // router.get('/single-blog', (req, res) => {
    //     Blog.findById("(id from mongo)")
    //     .then((result) => {
    //         res.send(result)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // })
    

module.exports = router;