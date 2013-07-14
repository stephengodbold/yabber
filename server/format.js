exports.json = function(response, callback) {
	return response.json(callback());
};

exports.json = function(response, callback, parameters) {
	return response.json(callback(parameters));
};