//importando express
const express = require("express");
const app = express()
app.use(express.json())

const pool = require('./conexao')

//- configurando um client
app.get('/', async (req, res) => {
    const { pagina, porPagina } = req.query
    try {

        // const query = 'select * from empresas where nome = $1 or nome = $2'
        // const params = ['Google', 'Facebook']

        // Atualizando 
        // const query = 'update empresas set site = $1 where id = $2'
        // const params = ['www.cakewalk.com', 1]

        // const query = `select e.id as empresaId, f.id as filialId, e.nome, f.pais, p.nome as funcionario
        //      from empresas e
        //      join filiais f on e.id = f.empresa_id
        //      join pessoas p on e.id = p.empresa_id;`

        //left join ou righi join

        // LEFT JOIN

        // ele tras todos os registros da esquerda, independete de ele ter relação ou não com a tabela da direita
        // ex: na query a baixa estamos pedindo para ela monstrar todas as empresa(lado esquerdo) e tenta juntas com as filiais.
        // Mas ele vai mostrar o 'facebbok' que no nosso banco de dados não tem filial.

        // const query =` select e.id as empresaId, f.id as filialId, e.nome, f.pais from empresas e left join filiais f on e.id = f.empresa_id;`

        // -- RIGHT JOI
        // -- mesma coisa do exemplo a cima

        // const query =`select e.id as empresaId, f.id as filialId, e.nome, f.pais from empresas e right join filiais f on e.id = f.empresa_id;`

        // full join

        // vai trazer/juntar todos os registros indepente de houver relação ou não

        // const query = ` select e.id as empresaId, f.id as filialId, e.nome, f.pais from empresas e full join filiais f on e.id = f.empresa_id`

        const query = `select * from pessoas order by id asc limit $1 offset $2`;

        const { rowCount } = await pool.query('select * from pessoas')


        //se pagina for igual a 1 vai virar 0, se não vai ser oagina -1 * porPagina
        const offset = pagina === 1 ? 0 : (pagina - 1) * porPagina

        const resultado = await pool.query(query, [porPagina, offset])
        const result = {
            pagina,
            porPagina,
            total: rowCount,
            registros: resultado.rows,
        }
        return res.json(result)

    } catch (error) {
        console.log(error.massage)
    }
});

app.listen(3000)