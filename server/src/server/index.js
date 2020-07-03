// const express = require('express')
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'
// 虚拟dom  =》 JavaScript 对象的映射
// 加快首屏渲染  利于seo
// 缺点 大量消耗服务器性能，浪费不必要的服务器性能
const app = express()
const port = 3000
app.use(express.static('public'))

// 服务器路由配置
app.get('/', (req, res) => {
  const content = renderToString((
    <StaticRouter context={{}} location={req.path}>
      {Routes}
    </StaticRouter>
  ))
  res.send(
    `
      <html>
      <title>ssr</title>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
      </html>
  `
  )
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))