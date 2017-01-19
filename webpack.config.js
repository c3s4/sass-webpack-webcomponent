/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCSS = new ExtractTextPlugin('bundle.css');


module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/app'
  },
  module: {
  	rules: [
	    {
        // Only run `.js` files through Babel
	      test: /\.js?$/,
	      loader: "babel-loader",

	      // Skip any files outside of your project's `app` directory
	      include: [
	        path.resolve(__dirname, "app"),
	      ]
	    },

        {
          test: /\.scss$/i,
          exclude: [
            path.resolve(__dirname, "node_modules")
          ],
          loader: extractCSS.extract(['css-loader', 'sass-loader'])
        }
  	]
  },
  plugins: [
    extractCSS
  ]
};