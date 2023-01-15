const express = require('express');
const blogController = require('../controllers/blogControllers');
const router = express.Router();

router.get('/', blogController.blog_redirectToHome);
    router.get('/blogs', blogController.blog_index);
    router.post('/blogs', blogController.blog_post);
    router.get('/blogs/:id', blogController.blog_details);
    router.delete('/blogs/:id', blogController.blog_delete);
    router.get('/about', blogController.blog_about);
    router.get('/create', blogController.blog_create);

    module.exports = router;
    
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
    

