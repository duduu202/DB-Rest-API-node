const pool = require('./DbConnection').pool;
const queries = require('./queries');

const getTeste = async (req, res) =>{
    console.log("entrou no getTeste");
    try{
      const response = await pool.query(queries.getTeste);
      res.status(200).json(response.rows);
    }catch(error){
      console.log("Erro: "+error);
      res.send("Erro: "+error);
    }
}
const addHappyBirdUser = async (req, res) =>{
    const { nome, pontoRecorde } = req.body;
    try{
        pool.query(queries.checkHappyBirdUserExists, [nome], (error, results) =>{
        if(results.rows.length){
            res.send("O usuário já existe.");
        }
        
        pool.query(queries.addHappyBirdUser, [nome, pontoRecorde], (error, results) =>{
            res.status(201).send("Usuário criado com sucesso");
        })
      });

      //res.status(200).json(response.rows);

    }catch(error){
      console.log("Erro: "+error);
      res.send("Erro: "+error);
    }
}

const getHappyBirdUser = async (req, res) =>{
    try{
      const response = await pool.query(queries.getHappyBirdUserByRecord);
      res.status(200).json(response.rows);
    }catch(error){
      console.log("Erro: "+error);
      res.send("Erro: "+error);
    }
}

module.exports = {
    getTeste,
    getHappyBirdUser,
    addHappyBirdUser
}

/*
CREATE TABLE HappyBirdUser(
id SERIAL,
nome varchar(30),
pontoRecorde INTEGER
);
*/