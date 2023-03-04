import request from "@/utils/request"

//申请列表
export function applicationsListAPI(data) {
    return request({
        url: `/user/process/instance/${data.page}/${data.pagesize}`,
        method: "put",
        data
    })
}

//所有流程定义
export function definitionAPI() {
    return request({
        url: '/user/process/definition'
    })
}
//设置流程
export function suspendAPI(params) {
    return request({
        url: `/user/process/suspend/${params.processKey}`,
        params
    })
}
//审批明细
export function DetailsAPI(id) {
    return request({
        url: `/user/process/instance/tasks/${id}`,

    })
}
//审批数据详情
export function DetailAPT(id) {
    return request({
        url: `/user/process/instance/${id}`,

})
}
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

 