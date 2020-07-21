// const Koa = require('koa')
import Koa from 'koa';
import routes from './koa-router'
const app = new Koa();

const PORT = 9000;


app.use(routes.routes(), routes.allowedMethods())

app.listen(PORT, () => {
  console.log(`服务器已经启动，请访问http://localhost:${PORT}`)
})