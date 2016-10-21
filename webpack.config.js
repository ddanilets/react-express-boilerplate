const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: path.resolve('./build/js'),
    publicPath: '/public/js/',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.(scss|js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          require.resolve('babel-loader'),
        ],
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.ttf$/, loader: 'file-loader' },
      { test: /\.woff$/, loader: 'file-loader' },
      { test: /\.eot$/, loader: 'file-loader' },
      { test: /\.svg$/, loader: 'file-loader' },
      { test: /\.png$/, loader: 'url-loader' },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
    ],
  },
  node: {
    setImmediate: false,
    console: true,
    fs: 'empty',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'development',
      },
    }),
  ],
  devtool: 'sourcemap',
};

module.exports = webpackConfig;
