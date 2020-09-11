import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
const Home = (props) => {
  return (
    <div>
      <Header />
      Home liessss 这是homehjhj  name: {props.store.state.name}
    </div>
  )
}
export default withRouter(
  inject('store')(
    observer(Home)
  )
);