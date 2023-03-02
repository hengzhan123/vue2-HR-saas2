import Vue from "vue";
import VueRouter from "vue-router"
import layout from "@/views/Layout"
import dashboard from "@/views/dashboard"
import departments from "@/views/departments"
import employees from "@/views/employees"
import detail from "@/views/employees/detail"
import setting from "@/views/setting"
import permission from "@/views/permission"
import social from "@/views/social"
import attendances from "@/views/attendances"
import salarys from "@/views/salarys"
import apprmission from "@/views/approvals"
import Login from "@/views/login"
import falses from "@/views/404"
import security from "@/views/approvals/security";
import report from "@/views/attendances/report";
import archiving from "@/views/attendances/historical";

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
  //   path: '/',
  //   redirect: '/layout'
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
        path: "detail",
        component: detail
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
        component: social
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
        path: "apprmission",
        component: apprmission
      },

    ]
  },


  {
    // 审批
    path: "security",
    component: security,
    meta: {
      title: "流程设置",
    },
  },

  {
    //考勤
    path: "report",
    component: report,
    meta: {
      title: "月份报表",
    },
  },
  {
    //考勤
    path: "archiving",
    component: archiving,
    meta: {
      title: "历史归档",
    },
  },
]



const router = new VueRouter({
  routes,
  mode: "history"   //上线需要 服务器支持 否则找的是文件夹
});
export default router