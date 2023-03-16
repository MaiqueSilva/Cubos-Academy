const express = require('express');
const knex =require('./conexao')

const app = express();

app.use(express.json());

app.get('/', async (req,res)=> {
    //conexao.query('select * from agenda') como era antes
    // const agenda = await knex('agenda').where('id',5).debug();
    // const agenda = await knex('agenda').where('id','!=',5).debug();
    // const agenda = await knex('agenda').where({id:5, nome: "alguma coisa"}).debug();
    // const agenda = await knex('agenda').where({id:5}).first().debug();
    // const agenda = await knex('agenda').where({id:5}).select("id","nome").first().debug();

    //select * from agenda where email is null; forma antiga
    // const agenda = await knex('agenda').whereNull("email").debug(); nova forma

    //select * from agenda where email is not null; //forma antiga
    // const agenda = await knex('agenda').whereNotNull("email").debug(); //nova forma


    //select * from agenda where id between 5 and 10; //forma antiga
    // const agenda = await knex('agenda').whereBetween("id", [5,10]).debug(); //nova forma

    // const agenda = await knex('agenda').whereBetween("id", [5,10]).orderBy("id","desc").debug(); //nova forma
    // const agenda = await knex('agenda').distinc("email","nome").debug();

    
    //select email from agenda group by email
    // const agenda = await knex('agenda').select('email').groupBy("email").count().debug();
    // const agenda = await knex('agenda').limit(5).offset(2).debug();

    const agenda = await knex('agenda').whereNull("email").debug();



    return res.json(agenda);
});



app.listen(3000)