var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native
class DbConnection{
  conString = "postgres://ijjngwpt:pY5eeO3lJjfbrncAbZir1_OZeg15DBDZ@motty.db.elephantsql.com/ijjngwpt";
  client = new pg.Client(conString);
  constructor(){
    
  }
}




client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

const query = {
    text: 'SELECT * FROM teste',
}
// callback
client.query(query, (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        for(var i = 0; i<res.rows.length; i++){
            console.log(res.rows[i]);
        }
    }
})