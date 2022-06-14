const getTeste = "SELECT * FROM teste";
const getHappyBirdUserByRecord = "SELECT * FROM HappyBirdUser ORDER BY pontoRecorde DESC";
const addHappyBirdUser = "INSERT INTO HappyBirdUser(nome, pontoRecorde) VALUES($1, $2)";
const checkHappyBirdUserExists = "SELECT nome FROM HappyBirdUser WHERE HappyBirdUser.nome = $1";

module.exports = {
    getTeste,
    getHappyBirdUserByRecord,
    addHappyBirdUser,
    checkHappyBirdUserExists
}