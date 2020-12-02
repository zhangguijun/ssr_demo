/*
 * @description webpack client
 * @fileName webpack.base.config.js
 * @author zh8
 * @date 2020/11/20 17:08:48
*/
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { resolve } = require('../utils');

module.exports = {
    target: 'node',
    mode: 'development',
    entry: resolve('server/index.js'),
    output: {
        path: resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // 只编译app文件夹下的文件
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
              test: /\.less?$/,
              use: ['isomorphic-style-loader', 'css-loader', 'less-loader']
          },
          {
              test: /\.css?$/,
              use: ['isomorphic-style-loader', {
                  loader: 'css-loader',
                  options: {
                      importLoaders: 1,
                      modules: true,
                      localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
              }]
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
    // 第三方依赖，可以写在这里，不打包 不打包三方依赖
    externals: [nodeExternals()],
    plugins: [
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development'),
          'process.env.VUE_ENV': '"server"'
      }),
  ]
}
