const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, './public'),
    historyApiFallback: true,
    inline: true,
    hot: true,
    progress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'url-loader?limit=2048',
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin('chen 2019'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};

module.exports = config;
