import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'
import getStore from '../store'
import { Provider } from 'react-redux'
export const render = (req) => {

  const content = renderToString((
    <Provider store={getStore()}>
      <StaticRouter context={{}} location={req.path}>
        {Routes}
      </StaticRouter>
    </Provider>
  ))
  return `
        <html>
        <title>ssr</title>
        <body>
          <div id="root">${content}</div>
          <script src="/index.js"></script>
        </body>
        </html>
  `
}