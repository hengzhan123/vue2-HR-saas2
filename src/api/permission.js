// 导入封装的axios工具
import request from '@/utils/request';

// 获取权限列表
export function getPermissionAPI(){
    return request({
        url:"/sys/permission",
        method:"get",
    })
}
// 添加权限点
export function addPermissionAPI(data){
    return request({
        url:"/sys/permission",
        method:"post",
        data
    })
}
// 根据id获取权限详情
export function getIdDetailAPI(id){
    return request({
        url:`/sys/permission/${id}`,
        method:"get",
    })
}
// 根据id更新权限详情
export function updatePermissionAPI(data){
    return request({
        url:`/sys/permission/${data.id}`,
        method:'put',
        data
    })
}
// 根据id删除权限
export function delPermissionAPI(id){
    return request({
        url:`/sys/permission/${id}`,
        method:"DELETE"
    })
}

