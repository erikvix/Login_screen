const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const { rmSync } = require('fs');
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//! css
app.use(express.static('public'));


//? engines // 
app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,},}));
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//! routes//
app.get('/result', function(req, res){
    Post.findAll(({order: [['id', 'DESC']]})).then(function(user){
        console.log(user)
        res.render('home', {user: user})
    })
})

app.get("/", function(req, res){
    res.render('formulario')
})
app.post('/add', function(req, res){ 
    Post.create({
        email: req.body.email,
        senha: req.body.senha
    }).then(function(){
        res.redirect('/result')
    }).catch(function(erro){
        res.send('Error' + erro)
    })
})

app.get('/delete/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Usuário deletado')
    }).catch(function(erro){
        res.send("Error" + erro)
    })
    
})


app.listen(8082, function(){console.log("Server ON http://localhost:8082");});