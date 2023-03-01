// 导入封装的axios工具
import request from '@/utils/request';

// 获取权限
export function getPermissionAPI(){
    return request({
        url:"/sys/permission",
        method:"get",
    })
}
// 根据id获取权限详情
export function getIdDetail(){
    return request({
        url:"/sys/permission/{id}",
        method:"get"
    })
}



