/*
 * @description 数据存储
 * @fileName index.js
 * @author zh8
 * @date 2020/11/23 17:58:34
*/

import HomeStore from './home';
import ListStore from './list';

export { HomeStore, ListStore }

export default {
  HomeStore,
  ListStore
}

// export const createStoreMap = ( data = {}) => ({
//   HomeStore: new HomeStore(data)
// })
export const createStoreMap = (data = {}) => {
  let store = {
    HomeStore: new HomeStore(data)
  }
  return store
}