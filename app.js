const http = require('http');
const _ = require('lodash');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log(req.url);
res.render('index');

})

app.get('/about', (req, res) => {

    res.render('about');
})

app.get('/blogs/create', (req, res) => {

    res.render('create');
})

app.use((req, res) => {
    res.status(404).render('404');
})


app.listen(3000);
    
