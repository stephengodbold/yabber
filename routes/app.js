var params = require('../params.js');
var fileSystem = require('fs');

exports.register = function(server) {
	server.get('/',
		function(request, response) {
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