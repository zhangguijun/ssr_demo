import Router from 'koa-router';
import { matchPath } from 'react-router-dom'

// 公共路由配置表
import routerConfig from '../../client/route/router'

// ssr 配置
import SSR from '../ssr'
const server = new SSR();
const routes = new Router();

routes.get('*', async (ctx, next) => {
  // await render(ctx, template)
  //  匹配路由  
  const currentRoute = routerConfig.find(r => matchPath(ctx.request.url, r)) || routerConfig[0]
  const currentComponent = currentRoute && currentRoute.component;
  const { getInitialProps } =  await currentComponent.load() || {}
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
export default routes;