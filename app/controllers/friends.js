'use strict';

var Friend = require('../models/friend');

exports.home = function(req, res){
  res.render('friends/welcome');
};


exports.init = function(req, res){
  res.render('friends/init');
};


exports.index = function(req, res){
  Friend.all(function(err, friends){
    console.log(friends);
    res.render('friends/index',{friends:friends});
  });
};
exports.create = function(req, res){
  Friend.create(req.body, function(){
    res.redirect('/friends');
  });
};
