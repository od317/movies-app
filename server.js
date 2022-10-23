const express = require('express');
const app = express();
const expresslay  = require('express-ejs-layouts');
const method = require('method-override');
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(method('_method'));
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('layout','./layouts/layout');
app.use(expresslay);

app.get('/',(req,res)=>{
    res.render('home');
})


app.listen(PORT);