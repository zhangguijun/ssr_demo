/*
 * @description server 入口文件
 * @fileName app.js
 * @author zh8
 * @date 2020/11/23 17:02:21
*/

// const Koa = require('koa');
// const Router = require('koa-router');
// const app = new Koa();
// const route = new Router();


// const PORT = 9000;
// route.get('*', async (ctx, next) => {
//     ctx.body = '111'
// })
// // app.use(ctx => {
// //     ctx.body = '<div>Hello Koa<div/>'
// // })
// app.use(route.routes(), route.allowedMethods());
// app.listen(PORT, () => {
//     console.log(`node服务已经启动, 请访问localhost:${PORT}`)
// })

// jsx编译之后会用到React对象, 所以需要引入
import React from 'react';
import Koa from 'koa';
import { matchPath } from 'react-router-dom'
// import { renderToString } from "react-dom/server";
import apiRouter from './router/api'
// import demoRouter from './router/index'
// import template from './template'
import Router from 'koa-router'

import cors  from 'koa2-cors';
import koaStatic from 'koa-static';

import routerConfig from '../client/router'

import SSR from './ssr'

const app = new Koa();
const route = new Router();

const server = new SSR();
const PORT = 9000;
// const App = () => <div>Hello Koa SSR</div>

// 静态资源
app.use(
    koaStatic('./public')
  );
app.use(cors());
// app.use(template)
// 处理 路由渲染
route.get('*', async (ctx, next) => {
    // await render(ctx, template)
    //  匹配路由  
    const currentRoute = routerConfig.find(r => matchPath(ctx.request.url, r)) || routerConfig[0]

    const currentComponent = currentRoute && currentRoute.component

    const { getInitialProps } = currentComponent || {}
    let contextProps = {}
    if (getInitialProps && Array.isArray(getInitialProps)) {
        // 多个请求
        let ajaxs = []
        let ids = []

        getInitialProps.forEach(_ => {
            // ajaxs.push(_.ajax())
            // ids.push(_.id)
        })

        const response = await Promise.all(ajaxs)

        contextProps = {
            data: response
        }

    } else {
        // console.log(currentComponent)
        contextProps = {
            data: (getInitialProps && await getInitialProps()) || {}
        }
    }
    // console.log(contextProps)
    ctx.body = server.renderAPP(ctx, {
        ...contextProps
    })
    await next()
    // crx.body = 1
    // next();
})
app.use(route.routes(), route.allowedMethods());
// api 路由
app.use(apiRouter.routes(), apiRouter.allowedMethods());

// 页面
// app.use(demoRouter.routes(), demoRouter.allowedMethods());


app.listen(PORT, () => {
    console.log(`node服务已经启动, 请访问localhost:${PORT}`)
})

