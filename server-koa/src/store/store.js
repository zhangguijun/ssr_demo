import { observable, action } from 'mobx';

class GlobalStore {
  constructor() {
    this.state = observable({
      name: '张'
    })
  }
  updateStore(key, data) {
    this.state[key] = data;
  }
}

// export default new GlobalStore()
const getStore = () => {
  return new GlobalStore()
}

export default getStore