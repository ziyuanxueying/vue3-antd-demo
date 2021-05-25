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
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        console.log(url, data)
        service
            .post(url, data)
            .then(response => {
                if (response && (response.code === 200 || response.code === '200')) {
                    // 返回成功处理  这里传的啥 后续调用的时候 res就是啥
                    resolve(response.data)
                } else {
                    // resolve(response.data)
                    // 错误处理
                    reject(response)

                    // Message.error(response.message || response.msg || '请求异常')
                }
            })
            .catch(err => {
                let message = '请求失败！请检查网络'
                if (err.response) message = err.response.data.msg || err.response.data.message
                // Message.error(message || '请求异常')
                reject(err)
            })
    })
}
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        service
            .get(url, { params: params })
            .then(res => {
                if (res && (res.code === 200 || res.code === '200')) {
                    // 返回成功处理  这里传的啥 后续调用的时候 res就是啥
                    resolve(res.data)
                } else {
                    // 错误处理
                    reject(res)
                    // Message.error(res.message || res.msg || '请求异常')
                }
            })
            .catch(err => {
                let message = '请求失败！请检查网络'
                if (err.response) message = err.response.data.msg || err.response.data.message
                // Message.error(message || '请求异常')
                reject(err)
            })
    })
}

export default service