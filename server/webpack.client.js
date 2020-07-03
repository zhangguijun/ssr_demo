const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.js')
const clientConfig = {
    // webpack4 要区分 你打包的是线上环境还是测试环境 需要配置mode
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
}
module.exports = merge(config, clientConfig)