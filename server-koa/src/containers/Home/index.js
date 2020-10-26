import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import store from '../../store/store';
// import './index.less'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.store.getPlayLst()
  }
  getList() {
    const { playList = [] } = this.props.store
    console.log(playList)
    return playList.map(item => (
      <div className='list-item' key={item.id}>
        <div className='list-item-left'>
          <img src={item.coverImgUrl} alt="" />
        </div>
        <div className='list-item-right'>
          <p>{item.name}</p>
          <p>{item.trackCount}首</p>

        </div>
      </div>
    ))
  }
  render() {
    console.log(this.props.store)
    return (
      <div>
        <Header />
        Home liessss 这是homehjhj  name: {this.props.store.name}

        {
         this.getList()
        }
      </div>
    )

  }
}
Home.loadData = (store) => {
  return store.getPlayLst()
}


export default withRouter(
  inject('store')(
    observer(Home)
  )
);