// 在浏览器执行
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import routes from '../Routes'
import getStore from '../store'
import { Provider } from 'react-redux'


// 客户端路由配置
const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        {/* {Routes} */}
        <div>
          {
            routes.map(route => (
              <Route {...route} />
            ))
          }
        </div>

      </BrowserRouter>
    </Provider>

  )
}
// ReactDOM.render(<Home />, document.getElementById('root'))
ReactDOM.hydrate(<App />, document.getElementById('root'))