/*
 * @description 数据存储
 * @fileName index.js
 * @author zh8
 * @date 2020/10/26 15:48:10
*/ 

import HomeStore from './home'

export { HomeStore }

export default {
  HomeStore
}

export const createStoreMap = ()=> ({
  HomeStore: new HomeStore()
})