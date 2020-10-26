/*
 * @description 公用项目webpack 配置
 * @fileName webpack.base.config.js
 * @author zh8
 * @date 2020/10/26 11:21:30
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { resolve } = require('../utils/index');

module.exports = {
  entry: resolve('app/main.js'),
  output: {
    path: resolve('dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // 只编译app文件夹下的文件
        include: resolve('app'),
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
        include: resolve('app'),
        loader: 'html-loader'
      },
      {
        test: /\.less/,
        include: resolve('app'),
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
      },


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