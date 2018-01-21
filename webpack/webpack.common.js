'use strict'

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + "/client/src/js",
  devtool: 'cheap-module-source-map',
  entry: {
    'main': 'main.jsx',
  },
  resolve: {
    modules: [
      path.resolve('./client/src/js'),
      '../node_modules'
    ],
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, '../client/_dist/js'),
  },
  plugins: [
    new ExtractTextPlugin({ filename: "../css/[name].css" }),
    // new webpack.optimize.ModuleConcatenationPlugin(), //THIS IS FOR 3.0
  ],
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // NOTE: see babelrc for additional babel config.
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          }, {
            loader: 'sass-loader',
            options:{
              sourceMap: true,
            }
          }]
        })
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: '../images/[name].[ext]',
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '../fonts/[name].[ext]',
        },
      },
    ]
  },
};
