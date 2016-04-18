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
  console.log(data);
  var name = data['name'] || "";
  var agefrom = data['agefrom'] || 0;
  var ageto = data['ageto'] || 100;
  var cities = data['cities'] || "";
  var times = data['times'] || "";

  query['name'] = new RegExp(name);
  query['age'] = {$gte: agefrom, $lte: ageto};
  if (cities != ""){
    var cities = cities.split(',');
    query['favourites.cities'] = {$in: cities};
  }
  if (times != ""){
    var times = times.split(',');
    query['favourites.cities'] = {$in: times};
  }

  Users
      .find(query)
      .exec()
      .then(function(users) {
        res.render('index', {userlist: users});
      })
      .catch(function(err) {
      console.log(err);
      res.render('error', {err: err});
    });
});

//
router.get('/tags', function(req, res, next) {
  client.zrevrangebyscore('tags:news', '+inf', '-inf', function(err, tags) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(tags);
    }
  });
});


module.exports = router;
