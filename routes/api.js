var params = require('../params.js');
var format = require('../api/format.js')
var talks = require('../api/talks.js');

exports.register = function(server) {
	//LIST
	server.get('/talk', 
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
};