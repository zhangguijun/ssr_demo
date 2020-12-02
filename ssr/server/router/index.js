/*
 * @description 服务端路由配置
 * @fileName index.js
 * @author zh8
 * @date 2020/10/26 15:13:06
*/

import Router from 'koa-router'

// import RouterConfig from '../../app/route/router'

// import { StaticRouter } from 'react-router-dom'
// import { renderToString } from 'react-dom/server'
// import React from 'react'

const router = new Router()
/**
 *  staticRouter 跟BrowserRouter 作用一样
 *  在浏览器上我们可以使用js获取到location，
 * 但是在node环境却获取不到，所以react-router提供了StaticRouter来让我们自己设置location
 */

// routes.get('/', (ctx, next) => {
//     ctx.render();
//     next();
// })

// routes.get('/list', (ctx, next) => {
//     ctx.render();
//     next();
// })

// export default routes;
// router.get('/api/list', HomeControl.list);
router.get('*', async (ctx, next) => {
    await render(ctx, template);
    next();
})
