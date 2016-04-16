var express = require('express');
var router = express.Router();
var Users = require('../models/user');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});*/

router.get('/', function(req, res) {
  var query = {};

  Users
    .find()
    .exec()
    .then(function(users) {
      console.log(users[0]['favourites']);
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

  Users
      .findById(name)
      .exec()
      .then(function(users) {
        // users.name = 
        res.render('index', {userlist: users});
      })
});

module.exports = router;
