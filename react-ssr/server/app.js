/*
 * @description server 入口文件
 * @fileName app.js
 * @author zh8
 * @date 2020/11/23 17:02:21
*/ 

// const Koa = require('koa');

// const app = new Koa();

// const PORT = 9000;
// app.use(ctx => {
//     ctx.body = '<div>Hello Koa<div/>'
// })

// app.listen(PORT, () => {
//     console.log(`node服务已经启动, 请访问localhost:${PORT}`)
// })

// jsx编译之后会用到React对象, 所以需要引入
import React from 'react';
import Koa from 'koa';
// import { renderToString } from "react-dom/server";
import demoRouter from './router/index'
import template from './template'

const app = new Koa();
const PORT = 9000;
// const App = () => <div>Hello Koa SSR</div>

app.use(template)

app.use(demoRouter.routes(), demoRouter.allowedMethods());

app.listen(PORT, () => {
    console.log(`node服务已经启动, 请访问localhost:${PORT}`)
})

