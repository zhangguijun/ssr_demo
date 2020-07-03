const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base.js')
const serverConfig = {
    target: 'node',
    // webpack4 要区分 你打包的是线上环境还是测试环境 需要配置mode
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
}
module.exports = merge(config, serverConfig)