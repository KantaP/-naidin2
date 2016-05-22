var path = require('path')
var webpack = require('webpack')
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'url?limit=8192',
              'img'
          ]
      }
    ]
  }
}