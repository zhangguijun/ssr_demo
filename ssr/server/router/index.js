/*
 * @description 服务端路由配置
 * @fileName index.js
 * @author zh8
 * @date 2020/10/26 15:13:06
*/

import Router from 'koa-router'

import RouterConfig from '../../app/route/router'

import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import React from 'react'



const routes = new Router()

routes.get('/', (ctx, next) => {
  ctx.body = renderToString(
    <StaticRouter location={ctx.url}>
      <RouterConfig />
    </StaticRouter>
  )
  next()
})
routes.get('/list', (ctx, next) => {
  ctx.body = renderToString(
    <StaticRouter location={ctx.url}>
      <RouterConfig />
    </StaticRouter>
  )
  next()
})

export default routes