// const express = require('express')
import express from 'express'

import { render } from './utils'

// 虚拟dom  =》 JavaScript 对象的映射
// 加快首屏渲染  利于seo
// 缺点 大量消耗服务器性能，浪费不必要的服务器性能

// 服务器渲染 只发生在 页面首次访问的时候，之后的路由跳转，就会被浏览器路由接管，不会在发生 服务器渲染
const app = express()
const port = 3000
app.use(express.static('public'))

// 服务器路由配置
app.get('*', (req, res) => {

  res.send(render(req))
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))