import request from '@/utils/request'

/*
  用户登录
 */
export function loginAPI(data) { 
  return request({
    url: 'api/sys/login',
    method: 'post',
    data
  })
}

/*
 获取用户资料
 */
export function getUserProfileAPI() {
  return request({
    url: 'api/sys/profile',
    method: 'post'
  })
}


