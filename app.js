var express = require('express');
var path = require('path');
require('express-namespace');

var app = express();

app.configure(function(){
  app.set('port', 80);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

//routes
app.namespace('/', function() {
  require('./routes/index')(app);
    app.locals.pretty = true;
});

app.listen(8000);
console.log(app.routes)
console.log('Server running at http://127.0.0.1:8000/');
