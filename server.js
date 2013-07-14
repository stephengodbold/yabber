var express = require('express');
var winston = require('winston');
var params = require('./params.js');
var format = require('./format.js')
var talks = require('./talks.js');
var port = 8888;

server = express();
winston.extend(server);

//LIST
server.get('/', 
	function(request, response) { 
		format.json(
			response, 
			talks.talks);
});

//GET
server.get('/talk/:id',
	function(request, response) { 
		format.json(
			response,
			talks.talk,
			params.parseId(request.params));
});

//start server
server.listen(port);
console.log('Listening on ' + port);