var express = require('express');
var api = require('./routes/api.js');
var app = require('./routes/app.js');
var port = 8888;

//server.set('views', __dirname + '/views');
//server.engine('html', require('ejs').renderFile);

server = express();
api.register(server);
app.register(server);
server.listen(port);
console.log('Listening on ' + port);