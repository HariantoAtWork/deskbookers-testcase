const
	Vue = require('./init/Vue');

var root = new Vue({
	el: '#app',
	template: require('./view/layout.html'),
	replace: true,
	data: {
		page: {
			title: 'Find a place to work',
			partialID: 'index',
			url: '#/'
		},
		query: 'Amsterdam',
		rows: [],
		image_urls: []
	},
	methods: {
		/* button events */
		onSearch: function (events) {
			toastr["info"]("Searching...");
			var q = this.query;
			$.get('https://maps.googleapis.com/maps/api/geocode/json?'+jQuery.param({address:q}))
				.then(function(json) {
					var results;
					if(Array.isArray(json.results)) {
						results = json.results[0]
					} else {
						results = json.results
					}

					console.log('- geometry |', JSON.stringify(results.geometry, null, 4));

					var viewport = results.geometry.viewport,
						geometry = { 
							ne: viewport.northeast.lat+','+viewport.northeast.lng,
							sw: viewport.southwest.lat+','+viewport.southwest.lng,
						};

					return $.get('https://www.deskbookers.com/nl-nl/sajax.json?'+jQuery.param({q:q})+'&type=-&people=any&favorite=0&pid=&'+jQuery.param(geometry)+'&ids=17201%2C19640%2C13692%2C13691%2C12136%2C17938%2C15292%2C14886%2C14885%2C14884%2C14883%2C15730%2C15353%2C15351%2C15330%2C15080%2C17290%2C15454%2C15451%2C15379')

				}.bind(this))
				.then(function(data){
					toastr["success"]("result..."+ data.rows.length);
					this.rows = data.rows;
					return data.rows;
					console.log('- deskbookers |', JSON.stringify(data,null, 4));
				}.bind(this))
				.then(function(rows){
					if(rows.length > 0) {
						this.viewCarousel(rows[0].image_urls)
					}
				}.bind(this))
				.catch(function(error){
					toastr["error"]("fail...");
					console.error(error);
				}.bind(this));
		},
		onViewCarousel: function(event) {
			toastr["info"]("click...");
			// this.viewCarousel(image_urls);
		},
		/* misc */
		backgroundImage: function(url) {
			if(Array.isArray(url)) {
				if(url.length > 0) {
					url = url[0];
				}
			}
			return { 'background-image':'url("'+ url +'")' }
		},
		viewCarousel: function(image_urls) {
			this.image_urls = image_urls;
		}
	},
	filters: {
		firstFour: function(array) {
			var container = [];
			if(array.length < 4) {
				return array
			}
			for (var i = 4 - 1; i >= 0; i--) {
				container.push(array[i])
			}
			return container;

		}
	}
});

module.exports = root;