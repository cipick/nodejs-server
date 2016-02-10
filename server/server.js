var dynamoose = require('dynamoose');
var express = require('express');
var bodyParser = require('body-parser');

var Router = require('./router')

var PORT = 3000;

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
