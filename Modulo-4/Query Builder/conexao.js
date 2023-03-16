const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'mike5434',
      database : 'knexjs'
    }
  });

  module.exports = knex