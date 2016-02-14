var dynamoose = require('../dynamoose.config');

var userSchema  = new dynamoose.Schema({
  id: {
    type: Number,
    validate: function(v) { return v > 0; },
    hashKey: true
  },
  name: {
    type: String,
    rangeKey: true,
    index: true
  },
  age: {
    type: Number
  }
},
{
  throughput: {read: 15, write: 5}
});

module.exports = dynamoose.model('User', userSchema);
