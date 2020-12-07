import fs from 'fs';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import RouterConfig from '../../client/router'
import React from 'react';
import path from 'path';
import { Provider } from 'mobx-react'

import { createStoreMap } from '../../client/store/index'
import { renderRoutes } from 'react-router-config'
import { template } from '@babel/core';
// 匹配模板中的{{}}
function templating(props) {
    const template = fs.readFileSync(path.join(__dirname, '../template/server.html'), 'utf-8');
    return template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()]);
}
// function templating(template) {
//     return props => template.replace(/<!--([\s\S]*?)-->/g, (_, key) => props[key.trim()]);
// }

export default function (ctx, template) {
    try {
        // const render = templating(template)
        const store = createStoreMap() 
        const html = renderToString(
            <Provider store = { store }>
                <StaticRouter location={ctx.url}>
                    { renderRoutes(RouterConfig) }
                </StaticRouter>
            </Provider>

        );
        // const body = render({
        //     html
        //     // store: `<script>window.__STORE__ = ${JSON.stringify(data, null, 4)}</script>`,
        // })
        console.log(html)
        const data = {}
        const body = templating({
            html,
            store: JSON.stringify(data, null, 4),
        });
        ctx.body = body;
        ctx.type = 'text/html'
        // ctx.render = (data = {}) => {
        //     const store = createStoreMap(data);
        //     // console.log(store)

        //     const body = templating({
        //         html,
        //         store: JSON.stringify(data, null, 4),
        //     });
        //     ctx.body = body;
        // }
    }
    catch (err) {
        ctx.body = err.message;
        ctx.type = 'text/html';
    }
    // ctx.type = 'text/html';
    // 这里必须是return next() 不然异步路由是404
    // return next();
}
