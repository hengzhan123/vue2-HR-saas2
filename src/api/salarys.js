import request from "@/utils/request"
// 获取工资列表
export function salarysAPI() {
  return request({
    url: '/salarys/list',
    method: 'post',
    // data
  }) 
}

// 获取计薪/津贴设置列表
export function settingsAPI(data) {
    return request({
      url: 'api/salarys/settings',
      method: 'get',
      // data
    }) 
}
// 提交计薪/津贴设置列表
export function settingsAPI2(data) {
  return request({
    url: 'api/salarys/settings',
    method: 'post',
    // data
  }) 
}

export function getSettingsAPI(id) {
  return request({
    url: `/salarys/modify/${id}`,
    method: 'post',
    // data
  }) 
}