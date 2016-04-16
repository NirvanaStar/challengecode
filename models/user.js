var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
var Schema = mongoose.Schema;

var Users = new Schema({
  name: {
    type: String,
    es_indexed: true,
    es_type: 'string'
  },
  age: {
    type: Number,
    es_indexed: true,
    es_type: 'integer'
  },
  favourites: {
    type: {cities: [String], times: [String]},
    es_indexed: true,
    es_type: 'nested'
  }
});

Users.plugin(mongoosastic, {index: 'users'});

var UsersModel = mongoose.model('Users', Users);

module.exports = UsersModel;