// 在浏览器执行
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../Routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
const reducer = (state = { name: 'zhanghao' }, action) => {
  return state;
}
const store = createStore(reducer, applyMiddleware(thunk));
// 客户端路由配置
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    </Provider>

  )
}
// ReactDOM.render(<Home />, document.getElementById('root'))
ReactDOM.hydrate(<App />, document.getElementById('root'))