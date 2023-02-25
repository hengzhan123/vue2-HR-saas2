import { getToken, setToken, removeToken } from '@/utils/auth'
import { loginAPI, getUserProfileAPI } from '@/api'

const getDefaultState = () => {
  return {
    token: getToken(), // 用户 Token，默认  为 ''
    userInfo: {}
  }
}
const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  // 设置token
  SET_TOKEN(state, token) {
    state.token = token
    // 同步缓存
    setToken(token)
  },
  // 删除token
  REMOVE_TOKEN(state) {
    state.token = ''
    removeToken()
  },
  // 设置用户信息
  SET_USER(state, value) {
    state.userInfo = value
  },
  // 删除用户信息
  REMOVE_USER(state) {
    state.userInfo = {}
  }
}

const actions = {
  // 登录逻辑-封装
  async loginActions(context,data) {
    // 调用api接口
    const result=await loginAPI(data)  //拿到token
    // console.log(result);
    // axios里有一层data                
    // if(result.data.success){
      // 为true ，则登录成功
      context.commit("SET_TOKEN",result.data)   //设置token
    // }
    // try {
    //   const res = await loginAPI(value)
    //   // 保存token到上面的vuex里
    //   commit('SET_TOKEN', res.data)
    //   // 逻辑页面还在接收数组, 外面写成功/失败的逻辑, 所以这里要把数组返回出去
    //   // return到actions调用的地方(login/index.vue)
    //   return res
    // } catch (err) {
    //   return Promise.reject(err)
    // }
  },
  // 获取用户-信息
  async getUserInfoActions(context){
    const result=await getUserProfileAPI()  //提交到mutations
    context.commit('SET_USER',result)
    return result
  },
  // 复杂写法
  // async getUserInfoActions({ commit }) {
  //   const { data: userObj } = await getUserProfileAPI() // 获取用户基本资料对象
  //   const { data: photoObj } = await getUserPhotoAPI(userObj.userId) // 获取用户头像等

  //   const newObj = { ...userObj, ...photoObj } // 合并一个信息非常全的对象
  //   commit('SET_USER', newObj) // 保存到vuex的userInfo对象上 -> 一会儿用调试工具查看
  // },
  // 退出登录
  async logOutActions(context) {
    context.commit('REMOVE_TOKEN')
    context.commit('RESET_STATE')
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
