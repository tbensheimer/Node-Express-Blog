const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog.js');

const app = express();

const dbURI = "connection string from mongo";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log(result);
// app.listen(3000);  // since no connection string points to real Database, comment out
})
.catch((err) => {
    console.log(err);
})



app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about this blog',
        body: 'more about this new blog boy'
    });

    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get('/', (req, res) => {
    console.log(req.url);
    const blogs = [{
        title: "Yoshi finds Mario",
        snippet: "Loerm Ipsum Dolor..."},
        {
            title: "Yoshi finds Mario",
            snippet: "Loerm Ipsum Dolor..."},
            {
                title: "Yoshi finds Mario",
                snippet: "Loerm Ipsum Dolor..."},
                {
                    title: "Yoshi finds Mario",
                    snippet: "Loerm Ipsum Dolor..."}
    ]
res.render('index', {title: "Trent's Blog", blogs })
});


app.get('/about', (req, res) => {

    res.render('about', { title: "About Me" });
})

app.get('/blogs/create', (req, res) => {

    res.render('create', { title: "Create New Blog"});
})

app.use((req, res) => {
    res.status(404).render('404', { title: "Error Code: 404" });
})


app.listen(3000);       // once real mongo database connection string applied, remove this line
    
