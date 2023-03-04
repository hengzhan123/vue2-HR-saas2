import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

// import "@/styles/index.scss"
import router from "@/router"
// 引入全局inco
import "@/icons"
import less from "less"
// 多语言
import i18n from '@/lang'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

// 自定义指令
import * as directives from '@/directives'
// 组件
import Components from '@/components'

import store from "@/store"
import "@/permission"
Vue.use(ElementUI)
Vue.use(less)

// Vue.use(SvgIcon)
// 
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

// 注册自定义指令
Object.keys(directives).forEach(key =>{
  Vue.directive(key,directives[key])
})
Vue.use(Components)//注册自己的插件
Vue.use(ElementUI, {
  // element本身支持i18n的处理
  // 此时 i18n就会根据当前的locale属性去寻找对应的显示内容
  i18n: (key, value) => i18n.t(key) // t方法 会去对应的语言包里寻找对应的内容
  // 改变locale的值 就可以改变对应的当前语言
})

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
