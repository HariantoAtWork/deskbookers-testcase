// routes.js

var _ = require('lodash');

module.exports = function (crossroads, vue_app) {
	var page_index = function(page) {
		console.log('- routes.js: page_index |', page)
	}

	crossroads.addRoute('{page*}', page_index.bind(vue_app));


	crossroads.routed.add(console.log, console); //log all routes

	return crossroads;
}