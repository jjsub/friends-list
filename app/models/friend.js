'use strict';



function Friend(o){

  this.name     = o.name;
  this.nickname = o.nickname;
  this.phone    = o.phone;


}

Object.defineProperty(Friend, 'collection', {
  get: function(){return global.mongodb.collection('Friends');}
});

Friend.all = function(cb){
  Friend.collection.find().toArray(cb);
};

Friend.create = function(friend, cb){
  var f = new Friend(friend); //is a instance of Friend Constructor/object
  Friend.collection.save(f, cb);

};

module.exports = Friend;

