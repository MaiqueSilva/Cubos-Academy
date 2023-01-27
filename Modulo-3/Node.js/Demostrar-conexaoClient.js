//importando express
const express = require("express");
//importando pg(nodePostgresql)
const { Client, Pool } = require('pg')


const app = express()

app.use(express.json())

//- configurando um client
app.get('/', async (req, res) => {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'mike5434',
        database: 'aula_conexao_node_pg'
    })

    try {

        //conectar ao client
        await client.connect()

        //aguardar requisição
        const resultado = await client.query('select* from empresas')

        //encerrar client
        await client.end()

        return res.json(resultado)

    } catch (error) {
        console.log(error.massage)
    }
});

app.listen(3000)