/*
 * @description 工具函数库
 * @fileName index.js
 * @author zh8
 * @date 2020/10/26 11:17:18
*/

const path = require('path')

exports.resolve = (...args) => path.join(__dirname, '..', ...args)