/*
 * @description list 
 * @fileName list.js
 * @author zh8
 * @date 2020/10/26 15:56:44
*/
import React from 'react';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router-dom';

const List = props => (
  <ul>
    { props.store.list.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
)

export default withRouter(
  inject('store')(
    observer(List)
  )
);
