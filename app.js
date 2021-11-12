var express = require('express');
var morgan = require('morgan');
var app     = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.status(200).send("Hello World");
});

app.listen(port, ip);
console.log('Running on port ', port);
