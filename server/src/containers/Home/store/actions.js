import axios from 'axios';
import { CHANGE_HOME_LIST } from './constants'
const changeList = (list) => ({
  type: CHANGE_HOME_LIST,
  list
})
export const getHomeList = () => {
  return (dispatch) => {
   return axios.get('http://localhost:4000/user/playlist?uid=131849896')
      .then((res) => {
        console.log(res)
        const list = res.data.playlist
        console.log(list)
        dispatch(changeList(list))
  })
}
}