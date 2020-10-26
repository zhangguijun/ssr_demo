/*
 * @description 入口文件
 * @fileName main.js
 * @author zh8
 * @date 2020/10/26 11:41:28
*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import Router from './route/router'
import './style/index.less'

// function App(){
//   return <div>hello react</div>
// }

render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  , document.getElementById('app'))