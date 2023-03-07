import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'

const service = axios.create({
  // 基地址    process.env是nodejs内置的固定环境变量对象 区分开发和上线打包
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    const token = store.getters.token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config  //返回值
  }, 
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    const { success, message } = response.data
    // 根据success成功失败来决定执行步骤
    if (success) {
      return response.data
    } else {
      Message.error(message) // http状态码2xx, 但是逻辑错误
      return Promise.reject(new Error(message)) // 返回Promise错误的对象, 等同reject() -> 自己根据success字段判断逻辑错误(账号密码错误)
    }
  },
  error => {
    Message.error(error.response.data.message)  //提示错误信息
    if (error.response && error.response.data && error.response.data.code === 10002) {
      store.dispatch('user/logOutActions')
      router.replace('/login')
    }
    return Promise.reject(error)
  }
)

export default service
