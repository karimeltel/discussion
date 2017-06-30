var webpack = require( 'webpack' );
var ProgressBarPlugin = require( 'progress-bar-webpack-plugin' );
var devDomain = 'localhost';
var devPort = 8001;
var productDomain = 'http://localhost:8092';
module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: '',
    host: devDomain,
    port: devPort,
    proxy: {
      '/api/*': {
        target: productDomain,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8001',
      'webpack/hot/only-dev-server',
      './src/scripts/index.jsx'
    ]
  },
  output: {
    path: './client',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  debug: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin( 'common.bundle.js' ),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin( {
      'process.env': {
        'NODE_ENV': JSON.stringify( 'development' )
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
        loader: 'react-hot!babel',
        exclude: /node_modules/
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.less/,
        loader: 'style!css!less'
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
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
