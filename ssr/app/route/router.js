/*
 * @description 路由配置
 * @fileName router.js
 * @author zh8
 * @date 2020/10/26 14:49:27
*/

import { Link, Switch, Route } from 'react-router-dom';

import React from 'react'

const Home = () => (
  <div>
    <h1>首页</h1>
    <Link to='/list'>跳转</Link>
  </div>
)

const list = [
  'react',
  'koa',
  'ssr'
]

const List = () => (
  <ul>
    { list.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
)
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/list" component={List} />
  </Switch>
)

