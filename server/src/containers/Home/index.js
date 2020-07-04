import React, { Component } from 'react';
// import Header from '../../components/Header'

import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

import styles from './style.less'
// const React = require('react')
// 同构 一套react 代码 在服务端执行一次，在客户端执行一次
class Home extends Component {
  componentWillMount() {

    if (this.props.staticContext) {
      // console.log(styles._getCss())
      this.props.staticContext.css = styles._getCss()
    }
    // console.log(this.props.staticContext)

  }
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }
  getList() {
    const { list } = this.props
    return list.map(item => (
      <div className='list-item' key={item.id}>
        <div className='list-item-left'>
          <img src={item.coverImgUrl} alt=""/>
        </div>
        <div className='list-item-right'>
          <p>{item.name}</p>
          <p>{item.trackCount}首</p>

        </div>
      </div>
    ))
  }
  render() {
    return (
      <div className={'box'}>
        {/* <Header /> */}
        <div>jjjjj</div>
        {
          this.getList()
        }
        <button onClick={() => { alert('11') }}>按钮</button>
      </div>
    )
  }
}
// const Home = (props) => {

// }
Home.loadData = (store) => {
  // 负责在服务端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList())
}
const mapStateToProps = state => (
  {
    list: state.home.playList
  }
)
const mapDispatchProps = dispatch => ({
  getHomeList() {
    console.log('11')
    dispatch(getHomeList())
  }
})
export default connect(mapStateToProps, mapDispatchProps)(Home)
