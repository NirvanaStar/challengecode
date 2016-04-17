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
      res.render('error', {err: err});
    });
});

router.post('/', function(req, res) {
  var query = {};
  var data = req.body;

  var name = data['name'] || "";
  var agefrom = data['agefrom'] || 0;
  var ageto = data['ageto'] || 100;
  var city = data['city'].split(',') || "";
  /*var times = data['times'] || "";*/

  query['name'] = new RegExp(name);
  query['age'] = {$gt: agefrom, $lt: ageto};
  query['favourites.cities'] = {$in: city}

  Users
      .find(query)
      .exec()
      .then(function(users) {
        // users.name = 
        res.render('index', {userlist: users});
      })
      .catch(function(err) {
      console.log(err);
      res.render('error', {err: err});
    });
});



module.exports = router;
