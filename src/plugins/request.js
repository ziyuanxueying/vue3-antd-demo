import axios from "axios";
let baseURL = "/api/";
const service = axios.create({
  baseURL,
  timeout: 5000 // request timeout 
});
service.interceptors.request.use(
  config => {
    // 如果有token 就携带tokon
    let token = window.localStorage.getItem("accessToken");
    if (token) {
      config.headers.common.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error)
);
// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service