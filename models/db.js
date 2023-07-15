const Sequelize = require('sequelize');
const sequelize = new Sequelize ('cadastro', 'root', 'password', {
    host: "localhost",
    dialect:'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}