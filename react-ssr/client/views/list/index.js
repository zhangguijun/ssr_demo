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
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { store: { HomeStore } } = this.props
    return (
      <div>
        <h1>{HomeStore.name}</h1>
        <ul>
        { HomeStore.list.length > 0 && HomeStore.list.map((item, i) => <li key={ i }>{ item }</li>) }
    </ul>
      </div>
    );
  }
}
export default withRouter(
  inject('store')(
    observer(List)
  )
);