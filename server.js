const express = require('express');
const app = express();
const expresslay  = require('express-ejs-layouts');
const method = require('method-override');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin:'https://www.youtube.com/',
}));


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


app.post('/search',(req,res)=>{
    res.render('search',{searchlabel:`${req.body.searchq}`});
})



app.get('/view',(req,res)=>{
    res.render('view',
    {
        title:req.query.title,
        img:req.query.img,
        rate:req.query.rate,
        contentRating:req.query.contentRating,
        year:req.query.year,
        genres:req.query.genres,
        runtimeStr:req.query.runtimeStr,    
        plot:req.query.plot,
        actors:req.query.actors,
        id:req.query    .id
    });
})


app.listen(PORT);