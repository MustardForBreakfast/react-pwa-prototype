'use strict'

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const devConfig = merge(common, {
  /* Add dev-specific configuration here, eg. more expensive sourcemaps. */
});


module.exports = devConfig;