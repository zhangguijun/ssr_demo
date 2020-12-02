/**
 * @description 工具函数文件
 */

const path = require('path');

exports.resolve = (...args) => path.join(__dirname, '..', ...args)