var dynamoose = require('dynamoose');
var express = require('express');
var bodyParser = require('body-parser');

var Router = require('./router')
var config = require('./config');

var PORT = 3000;

dynamoose.AWS.config.update({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  region: config.AWS_REGION
});

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

Router.bindRoutes(app);

app.use(express.static(__dirname + '/../public'));

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');
});
