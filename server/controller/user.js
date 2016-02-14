var User = require('../model/user')

module.exports = {
  getUser: function(req, res){
    id = req.params['id']

    User.query('id').eq(id).exec(function (err, user) {
      if(err) { return console.log(err); }
      res.json(user);
    });
  },
  postUser: function(req, res){
    User.create({
      id: 1,
      name: 'foo'
    }, function(err, user) {
      if(err) { return console.log(err); }
      res.json(user);
    });
  },
  putUser: function(req, res){
    id = req.params['id']

    User.update({id: id, name: 'foo'}, {$PUT: {age: 1}}, function (err) {
      if(err) { return console.log(err); }
    });
  },
  deleteUser: function(req, res){
    var id = req.params['id'];

    User.delete({id: id, name: 'foo'}, null, function(err) {
      if(err) { return console.log(err); }
      res.json({action: 'delete'});
    });
  }
}
