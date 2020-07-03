// 在浏览器执行
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../Routes'

// 客户端路由配置
const App = () => {
  return (
    <BrowserRouter>
      { Routes }
    </BrowserRouter>
  )
}
// ReactDOM.render(<Home />, document.getElementById('root'))
ReactDOM.hydrate(<App />, document.getElementById('root'))