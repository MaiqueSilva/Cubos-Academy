//importando pg(nodePostgresql)

const { Client, Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'mike5434',
    database: 'aula_conexao_node_pg'
})

module.exports = pool