module.exports = {
  getUser: function(req, res){
    res.json({action: 'get'});
  },
  postUser: function(req, res){
    res.json({action: 'post'});
  },
  putUser: function(req, res){
    res.json({action: 'put'});
  },
  deleteUser: function(req, res){
    res.json({action: 'delete'});
  }
}
