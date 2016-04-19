var webpack = require('webpack');

module.exports = {
  entry: {
    app: './client/src/index.js',
    vendor: ['babel-polyfill', 'bluebird', 'immutable', 'react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux', 'redux-thunk'],
    'vendor-dev': [ 'redux-devtools', 'redux-devtools-dock-monitor', 'redux-devtools-log-monitor' ]
  },

  output: {
    path: __dirname + '/server/public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // precompile react + es6
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'bluebird'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"' + process.env.NODE_ENV + '"'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [ 'vendor-dev', 'vendor' ],
      filename: '[name].bundle.js'
    })
  ],

  devtool: 'source-map'
};
