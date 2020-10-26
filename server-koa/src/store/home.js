

import {
  observable,
  action,
  toJS
} from 'mobx'

import { getHomeList } from '../containers/Home/api'

export default class HomeStore {
  @observable name = 'zhang';
  @observable playList = [];

  @action getPlayLst(){
    getHomeList().then(res => {
      this.playList = res.playlist;
    })
  }
}
