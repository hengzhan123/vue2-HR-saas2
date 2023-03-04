import request from "@/utils/request"

// 获取考勤页面列表
export function getAttendancesAPI(params){
   return request({
    url:"/attendances",
    method:"get",
    params
   })  
}

// 编辑更新考勤记录
export function updateAttendanceAPI(data) {
   return request({
     url: `/attendances/${data.userId}`,
     method: 'put',
     data
   })
 }
// 获取月考勤报表数据
export function getReportsAPI(sid){
   return request({
      url:`attendances/reports?atteDate=${sid}`,
      method:'get'
   })
}
// 
export function reportsListAPI(params) {
   return request({
     url: '/attendances/reports',
     params
   })
 }

// 设置 - 考勤设置
export function getItemAPI(){
   return request({
      url:"/cfg/atte/item",
      method:"post"
   })
}
// 月份归档
export function fileAPI(params){
   return request({
      url:"/attendances/archives",
      get:'get',
      params
   })
}
// 新建报表
export function newReportsAPI(params){
   return request({
      url:"/attendances/newReports",
      method:"get",
      params
   })
}
// 归档历史列表
export function getArchivingListAPI(params) {
   return request({
     url: '/attendances/reports/year',
   //   method:"put",
     params
   })
 }
