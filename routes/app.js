var params = require('../params.js');
var format = require('../format.js')
var talks = require('../talks.js');
var fileSystem = require('fs');

exports.register = function(server) {
	var log = function(request) {
		console.log(request.method + ' received for ' + request.url);
	};

	server.get('/',
		function(request, response) {
			log(request);

			fileSystem.readFile('./views/index.html', 
				function (err, data) {
			  		if (err) throw err;
				
				  	response.writeHead(200, {
				  		'Content-Length': data.length,
  						'Content-Type': 'text/html' });  
					response.write(data);
				}); 
		});

	server.get('/watch',
		function(request, response) {
			log(request);

			fileSystem.readFile('./views/video.html', 
				function (err, data) {
			  		if (err) throw err;
				
				  	response.writeHead(200, {
				  		'Content-Length': data.length,
  						'Content-Type': 'text/html' });  
					response.write(data);
				}); 
		});
};