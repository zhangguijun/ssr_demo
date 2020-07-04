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
    module: {
        rules: [ {
            test: /\.less?$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
            test: /\.css?$/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                }
            }]
        }

        ]
    }
}
module.exports = merge(config, clientConfig)