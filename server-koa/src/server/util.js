import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'
import { Provider } from 'mobx-react'
// import getStore from '../store/store'
import { HomeStore } from '../store/store'

export const render = (req) => {
  const store = new HomeStore()
  // const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []
  // matchedRoutes.forEach((item) => {
  //   if (item.route.loadData) {
  //     promises.push(item.route.loadData(store))
  //   }
  // })
  Promise.all(promises).then(() => {
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter context={{}}>
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
    <title>ssr dome</title>
    <body>
      <div id='root'>${content}</div>
      <script type="text/javascript" src="/index.js"></script>
    </body>
    </html>
    `
  })

}
