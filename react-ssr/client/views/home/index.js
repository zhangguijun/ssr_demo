/*
 * @description 首页
 * @fileName index.js
 * @author zh8
 * @date 2020/11/23 18:06:34
*/
import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { store: { HomeStore } } = this.props
    return (
      <div>
        <h1>{HomeStore.name}</h1>
        <Link to="/list">跳转列表页</Link>
      </div>
    );
  }
}
export default withRouter(
  inject('store')(
    observer(Index)
  )
);