import HomeStore from './home'

export { HomeStore }

export default {
  HomeStore
}

export const createStoreMap = ()=> ({
  HomeStore: new HomeStore()
})