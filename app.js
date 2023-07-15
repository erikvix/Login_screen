const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const { rmSync } = require('fs');
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//? engines // 
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//! routes//
app.get('/', function(req, res){
    Post.all().then(function(posts){
    res.render('home', {email: "tal" , senha: "tal2"})
    })
})

app.get("/cad", function(req, res){
    res.render('formulario')
})
app.post('/add', function(req, res){ 
    Post.create({
        email: req.body.title,
        senha: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Error' + erro)
    })
})



app.listen(8082, function(){console.log("Server ON");});