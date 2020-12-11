/*
 * @description 首页store
 * @fileName home.js
 * @author zh8
 * @date 2020/11/23 17:55:00
*/
import {
  observable,
  action,
  toJS
} from 'mobx'

export default class HomeStore {

  @observable name = 'zhang';
  @observable playList = [];
  @observable list = [
    'react真好玩',
    'koa有点意思',
    'ssr更有意思'
  ]
  @observable data = {}
  constructor(props) {
    // this.name =  props.HomeStore.name || ''
    // this.list = props && props.data && props.data.list || [];
    this.name = props && props.data && props.data.name || '涨' ;
    Object.assign(this, props)
  }

  @action uploadList(list = []) {
    this.list = list
  }
  @action uploadPlayList(list = []) {
    this.playList = list
  }
  @action updateData (data = {}){
    // console.log(JSON.parse(data), '打断点')

    this.data = Object.assign({}, JSON.parse(data))
  }

  toJs() {
    return {
      name: this.name,
      list: this.list,
      data: this.data
    };
  }


}
