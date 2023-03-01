import request from '@/utils/request'

//组织架构 - 获取列表

export function departmentsListAPI() {
    return request({
        url: '/company/department'
    })
}

//组织架构 - 部门负责人列表数据

export function getEmployeeSimpleAPI() {
    return request({
        url: '/sys/user/simple'
    })
}

//组织架构 - 新增子部门
export function addDepartmentsAPI(data) {
    return request({
        url: '/company/department',
        method: 'post',
        data // 前端form表单的参数名, 直接和接口的对应, 这里可以少写很多属性名代码
    })
}

//组织架构 - 获取部门详情
export function getDepartDetailAPI(id) {
    return request({
        url: `/company/department/${id}`
    })
}

//组织架构 - 更新部门详情
export function updateDepartmentsAPI(data) {
    return request({
        url: `/company/department/${data.id}`,
        method: 'put',
        data
    })
}

//组织架构 - 删除部门
export function delDepartmentAPI(id) {
    return request({
        url: `/company/department/${id}`,
        method: 'delete'
    })
}