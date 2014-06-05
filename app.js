var http = require("http"),
    fs = require("fs"),
    path = require("path"),
    express = require("express"),
    routes = require('./routes/config'),
    connect = require('connect'),
    app = express();
    //serve_static = require('serve-static');
    //io = require("scoket.io");
//app.configure(function(){
  app.set('port',process.env.PORT || 8080);
  app.set('views',__dirname+'/views');
  app.set('view engine','html');
  //connect().use(require('static-favicon'));
  //connect().use("/static",serve_static(path.join(__dirname,'bower_components')));
  //connect().use(connect.static(path.join(__dirname,'bower_components')));

  //connect().use(static("bower_components",{'root': path.join(__dirname,'/bower_components')}));
  //app.use(express.favicon());
  //app.use(express.logger('dev'));
  //app.use(express.bodyParser());
  //app.use(express.methodOverride());
  //app.use(express.cookieParser('your secret here'));
  //app.use(express.session());
  //app.use(app.router);
  app.use(express.static(path.join(__dirname,'bower_components')));
//});

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  console.log('development');
}

//app.configure('development',function(){
  //app.use(express.errorHandler());
//});

routes(app);

var server = http.createServer(app);

var io = require('socket.io').listen(server);

server.listen(app.get('port'),function(){
  console.log("Express server listening on port " + app.get('port'));
});

require('./socket/index.socket').beginSocket(io);




