import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
// import getStore from '../store'
// import routes from '../Routes'
import { Provider } from 'react-redux'
export const render = ( store, routes, req ) => {
  // 拿到异步数据 填充到store中
  // store 填充 需要根据用户请求地址和路由做判断
  // 如果用户访问/ 就拿home组件异步数据
  // const store = getStore();
  // const matchedRoutes = matchRoutes(routes, req.path)
  // routes.some(route => {
  //   const match = matchPath(req.path, route)
  //   if(match){
  //     matchedRoutes.push(route)
  //   }
  // })
  // console.log(matchedRoutes)
  // const promises = []

  // matchedRoutes.forEach(item => {
  //   if (item.route.loadData) {
  //     promises.push(item.route.loadData(store))
  //   }
  //   // Promise
  // })

  // console.log(store.getState())
  // 执行loadData 获取数据填充到store
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        {/* {Routes} */}
        <div>
          {
            routes.map(route => (
              <Route {...route} />
            ))
          }
        </div>
      </StaticRouter>
    </Provider>
  ))
  return `
    <html>
      <head>
      </head>
      <title>ssr demo</title>
      <body>
        <div id="root">${content}</div>
        <script src='/index.js'></script>
      </body>
    </html>
  `
}