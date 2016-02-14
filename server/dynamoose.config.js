var dynamoose = require('dynamoose');
var config = require('./config');

dynamoose.AWS.config.update({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  region: config.AWS_REGION
});

module.exports = dynamoose
