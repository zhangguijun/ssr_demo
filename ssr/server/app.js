/*
 * @description server 入口配置文件
 * @fileName app.js
 * @author zh8
 * @date 2020/10/26 14:15:17
*/
import React from 'react';
import Koa from 'koa';

import { renderToString } from 'react-dom/server'

const app = new Koa();

const PORT = 9001;

const App = () => <div>Hello koa ssr</div>
app.use(ctx => {
  ctx.body = renderToString(<App />)
})

app.listen(PORT, () => {
  console.log(`node服务已经启动，请访问localhost:${PORT}`);
})