'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
    friends        = require('../controllers/friends');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(methodOverride());

  app.get('/', friends.home);
  app.get('/friends/new',friends.init);  // this is in the home controller
  app.get('/friends',friends.index);
  app.post('/friends',friends.create); // Post: is what comienza the send data to the DB
  console.log('Routes Loaded');
};

