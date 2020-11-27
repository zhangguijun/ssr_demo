
import axios from 'axios';

// export const async getData = () => {
//    return axios.get('http://localhost:4000/user/playlist?uid=131849896')
//       .then((res) => {
//         return res.data
//   })
// }

export async function getData(){
   let res =  await axios.get('http://localhost:4000/user/playlist?uid=131849896')
  //  console.log(res.data)
   return res.data 
}