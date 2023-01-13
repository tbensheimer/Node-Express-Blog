const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const port = process.env.PORT || 3000;


const app = express();

const dbURI = "mongodb+srv://tbensheimer:TlJI4FehtueaIaaJ@blogcluster.hlxktaj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log(result);
    app.listen(port);
})
.catch((err) => {
    console.log(err);
})



app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));


//Add blog as json to browser

// app.get('/add-blog', (req, res) => {
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
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

//Retrieve a single blog
// app.get('/single-blog', (req, res) => {
//     Blog.findById("(id from mongo)")
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

app.get('/', (req, res) => {
res.redirect('/blogs');
});

//Output document into view

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })   //descending order
    .then((result) => {
        res.render('index', {title: "Trent's Blogs", blogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    })
})


app.get('/about', (req, res) => {

    res.render('about', { title: "About Me" });
})

app.get('/blogs/create', (req, res) => {

    res.render('create', { title: "Create New Blog"});
})

app.use((req, res) => {
    res.status(404).render('404', { title: "Error Code: 404" });
})

    
