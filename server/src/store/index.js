import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { reducer as homeReducer } from '../containers/Home/store';

import clientAxios from '../client/request';
import serverAxios from '../server/request'
const reducer = combineReducers({
  home: homeReducer
})
export const getStore = () => {
  // 服务器store

  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
}
export const getClientStore = () => {
  // 客户端store
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}



// export default getStore