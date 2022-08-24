const express = require('express');
const pageController = require('./controllers/pageController') 
const app = express();
const ejs = require("ejs");
const path = require("path");


//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

//Routes
app.get('/', pageController.index);
app.get('/about', pageController.about);



const port = 3000;
app.listen(port, () => {
    console.log(`${port} numarali port acildi.`)
} )

