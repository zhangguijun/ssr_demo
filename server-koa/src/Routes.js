import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home'
import Login from './containers/Login'
// export default (
//   <div>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={Login}></Route>
//   </div>
// )

export default [
  {
    path: '/',
    component: Home,
    exact: true, //精确匹配,
    // loadData : Home.loadData,
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
