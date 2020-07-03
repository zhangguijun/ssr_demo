import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'
export const render = ( req ) => {
  const content = renderToString((
    <StaticRouter context={{}} location={req.path}>
      {Routes}
    </StaticRouter>
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