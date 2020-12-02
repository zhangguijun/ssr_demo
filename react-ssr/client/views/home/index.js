/*
 * @description 首页
 * @fileName index.js
 * @author zh8
 * @date 2020/11/23 18:06:34
*/
import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

import { toJS } from 'mobx'
import { Link, withRouter } from 'react-router-dom';
import { getData } from '../../api/index'
import style from  './index.less'
import  withStyle  from '../../component/withStyle'
import logo from '../../static/logo.png'
import LazyLoad from 'react-lazyload';
@inject("store")
@observer

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentWillMount(){
  //   if(style._getCss){
  //     console.log(style._getCss())
  //   }
  // }
  componentDidMount(){
    let { store: { HomeStore = {} } } = this.props
    if(Object.keys(HomeStore.data).length == 0){
      getData().then(res => {

        HomeStore.updateData(JSON.stringify(res))
      })
    }
  }
  // getInitialProps() {
  //   return getHomeList
  // }
  renderList = (list) =>{
    return(
      <div>
        {
          list.length > 0 && list.map(item => {
            return  <div className='list-item' key={item.id}>
            <div className='list-item-left'>
            <LazyLoad
                  // offset={100}
                  height={100}
                  placeholder={<img width="100%" height="100%" src={logo} alt="logo"/>}
                >
                  <img
                    src={item.coverImgUrl}
                    style={{ width: '100%' }}
                    alt=""
                  />
                </LazyLoad>
            </div>
            <div className='list-item-right'>
              <p>{item.name}</p>
              <p>{item.trackCount}首</p>
    
            </div>
          </div>
          })
        }
      </div>
    )
  }
  render() {
    let { store: { HomeStore = {} } } = this.props
    // console.log(toJS(HomeStore.data.playlist))
    return (
      <div className='index'>
        <h1>{HomeStore.name || ''}</h1>
        <Link to="/list">跳转列表页</Link>
        {this.renderList(toJS(HomeStore.data.playlist) || [])}
      </div>
    );
  }
}
// Index.getInitialProps = getData 
// export default withRouter(
//   inject('store')(
//     observer(
//       withStyle(Index)
//     )
//   )
// );

let NewIndex = withStyle(Index, style)
NewIndex.getInitialProps = getData 
export default NewIndex
