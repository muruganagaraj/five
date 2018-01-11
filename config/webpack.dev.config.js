var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.config.js');
var helpers = require('./helpers');
 
module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
 
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[hash].[name].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
 
  plugins: [
    new ExtractTextPlugin('[hash].[name].css'),
    new webpack.DefinePlugin({
        'process.env': {
            'ENV': JSON.stringify('development'),
            'NODE_ENV': JSON.stringify('development'),
            'API_URL': JSON.stringify('http://localhost/spm.services/'),
        }
    })
  ],
 
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});