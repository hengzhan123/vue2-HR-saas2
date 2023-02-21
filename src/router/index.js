import Vue from "vue";
import VueRouter from "vue-router"
import layout from "@/views/Layout"
import dashboard from "@/views/dashboard"
import login from "@/views/login"
import departments from "@/views/departments"
import employees from "@/views/employees"
import setting from "@/views/setting"
import permission from "@/views/permission"
import social from "@/views/social"
import attendances from "@/views/attendances"
import salarys from "@/views/salarys"
import apprmission from "@/views/approvals"

Vue.use(VueRouter)
const routes=[
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
                component:dashboard
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
        path:"login",
        component:login
    }
]
const router=new VueRouter({
    routes,
    mode:"history"   //上线需要 服务器支持 否则找的是文件夹
  });
export default router