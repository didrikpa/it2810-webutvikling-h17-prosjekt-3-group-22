const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge.smart(config, {
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
      },
      comments: false,
    }),
  ],
});