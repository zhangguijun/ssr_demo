import Router from 'koa-router'
import { render } from './server/util'

const routers = new Router();

routers.get('*', (ctx, next) => {
  ctx.body = render(ctx)
  
  console.log(ctx)
  next()
})
export default routers