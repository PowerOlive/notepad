var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var res = "<h1>Hello World!</h1><br/><b>Welcome to Swaroop's Test Website</b>";
    response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});