const Sequelize = require('sequelize');
const sequelize = new Sequelize('cadastrosys', 'root', 'password', {
    host: "localhost",
    dialect:'mysql'
});

const Postagem = sequelize.define('postagens', {
    email: {
        type: Sequelize.STRING,
    },
    senha:{
        type:Sequelize.TEXT
    }
})
Postagem.create({
    email: "erik@hotmail.com",
    senha: "unodos"
})

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING,
    },
    sobrenome: {
        type: Sequelize.STRING,
    },
    idade: {
        type: Sequelize.INTEGER
    }
})

// Usuario.sync({force: true})


// TODO colocar funções!! //

// ! teste de conexão com banco de dados //
// sequelize.authenticate().then(function(){
//     console.log("Conectado")
// }).catch(function(erro){
//     console.log("Falha ao se conectar: "+erro)
// })