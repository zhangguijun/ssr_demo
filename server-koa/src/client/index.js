import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
// import getStore from '../store/store'
import { HomeStore } from '../store/store'
import { Provider } from 'mobx-react'
import routes from '../Routes'

//客户端路由配置
const App = () => {
  return (
    <Provider store={ new HomeStore()}>
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

ReactDOM.hydrate(<App />, document.getElementById('root'))
