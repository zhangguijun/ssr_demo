import Router from 'koa-router'
import React from 'react';
import Home from './containers/Home/index';
import { renderToString } from 'react-dom/server'
const routers = new Router();
const content = renderToString(<Home />)
routers.get('/', (ctx, next) => {
  ctx.body =
  `
    <html>
      <title>ssr dome</title>
      <body>
        <div id='root'>${content}</div>
        <script type="text/javascript" src="/index.js"></script>
      </body>
    </html>
    `
    next()
})
export default routers