// const Koa = require('koa')
import Koa from 'koa';
import staticServer from 'koa-static'
import routes from '../koa-router'
const app = new Koa();

const PORT = 9000;
// app.use(staticServer(__dirname , '../public'))
app.use(staticServer(path.resolve(__dirname, 'public')));
app.use(routes.routes(), routes.allowedMethods())

app.listen(PORT, () => {
  console.log(`服务器已经启动，请访问http://localhost:${PORT}`)
})