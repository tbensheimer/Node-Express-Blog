const Blog = require('../models/blog');


const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })   //descending order
        .then((result) => {
            res.render('index', {title: "Trent's Blogs", blogs: result})
        })
        .catch((err) => {
            console.log(err);
        })
}

const blog_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    })
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('details', { title: 'Blog Details', blog: result })
    })
    .catch((err) => {
        console.log(err);
    })
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/blogs'});
    })
    .catch((err) => {
        console.log(err);
    })
}

const blog_updateForm = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('update', {title: "Update blog", blog: result});
    })
    .catch((err) => {
        console.log(err);
    })
}

const blog_edit = (req, res) => {
const id = req.params.id;
Blog.findByIdAndUpdate(id, req.body)
.then((result) => {
    res.redirect(`/blogs/${id}`);
})
.catch((err) => {
    console.log(err);
})

}

const blog_about = (req, res) => {
    res.render('about', { title: "About Me" });
}

const blog_create = (req, res) => {
    res.render('create', { title: "Create a blog" });
}

const blog_redirectToHome = (req, res) => {
    res.redirect('/blogs');
    }

module.exports = {
    blog_index,
    blog_post,
    blog_details,
    blog_delete,
    blog_about,
    blog_create,
    blog_redirectToHome,
    blog_updateForm,
    blog_edit
}