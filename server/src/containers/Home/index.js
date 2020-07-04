import React, { Component } from 'react';
import Header from '../../components/Header'

import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
// const React = require('react')
// 同构 一套react 代码 在服务端执行一次，在客户端执行一次
class Home extends Component {
  componentDidMount() {
    if(!this.props.list.length){
      this.props.getHomList(false)
    }
  }
  getList() {
    const { list } = this.props
    return list.map(item => <div key={item.id}>{item.name}</div>)
  }
  render() {
    return (
      <div>
        <Header />
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
  return store.dispatch(getHomeList(true))
}
const mapStateToProps = state => (
  {
    list: state.home.playList
  }
)
const mapDispatchProps = dispatch => ({
  getHomList() {
    console.log('11')
    dispatch(getHomeList())
  }
})
export default connect(mapStateToProps, mapDispatchProps)(Home)
