const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

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


app.listen(3000);
    
