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
      res.render('index', {userlist: users})
    })
    .catch(function(err) {
      console.log(err);
      res.render('error', {err: err});
    });
});


router.post('/', function(req, res) {
  var query = {};
  var data = req.body;

  // get param from request
  var name = data['name'] || "";
  var agefrom = data['agefrom'] || 0;
  var ageto = data['ageto'] || 100;
  var cities = data['cities'] || "";
  var times = data['times'] || "";

  // set query condition
  query['name'] = new RegExp(name);
  query['age'] = {$gte: agefrom, $lte: ageto};
  if (cities != ""){
    var cities = cities.split(',');
    query['favourites.cities'] = {$in: cities};
  }
  if (times != ""){
    var times = times.split(',');
    query['favourites.times'] = {$in: times};
  }

  Users
      .find(query)
      .exec()
      .then(function(users) {
        res.send(200, JSON.stringify(users));
      })
      .catch(function(err) {
      console.log(err);
      res.render('error', {err: err});
    });
});

module.exports = router;
