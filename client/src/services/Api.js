import axios from 'axios'
/* eslint-disable */
/**eslint-disable-next-line */
 export default () => {
     return axios.create({
         baseURL: 'http://localhost:8081/'
     })
 }