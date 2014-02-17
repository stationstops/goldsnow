// web.js
var express = require("express");
var logfmt = require("logfmt");
var redis = require('redis-url').connect(process.env.REDISTOGO_URL);
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

redis.set('foo', 'bar');

redis.get('foo', function(err, value) {
  console.log('foo is: ' + value);
});
