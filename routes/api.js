var params = require('../params.js');
var format = require('../format.js')
var talks = require('../talks.js');

exports.register = function(server) {
	var log = function(request) {
		console.log(request.method + ' received for ' + request.url);
	};

	//LIST
	server.get('/talk', 
		function(request, response) { 
			log(request);
			format.json(
				response, 
				talks.talks);		
	});

	//GET
	server.get('/talk/:id',
		function(request, response) { 
			log(request);
			format.json(
				response,
				talks.talk,
				params.parseId(request.params));
	});
};