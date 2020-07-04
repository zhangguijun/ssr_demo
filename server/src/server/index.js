// const express = require('express')
import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'
import { render } from './utils'
import { getStore } from '../store'
// 虚拟dom  =》 JavaScript 对象的映射
// 加快首屏渲染  利于seo
// 缺点 大量消耗服务器性能，浪费不必要的服务器性能

// 服务器渲染 只发生在 页面首次访问的时候，之后的路由跳转，就会被浏览器路由接管，不会在发生 服务器渲染
const app = express()
const port = 3000
app.use(express.static('public'))
// 当访问 /api 路由时代理到指定服务器地址
app.use('/api', proxy('http://localhost:4000', {
  proxyReqPathResolver: function(req) {
    console.log(req.url) 
    return '' + req.url
  }
}))
// 服务器路由配置
app.get('*', (req, res) => {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })
  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  })

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))