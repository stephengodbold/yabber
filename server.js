var express = require('express');
var api = require('./routes/api.js');
var app = require('./routes/app.js');
var port = 8888;

server = express();

//setup static content paths
server.use(express.static(__dirname + '/public'))

//register routes
api.register(server);
app.register(server);

//listen for something to happen
server.listen(port);
console.log('Listening on ' + port);