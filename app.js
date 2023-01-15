const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const blogRoutes = require('./routes/blogRoutes');


const app = express();
mongoose.set('strictQuery', true);

const dbURI = "mongodb+srv://tbensheimer:TlJI4FehtueaIaaJ@blogcluster.hlxktaj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    app.listen(port);
})
.catch((err) => {
    console.log(err);
})

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));

app.use(blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: "Error Code: 404" });
})