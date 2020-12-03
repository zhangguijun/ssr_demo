/*
 * @description webpack 开发环境配置
 * @fileName webpack.dev.config.js
 * @author zh8
 * @date 2020/10/26 13:37:36
*/

const merge = require('webpack-merge');

const webpack = require('webpack');

const baseConfig = require('./webpack.base.config');


module.exports = merge(baseConfig, {
  // devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 8001,
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development')
    })
  ]
})