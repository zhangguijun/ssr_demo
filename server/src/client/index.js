// 在浏览器执行
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import Home from '../containers/Home/index'

// ReactDOM.render(<Home />, document.getElementById('root'))
ReactDOM.hydrate(<Home />, document.getElementById('root'))