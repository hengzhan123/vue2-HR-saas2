// 导入封装的axios工具
import request from '@/utils/request';

// 获取权限
export function getPermissionAPI(){
    return request({
        url:"/sys/permission",
        method:"get",
    })
}





