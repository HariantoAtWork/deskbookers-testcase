// component.js

module.exports = function (Vue) {
	Vue.component('figure-tile',  require('./component/figure-tile'));
	Vue.component('carousel',     require('./component/carousel'));

	return Vue;
}