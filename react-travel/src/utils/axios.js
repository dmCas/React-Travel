import axios from 'axios';
import { Toast } from 'antd-mobile';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' :''

// 跨域请求凭证
axios.defaults.withCredentials = false
axios.defaults.headers['X-Requested-with'] = 'XMLHttpRequest'

// axios请求是json形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

//相应拦截
axios.interceptors.response.use(res => {
  if(typeof res.data !== 'object') {
    Toast.fail('服务端异常！');
    return Promise.reject(res)
  }
  if(res.data.status !== 200){
    console.log(res)
    if (res.data.msg) Toast.fail(res.data.msg)
    return Promise.reject(res.data)
  }
  return res.data
})

export default axios