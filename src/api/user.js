import request from '@/utils/request'

/*
  用户登录
 */
export function loginAPI(data) { 
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

/*
 获取用户资料
 */
export function getUserProfileAPI() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

/// 根据用户id获取用户的详情(头像)
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}


