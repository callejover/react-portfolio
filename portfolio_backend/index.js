// REQUIRE DEPENDENCIES
const express       = require('express');
const mysql         = require('mysql');
const bodyParser    = require('body-parser');

// CONNECT TO MYSQL DATABASE
const connection = mysql.createConnection({
  host:       'crockett.highstone.biz',
  user:       'portfolio',
  password:   'Portfolio123',
  database:   'cjov_portfolio' 
});

// SETUP EXPRESS
const app = express();
const PORT = 9999;

//SETUP BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MIDDLEWARES
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// REQUESTS


// LISTEN TO PORT
app.listen(PORT, () => {
  console.log(`Yo! Now listening to port ${PORT}!` )
})