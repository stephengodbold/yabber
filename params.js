exports.parseId = function(params) {
	if ((params == undefined) || (params == null)) {
		return NaN;
	}

	return parseInt(params.id);
};