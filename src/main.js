import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
// import "@/styles/index.scss"
import router from "@/router"
import "@/icons"
import less from "less"

import store from "@/store"
import "@/permission"
Vue.use(ElementUI)
Vue.use(less)

// Vue.use(SvgIcon)
// 

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
