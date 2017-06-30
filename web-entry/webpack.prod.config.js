var webpack = require( 'webpack' );
var ProgressBarPlugin = require( 'progress-bar-webpack-plugin' );

module.exports = {
  entry: {
    app: [
      './src/scripts/index.jsx'
    ]
  },
  output: {
    path: './build',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new ProgressBarPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin( 'common.bundle.js' ),
    new webpack.DefinePlugin( {
      'process.env.NODE_ENV': '"production"'
    } ),
    new webpack.optimize.UglifyJsPlugin( {
      compress: {
        warnings: false
      }
    } )
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  module: {
    preLoaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },

      {
        test: /\.less/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },

      {
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]&context=./src'
      }
    ]
  }
};
