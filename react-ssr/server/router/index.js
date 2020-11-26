import Router from 'koa-router';
// import RouterConfig from '../../client/router';
// import { StaticRouter } from 'react-router-dom';
// import { renderToString } from "react-dom/server";
import React from 'react';
import router from '../../client/router';
// import template from '../template';

const routes = new Router();

import render from '../template'
// routes.get('/', (ctx, next) => {
//     // ctx.body = renderToString(
//     //     <StaticRouter location={ctx.url}>
//     //         <RouterConfig/>
//     //     </StaticRouter>
//     // )
//     ctx.render(
//         {
//             data: {
//                 name: '涨'
//             }
//         }
//     )
//     next();
// })

// routes.get('/list',  (ctx, next) => {
//     // ctx.body = renderToString(
//     //     <StaticRouter location={ctx.url}>
//     //         <RouterConfig/>
//     //     </StaticRouter>
//     // )
//     ctx.render({
//         data: {
//             list: [
//                 '我是从node中获取的数据',
//                 '感觉还不错',
//                 '测试成功',
//             ]
//         }
//     })
//     next();
// })

routes.get('/', async (ctx, next) => {
    await render(ctx, template)
    next();
})
export default routes;
