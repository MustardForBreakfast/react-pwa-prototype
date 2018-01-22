'use strict'

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// TODO: move to prod only?
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const extractSCSS = new ExtractTextPlugin({ filename: "/css/[name].css" });
const extractCSS = new ExtractTextPlugin({ filename: "/css/vendor.css" })

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
    path: path.resolve(__dirname, '../client/_dist'),
  },
  plugins: [
    extractSCSS,
    extractCSS,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../client/src/index.html'),
      inject: 'body',
    }),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'pwa-prototype',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: false, // So we can look inside and learn about this stuff.
        navigateFallback: '/index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }
    ),
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
        use: extractSCSS.extract({
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
          name: '/images/[name].[ext]',
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: 'css-loader',
        })
      },
    ]
  },
};
