const {Pool} = require('pg'); //Pegar classe Pool de pg

//Criar o objeto, estabelecendo a conexão
const pool = new Pool({
  connectionString: process.env.DATABASE_URL|| 'SUA URL AQUI :D',
  ssl: process.env.DATABASE_URL ? true : false
})

//exporta o objeto criado
module.exports = {
  pool
}
