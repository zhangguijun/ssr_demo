import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'mobx-react'
import getStore from '../store/store'
export const render = (req) => {
  const content = renderToString((
    <Provider store={getStore()}>
      <StaticRouter context={{}}>
        {Routes}
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
}
