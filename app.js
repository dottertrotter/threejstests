var express = require('express'), 
	engine = require('ejs-locals'),
	fs = require('fs'),
	marked = require('marked'),
	dir = require('node-dir');

var app = express();

app.configure(function() {
	app.use(app.router);
	app.engine('ejs', engine);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
	res.render('index', {});
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log('Listening on port 3000');