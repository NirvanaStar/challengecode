var express = require('express');
var router = express.Router();
var Users = require('../models/user');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});*/

router.use(function(req, res, next){
  console.log('Something is happening');
  next();
});

module.exports = router;
