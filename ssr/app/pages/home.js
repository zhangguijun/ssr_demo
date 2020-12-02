/*
 * @description 首页
 * @fileName home.js
 * @author zh8
 * @date 2020/10/26 15:54:53
*/

import { Link } from 'react-router-dom';
import React from 'react';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router-dom';

const Home = props => (
  <div>
    <h1>{props.store.name}</h1>
    <Link to="/list">跳转列表页</Link>
  </div>
)

export default withRouter(
  inject('store')(
    observer(Home)
  )
);