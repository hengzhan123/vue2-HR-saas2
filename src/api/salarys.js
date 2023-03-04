import request from "@/utils/request"

// 查询所有部门
export function departmentAPI() {
  return request({
    url: `api/company/department`,
    method: 'get',
  })
}

// 获取工资列表
export function salarysAPI(data) {
  return request({
    url: 'api/salarys/list',
    method: 'post',
    data
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
export function submitSettingsAPI(data) {
  return request({
    url: `api/salarys/settings`,
    method: 'post',
    data
  })
}

// 获取调薪
export function modifyAPI(data) {
  return request({
    url: `api/salarys/modify/${data.id}`,
    method: 'get',
    data
  })
}

// 设置定薪
export function salarysInitAPI(data) {
  return request({
    url: `api/salarys/init/${data.userId}`,
    method: 'post',
    data
  })
}

// 获取查看薪资补贴
export function lookOverAPI(data) {
  return request({
    url: 'api/salarys/settings',
    method: 'get',
    data
  })
}

// 查询用户薪资
export function userSalarysAPI(params) {
  return request({
    url: `api/sys/user/${params.id}`,
    method: 'get',
    params
  })
}

// 获取工资报表
export function reportsAPI(params) {
  return request({
    url: `salarys/reports/opType=1${params.yearMonth}`,
    method: 'get',
    params
  })
}

export function getSettingsAPI(id) {
  return request({
    url: `/salarys/modify/${id}`,
    method: 'post',
    // data
  }) 
}