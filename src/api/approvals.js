import request from '@/utils/request'

// 离职
export function startProcess(data) {
  return request({
    url: `/user/process/startProcess`,
    data,
    method: 'post'
  })
}

// 更新用户信息
export function updateUser(data) {
  return request({
    url: `/sys/user/${data.id}`,
    method: 'put',
    data
  })
}
