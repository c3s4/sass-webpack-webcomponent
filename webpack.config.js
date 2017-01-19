/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/app'
  },
  module: {
  	rules: [
	    {
          // Only run `.js` files through Babel
	      test: /\.js?$/,
	      use: "babel-loader",

	      // Skip any files outside of your project's `app` directory
	      include: [
	        path.resolve(__dirname, "app"),
	      ]
	    },

        {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }
  	]
  }
};