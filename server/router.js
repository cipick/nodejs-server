var Base = require('./controller/base');
var User = require('./controller/user');

var apiPrefix = '/api/v1';

module.exports = {
  bindRoutes: function(app){
    app.get('/', Base.index)
    app.get(apiPrefix + '/user', User.getUser)
    app.post(apiPrefix + '/user', User.postUser)
    app.put(apiPrefix + '/user', User.putUser)
    app.delete(apiPrefix + '/user', User.deleteUser)
  }
}
