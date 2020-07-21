const path = require('path');
module.exports = {
  // webpack4 要区分 你打包的是线上环境还是测试环境 需要配置mode
  mode: 'development',
  entry: './src/client/index.js',
  output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
        // 检测文件类型
        test: /\.js?$/,
        loader: 'babel-loader',
        // 如果是在node_modules里面 我们不需要编译
        exclude: '/node_modules/',
        // 额外的配置项 options  正确的编译react babel-preset-react es2015/2017 stage-0
        // 打包的时候兼容最新的两个浏览器版本
        options: {
            presets: ['react', 'stage-0', ['env', {
                targets: {
                    browsers: ['last 2 versions']
                }
            }]]
        }
    }]
}
}
