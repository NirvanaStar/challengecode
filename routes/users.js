var express = require('express');
var router = express.Router();
var Users = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var query = {};

  Users
    .find()
    .exec()
    .then(function(users) {
      res.render('index', {userlist: users});
    })
    .catch(function(err) {
      console.log(err);
      res.render('404', {err: err});
    });
});

router.post('/', function(req, res) {
  var data = req.body;
  var name = data['name'];
  console.log(name);
  
  Users
      .find({'name' : name})
      .exec()
      .then(function(users) {
        // users.name = 
        res.render('index', {userlist: users});
      })
      .catch(function(err) {
      console.log(err);
      res.render('404', {err: err});
    });
});


module.exports = router;
