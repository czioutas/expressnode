// server.js

// set up ======================================================================
// get all the tools we need
var express      = require('express');
var routes       = require('routes');
var favicon      = require('serve-favicon');
var session      = require('express-session');
var bodyParser   = require('body-parser');
var http         = require('http');
var multer 	 	   = require('multer');
var errorHandler = require('errorhandler');
var variables    = require('./config/variables.js')
var port     	   = variables.PORT || 8000;
var mongoose 	   = require('mongoose');
var flash    	   = require('connect-flash');
var path     	   = require('path');
var cookieParser = require('cookie-parser')
var morgan       = require('morgan');
var methodOverride = require('method-override');
var routes = require('./routes');
var configDB = require('./config/database.js');

var app      	 = express();

// configuration ===============================================================
// connect to our database

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
configDB.url ||
'mongodb://db1.example.net,db2.example.net:2500/?replicaSet=test';

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

// all environments
app.set('view engine','ejs');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

// Load routing.js with passport
//require('./app/routes.js')(app, passport);

app.get('/', routes.index);
app.get('/acknowledgement', routes.acknowledgement);

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

// launch ======================================================================
app.listen(app.get('port'), function(){
  console.log('The magic happens on port ' + app.get('port'));
});
