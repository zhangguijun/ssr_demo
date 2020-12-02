/*
 * @description 
 * @fileName index.js
 * @author zh8
 * @date 2020/10/26 14:41:22
*/

require('@babel/register')({
  presets: [
    '@babel/preset-react',
    '@babel/preset-env'
  ]
})

require('./app.js')