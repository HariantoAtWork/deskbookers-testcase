var component = {
	props: [
		'image_urls',
		{
			name: 'background-image',
			type: Function,
			required: true
		}
	],
	template: require('./index.html'),
	data: function() {
		return {
			currentIndex: 0,
			repeat: true
		}
	},
	watch: {
		'image_urls': function(newValue, oldValue) {
			// reset value
			this.currentIndex = 0;
		}
	},
	methods: {
		onPrev: function (event) {
			var index  = this.currentIndex,
				length = this.image_urls.length-1,
				repeat = this.repeat;

			--index;

			if(index < 0) {
				index = repeat ? length : 0;
			}

			this.currentIndex = index;

			toastr["info"]("index: "+index);
		},
		onNext: function (event) {
			var index  = this.currentIndex,
				length = this.image_urls.length-1,
				repeat = this.repeat;

			++index;

			if(index > length) {
				index = repeat ? 0 : length;
			}


			this.currentIndex = index;

			toastr["info"]("index: "+index);
		},
		onSelectedItem: function(index) {
			toastr["info"]("index: "+index);
			this.currentIndex = index;
		}
	}
}

module.exports = component;