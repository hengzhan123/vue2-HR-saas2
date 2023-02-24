import Vue from "vue";
import VueRouter from "vue-router"
import layout from "@/views/Layout"
import dashboard from "@/views/dashboard"
import departments from "@/views/departments"
import employees from "@/views/employees"
import setting from "@/views/setting"
import permission from "@/views/permission"
import social from "@/views/social"
import attendances from "@/views/attendances"
import salarys from "@/views/salarys"
import apprmission from "@/views/approvals"
import Login from "@/views/login"
import falses from "@/views/404"
Vue.use(VueRouter)
const routes=[
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/',
        redirect:'/layout' 
    },
    {
        path:"/layout",
        component:layout,
        redirect:"/layout/dashboard",
        children:[
            {
                path:"dashboard",
                component:dashboard,
                // meta:{
                //     title:"首页"
                //  }
            },
            {
                path:"departments",
                component:departments
            },
            {
                path:"employees",
                component:employees
            },
            {
                path:"setting",
                component:setting
            },
            {
                path:"permission",
                component:permission
            },
            {
                path:"social",
                component:social
            },
            {
                path:"attendances",
                component:attendances
            },
            {
                path:"salarys",
                component:salarys
            },
            {
                path:"apprmission",
                component:apprmission
            },

        ]
    },
    {
        path:"/404",
        component:falses
    }
]

// const whiteList = ['/login','/404'] // 白名单

// router.beforeEach(async(to, from, next) => {
//   // start progress bar
//   NProgress.start()

//   // set page title
//   document.title = getPageTitle(to.meta.title)

//   // determine whether the user has logged in
//   const hasToken = getToken()

//   if (store.getters.token) {
//     if (to.path === '/login') {
//       // 如果当前为登录页，跳转首页
//       next('/')
     
//     } else {
  
//       if (!store.getters.userId) {

//           // get user info
//           await store.dispatch('user/getUserInfo')
//       }
//           next()
//     }
  
//   } else {
//     /* has no token*/

//     if (whiteList.indexOf(to.path) > -1) {
//       // in the free login whitelist, go directly
//       next()
//     } else {
//       // other pages that do not have permission to access are redirected to the login page.
//       next("/login")
//       NProgress.done()
//     }
//   }
// })

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })

const router=new VueRouter({
    routes,
    mode:"history"   //上线需要 服务器支持 否则找的是文件夹
  });
export default router