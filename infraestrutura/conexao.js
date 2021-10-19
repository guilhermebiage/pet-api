const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'mysql',
    password: 'admin',
    database: 'pet_api'
})

module.exports = conexao
