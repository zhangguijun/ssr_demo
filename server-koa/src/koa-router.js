import Router from 'koa-router'
import { render } from './server/util'

const routers = new Router();

routers.get('/', (ctx, next) => {
  ctx.body = render(ctx)
  
  console.log(ctx)
  next()
})
routers.get('/login', (ctx, next) => {
  ctx.body = render(ctx)
  next()
})
export default routers