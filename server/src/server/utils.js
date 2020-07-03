import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
export const render = (req) => {
  const reducer = (state = { name: 'zhanghao' }, action) => {
    return state;
  }
  const store = createStore(reducer, applyMiddleware(thunk));
  const content = renderToString((
    <Provider store={store}>
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