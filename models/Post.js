const db = require('./db')

const Post= db.sequelize.define('userinfo', {
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.TEXT
    },
})

module.exports = Post