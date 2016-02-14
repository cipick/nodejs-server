var Base = require('./controller/base');
var User = require('./controller/user');

var apiPrefix = '/api/v1';

module.exports = {
  bindRoutes: function(app){
    app.get('/', Base.index)
    app.get(apiPrefix + '/user/:id', User.getUser)
    app.post(apiPrefix + '/user', User.postUser)
    app.put(apiPrefix + '/user/:id', User.putUser)
    app.delete(apiPrefix + '/user/:id', User.deleteUser)
  }
}
