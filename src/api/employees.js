import request from '@/utils/request'

//获取员工-列表
export function getEmployeesListAPI(params) {
    return request({
        url: '/sys/user',
        params
    })
}

//获取员工基本

//添加员工
export function addEmployeeAPI(data) {
    return request({
        method: 'post',
        url: '/sys/user',
        data
    })
}

//保存员工信息
export function saveUserDetailByIdAPI(data) {
    return request({
        url: `/sys/user/${data.id}`,
        method: 'put',
        data: data
    })
}

//导入excel
export function importEmployeeAPI(data) {
    return request({
        url: '/sys/user/batch',
        method: 'post',
        data
    })
}