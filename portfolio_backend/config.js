
// CONNECT TO MYSQL DATABASE
var mysql = require('mysql');

const connection = mysql.createConnection({
    host:       'crockett.highstone.biz',
    user:       'portfolio',
    password:   'Portfolio123',
    database:   'cjov_portfolio' 
  });
  
//CHECK CONNECTON
connection.connect(function(err) {
    if(!err) {
        console.log('CONNECTED TO DB!');
    } else {
        console.log('ERROR WHILE CONNECTING TO DB')
        console.log(err);
    }
});

// EXPORT CONNECTION
module.exports = connection;
