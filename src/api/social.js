import request from "@/utils/request"
// 获取社保列表
export function socialAPI(data) {
  return request({
    url: 'api/social_securitys/list', 
    method: 'post',
    data
  })
};

// 查询所有部门
export function departmentAPI() {
  return request({
    url: `api/company/department`,
    method: 'get',
  })
}

// 查询社保历史归档
export function historysAPI(params) {
  return request({
    url: `api/social_securitys/historys/${params.yearMonth}/list`,
    method: 'get',
    params
  })
};
export function historysAPI2(data) {
  return request({
    url: `api/social_securitys/historys/${data.month}?yearMonth=${data.yearMonth}&opType=2`,
    method: 'get',
    data
  })
};

// 查询月份数据报表
export function monthAPI(params){
  return request({
    url: `api/social_securitys/historys/202001?yearMonth=202001&opType=2`,
    method: 'get',
    params
  })
}

// 归档01月份报表
export function placeAPI(data){
  return request({
    url: `/api/social_securitys/historys/${data.yearMonth}/archive`,
    method: 'post',
    data
  })
}

// 获取社保员工详情
export function userAPI(params){
  return request({
    url: `api/social_securitys/${params.id}`,
    method: 'get',
    params
  })
}

// 查询参保城市的参保项目
export function citysAPI(params){
  return request({
    url: `api/social_securitys/payment_item/${params.id}`,
    method: 'get',
    params
  })
}

// 保存更新用户社保数据
export function updateUserAPI(data){
  return request({
    url: `api/social_securitys/payment_item/${data.id}`,
    method: 'put',
    data
  })
}