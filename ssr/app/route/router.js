/*
 * @description 路由配置
 * @fileName router.js
 * @author zh8
 * @date 2020/10/26 14:49:27
*/



import React from 'react'
import Home from '../pages/home'
import List from '../pages/list'
export default [
  {
      path: '/',
      component: Home,
      exact: true,
  },
  {
      path: '/list',
      component: List,
      exact: true,
  },
]