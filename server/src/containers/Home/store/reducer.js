import { CHANGE_HOME_LIST } from './constants'
const defaultState = {
  playList: [],
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_LIST:
      return {
        ...state,
        playList: action.list
      }
    default:
      return state
  }
} 