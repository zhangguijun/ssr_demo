/*
 * @description webpack client
 * @fileName webpack.base.config.js
 * @author zh8
 * @date 2020/11/20 17:08:48
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('../utils');

module.exports = {
    entry: resolve('client/main.js'),
    output: {
        path: resolve('dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // 只编译app文件夹下的文件
                include: resolve('client'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    }
                }
            },
            {
                test: /\.html$/,
                include: resolve('client'),
                loader: 'html-loader'
            },
            {
                test: /\.less/,
                include: resolve('client'),
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: `url-loader?limit=1000`
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: `file-loader`
            }

        ]
    },
    resolve: {
        // 设置路径别名
        alias: {
            '@': resolve('app'),
        },
        // 文件后缀自动补全, 就是你import文件的时候如果没写后缀名就会优先找下面这几个
        extensions: ['.js', '.jsx'],
    },
    // 第三方依赖，可以写在这里，不打包
    externals: {},
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('template/app.html')
        })
    ]
}
