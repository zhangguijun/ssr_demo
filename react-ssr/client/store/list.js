/*
 * @description List store
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
  @observable list = [
    'react真好玩',
    'koa有点意思',
    'ssr更有意思'
  ]
  constructor(props){
    // this.name =  props.HomeStore.name || ''
    this.list =  props.list.list
  }

}
