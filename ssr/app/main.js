/*
 * @description 入口文件
 * @fileName main.js
 * @author zh8
 * @date 2020/10/26 11:41:28
*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Router from './route/router'
import './style/index.less'
import { HomeStore } from '../app/store/index'

// function App(){
//   return <div>hello react</div>
// }
 

render(
  <Provider store={new HomeStore()}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>

  , document.getElementById('app'))