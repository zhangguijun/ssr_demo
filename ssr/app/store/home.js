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
}
