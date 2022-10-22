const express = require('express');
const app = express();
const expresslay  = require('express-ejs-layouts');
const method = require('method-override');


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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


app.listen(3000,console.log('server is runnign'));