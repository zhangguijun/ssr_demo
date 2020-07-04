import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/index'
import Login from './containers/Login/index'

export default [
  {
    path: '/',
    component: Home,
    exact: true, //精确匹配,
    loadData : Home.loadData,
    key: 'home',
  },
  {
    path: '/login',
    component: Login,
    exact: true, //精确匹配,
    // loadData : Home.loadData,
    key: 'login'
  }
]
// export default (
//   <div>
//     <Route path='/login' exact component={Login}></Route>
//   </div>
// )