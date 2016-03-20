var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var PORT = process.env.PORT || 8080;

//Mongoose Connect//
var db = 'mongodb://localhost/yardsale';
mongoose.connect(db);

var User = require('./models/Users');

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send(index.html);
});

app.post('/user', function(req, res){
  req.body.username = req.body.username.toLowerCase();
  Users.findOne({
    'username': req.body.username
  });
});

app.listen(PORT, function(req, res){
  console.log("You're listening on port: %s", PORT);
});
