import React, { Component } from 'react';
// const React = require('react')
// 同构 一套react 代码 在服务端执行一次，在客户端执行一次
const Home = () => {
  return (
    <div>
      <div>jjjjj</div>
      <button onClick={() => { alert('11') }}>按钮</button>
    </div>
  )
}

export default Home
