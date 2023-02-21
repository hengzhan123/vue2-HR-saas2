import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import router from "@/router"
import less from "less"
Vue.use(ElementUI)
Vue.use(less)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
