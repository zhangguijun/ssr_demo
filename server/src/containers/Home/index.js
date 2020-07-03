import React, { } from 'react';
import Header from '../../components/Header'

import { connect } from 'react-redux'
// const React = require('react')
// 同构 一套react 代码 在服务端执行一次，在客户端执行一次
const Home = (props) => {
  return (
    <div>
      <Header />
      <div>jjjjj{props.name}</div>
      <button onClick={() => { alert('11') }}>按钮</button>
    </div>
  )
}
const mapStateToProps = state => (
  {
    name: state.name
  }
)
export default connect(mapStateToProps, null)(Home)
