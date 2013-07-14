var vows = require('vows');
var assert = require('assert');
var params = require('../params.js');

vows.describe('finds a parameter').addBatch({
	'when an id parameter is passed' : { 
		topic: function () {
    		var parameters = {"id": 42};
    		return params.parseId(parameters);
  		},
  		'the id is a number': function (topic) {
    		assert.isNumber(topic);
  		},
  		'the id is not null': function(topic) {
			assert.isNotNull(topic);
		},
  		'the id is correct': function(topic) {
  			assert.strictEqual(topic, 42);
  		}
	}
}).run();