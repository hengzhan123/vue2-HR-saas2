const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,   //钥匙
  // avatar: state => state.user.avatar,  //返回用户头像
  name: state => state.user.userInfo.username, // 返回用户名
  userId: state => state.user.userInfo.userId,
  comanyId: state => state.user.userInfo.companyId,
}
export default getters 
