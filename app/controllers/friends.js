'use strict';

exports.index = function(req, res){
  res.render('friends/welcome');
};



exports.init = function(req, res){
  res.render('friends/init');
};
