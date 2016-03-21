var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var PORT = process.env.PORT || 8080;

//Mongoose Connect//
var db = 'mongodb://localhost/yardsale';
mongoose.connect(db);

var User = require('./models/User');
var Item = require('./models/Item');

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send(index.html);
});

app.post('/user', function(req, res) {
  req.body.username = req.body.username.toLowerCase();
  User.findOne({
      'username': req.body.username
    }).exec(function(err, user) {
      if(err){
        console.log('error');
        res.send(err);
      }else{
        if(user === null){
          console.log(req.body);
          var newUser = new User(req.body);
          newUser.save(function(err, newUser) {
            if(err){
              console.log(err);
              res.send(err);
            }else{
              res.send(newUser);
            }
          });
        } else {
          console.log(user);
          res.send(user);
        }

      }
    });
});

app.post('/newitem/:id', function(req, res) {
  var itemWithUserId = req.body;
  itemWithUserId._user = req.params.id;

  var newItem = new Item(itemWithUserId);
  newItem.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      User.findOneAndUpdate({
        _id: req.params.id
      }, {
        $push: {
          'items': doc._id
        }
      },{new:true}, function(err, updatedUser) {
        if (err) {
          console.log(err);
        } else {
          res.send(updatedUser);
        }
      });
    }
  });
});


app.listen(PORT, function(req, res){
  console.log("You're listening on port: %s", PORT);
});
