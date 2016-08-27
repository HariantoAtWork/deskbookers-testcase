// partial.js

module.exports = function (Vue) {
	Vue.partial('index',  require('./partial/index.html'));

	return Vue;
}