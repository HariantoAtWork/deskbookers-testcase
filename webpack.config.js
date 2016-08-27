module.exports = {
	entry: "./entry.js",
	output: {
		path: "./build",
		publicPath: "/build/",
		filename: "build.js"
	},
	externals: {
		'jquery': "jQuery",
		'jquery': "$",
		'vue': "Vue",
		'crossroads': 'crossroads',
		'hasher': 'hasher',
		'lodash': '_'
	},
	module: {
		loaders: [
			{ test: /\.less$/, loader: "style!css!less" },
			{ test: /\.html$/, loader: "html" }
		]
	}
};