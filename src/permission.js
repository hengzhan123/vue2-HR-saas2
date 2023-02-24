import router from './router'
import store from './store'


// 白名单数组
const whiteList = ['/login', '/404']

// 前置路由守卫
router.beforeEach(async(to, from, next) => {
  // 获取到 token
  const token = store.getters.token
  // 如果存在 token
  if (token) {
    if (to.path === '/login') {
      // 如果存在 token，访问的是登录页面，直接跳转到主页
      next('/')
  
    } else {
      // 如果存在 token，访问的是其他页面，直接放行
      next()
      if (!store.getters.userId) {
       await  store.dispatch('user/getUserInfoActions')
         }
         next()
    }
  } else {
    // 如果不存在 token，访问的是白名单内容，直接放行
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // 没有 token，且不是白名单页面，跳转到登录页面
      next('/login')
      
    }
  }
})


