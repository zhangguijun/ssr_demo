import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import getStore from '../store/store'
import { Provider } from 'mobx-react'
import Routes from '../Routes'

//客户端路由配置
const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('root'))
