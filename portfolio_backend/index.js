
// REQUIRE DEPENDENCIES
const express       = require('express');
const mysql         = require('mysql');
const bodyParser    = require('body-parser');

// SETUP EXPRESS
const app   = express();
const PORT  = 9999;

// REQUIRE CONTROLLERS
const commentsController    = require('./controllers/comments-controller');
const newCommentController  = require('./controllers/new-comment-controller');


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
app.get('/api/comments', commentsController.comments);
app.post('/api/comments', newCommentController.newComment);

// LISTEN TO PORT
app.listen(process.env.PORT || PORT, process.env.IP);