
import axios from 'axios';

export const getHomeList = () => {
   return axios.get('http://localhost:4000/user/playlist?uid=131849896')
      .then((res) => {
        return res.data
  })
}
