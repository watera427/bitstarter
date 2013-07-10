var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(100);

buffer.write(express.readFileSync('index.html'));

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
