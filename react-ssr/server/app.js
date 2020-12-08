/*
 * @description server 入口文件
 * @fileName app.js
 * @author zh8
 * @date 2020/11/23 17:02:21
*/

import Koa from 'koa';
import cors  from 'koa2-cors';
import koaStatic from 'koa-static';

import apiRouter from './router/api'
import viewRouter from './router/index'

const app = new Koa();
const PORT = 9000;

// 静态资源
app.use(
    koaStatic('./public')
  );
// 解决跨域
app.use(cors());
// 处理 路由渲染

// 页面
app.use(viewRouter.routes(), viewRouter.allowedMethods());
// api 
app.use(apiRouter.routes(), apiRouter.allowedMethods());

app.listen(PORT, () => {
    console.log(`node服务已经启动, 请访问localhost:${PORT}`)
})

