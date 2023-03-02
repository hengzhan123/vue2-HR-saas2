import request from "@/utils/request"
//根据id删除角色
export function DeleteRoleAPI(roleId) {
    return request({
        url: `/sys/role/${roleId}`,
        method: "delete"
    })
}
//根据id更新角色
export function updateRoleAPI(roleObj) {
    request({
        url: `/sys/role/${roleObj.id}`,
        method: "put",
        data: roleObj
    })
}
//根据id获取角色详情
export function RoledetailsAPI(roleId) {
    return request({
        url: `/sys/role/${roleId}`,

    })
}

//添加角色
export function addRolesAPI(data) {
    return request({
        url: "/sys/role",
        method: "post",
        data
    })
}
//给角色分配权限
export function assignPremAPI(data) {
    return request({
        url: `/sys/role/assignPrem`,
        method: "put",
        data
    })
}

//获取全部权限信息
export function PermissionsAPI() {
    return request({
        url: "/sys/permission",
    })
}


//获取所有角色列表
export function listRolesAPI(params) {
    return request({
        url: "/sys/role",
        params
    })
}
//保存企业数据
export const EnterpriseDateAPI = params => request({
    url: "/company",
    params
})
//查询全部企业
export const EnterpriseListAPI = params => request({
    url: "/company",
    params
})

//删除企业
export const deleteEnterpriseAPI = id => ({
    url: `/company?id=${id}`,
    method: "delete"
})

//更新企业
export const updateEnterpriseAPI = id => ({
    url: `/company?id=${id}`,
    method: "put"
})
//查询企业
export function InquireEnterpriseAPI(comanyId) {
    return request({
        url: `/company?id=${comanyId}`,
        method: "get"
    })
}