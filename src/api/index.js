import axios from 'axios'

//请求的地址
axios.defaults.baseURL = ''

//post请求的设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

//拦截请求器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})


/*请求的接口*/

export function upload(params) {
    return axios.post(`/sts/credentials/oss`, params)
}