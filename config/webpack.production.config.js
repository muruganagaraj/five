var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var commonConfig = require('./webpack.common.config.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '',
    filename: '[hash].[name].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new WebpackCleanupPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/assets/images', to: 'images' },
      { from: 'src/web.config', to: '' }
    ]),
    new webpack.DefinePlugin({
        'process.env': {
            'ENV': JSON.stringify('production'),
            'NODE_ENV': JSON.stringify('production'),
            'API_URL': JSON.stringify('https://devspmwholesale.sslproc.com/publicservices/POSRESTServicesWholesale/'),
        }
    }),
    new ExtractTextPlugin('[hash].[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});