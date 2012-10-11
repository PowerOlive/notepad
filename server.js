var express = require('express'),
	jade = require('jade');

var app = express.createServer(express.logger());

app.configure(function() {
  app.set('views', __dirname + '/views');
  // app.use(express.favicon());
  // app.use(express.bodyParser());
  // app.use(express.cookieParser());
  // app.use(connectTimeout({ time: 10000 }));
  // app.use(express.session({ store: mongoStore(app.set('db-uri')), secret: 'topsecret' }));
  // app.use(express.logger({ format: '\x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m :response-time ms' }))
  // app.use(express.methodOverride());
  // app.use(stylus.middleware({ src: __dirname + '/public' }));
  // app.use(express.static(__dirname + '/public'));
  // app.set('mailOptions', {
    // host: 'localhost',
    // port: '25',
    // from: 'nodepad@example.com'
  // });
});
app.register('.html', require('jade'));
app.get('/', function(request, response) {
	response.render('index.html', { layout: false});
	// var res = "<h1>Hello World!</h1><br/><b>Welcome to Swaroop's Test Website</b>";
    // response.send(res);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});