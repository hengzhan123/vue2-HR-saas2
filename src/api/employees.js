import request from '@/utils/request'

//获取员工-列表
export function getEmployeesListAPI(params) {
    return request({
        url: '/sys/user',
        params
    })
}

//获取员工基本信息
export function getDepartAPI(id) {
    return request({
        url: `/sys/user/${id}?id=${id}`
    })
}

//添加员工
export function addEmployeeAPI(data) {
    return request({
        method: 'post',
        url: '/sys/user',
        data
    })
}

//保存员工信息
// export function saveUserDetailByIdAPI(data) {
//     return request({
//         url: `/sys/user/${data.id}`,
//         method: 'put',
//         data: data
//     })
// }

//为员工分配角色
export function assignRolesAPI(data) {
    return request({
        url: '/sys/user/assignRoles',
        method: 'put',
        data
    })
}

//导入员工数据  excel 参数data是一个数组类型
export function importEmployeeAPI(data) {
    return request({
        url: '/sys/user/batch',
        method: 'post',
        data
    })
}

