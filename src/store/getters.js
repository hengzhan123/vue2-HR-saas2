const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,   //钥匙
  // avatar: state => state.user.avatar,  //返回用户头像
  name: state => state.user.userInfo.username, // 返回用户名
  userId: state => state.user.userInfo.userId,
  staffPhoto: state => state.user.userInfo.staffPhoto, // 建立用户头像的映像
  comanyId: state => state.user.userInfo.companyId,
  depts:state=>state.attendances.departmentsList,
  tableList:state=>state.attendances.tableDataList,
  yuefen:state=>state.attendances.yuefen,
  count:state=>state.attendances.count,
}
export default getters 
