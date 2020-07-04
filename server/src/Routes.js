import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/index'
import Login from './containers/Login/index'
import App from './app'
export default
  [{
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true, //精确匹配,
        loadData: Home.loadData,
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
  }]
