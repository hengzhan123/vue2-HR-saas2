import Vue from "vue";
import VueRouter from "vue-router"
import layout from "@/views/Layout"
import dashboard from "@/views/dashboard"
import departments from "@/views/departments"
import employees from "@/views/employees"
import setting from "@/views/setting"
import permission from "@/views/permission"
import social from "@/views/social/index"
import attendances from "@/views/attendances"
import salarys from "@/views/salarys"
import apprmission from "@/views/approvals"
import Login from "@/views/login"
import falses from "@/views/404"

import historical from "@/views/social/Historical"
import reportforms from "@/views/social/ReportForms"
import setup from "@/views/salarys/SetUp"
import payrollreport from "@/views/salarys/PayrollReport"
import lookup from "@/views/salarys/LookUp"
import details from "@/views/social/Details"

Vue.use(VueRouter)
const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: "/404",
        component: falses
    },
    // {
    //     path: '/',
    //     redirect: '/layout'
    // },
    {
        path: "/",
        component: layout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                component: dashboard,
                // meta:{
                //     title:"首页"
                //  }
            },
            {
                path: "departments",
                component: departments
            },
            {
                path: "employees",
                component: employees
            },
            {
                path: "setting",
                component: setting
            },
            {
                path: "permission",
                component: permission
            },
            {
                path: "social",
                component: social,
            },
            {
                path:"historical",
                component:historical
            },
            {
                path: "reportforms",
                component: reportforms
            },
            {
                path: "details",
                component: details
            },
            {
                path: "attendances",
                component: attendances
            },
            {
                path: "salarys",
                component: salarys
            },
            {
                path: "setup",
                component: setup
            },
            {
                path: "payrollreport",
                component: payrollreport
            },
            {
                path: "lookup",
                component: lookup
            },
            {
                path: "apprmission",
                component: apprmission
            },

        ]
    },

]


const router = new VueRouter({
    routes,
    mode: "history"   //上线需要 服务器支持 否则找的是文件夹
});
export default router