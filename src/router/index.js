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
import viewSee from "@/views/approvals/viewSee"
import attimport from "@/views/attendances/components/att-import.vue"
import importExcel from "@/views/import"

Vue.use(VueRouter)
const routes = [
  // 登录
  {
    path: '/login',
    component: Login,
  },
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
        component: attendances,
      },
      {
        //考勤-月份报表
        path: "report/:month",
        component: report,
        meta: {
          title: "月份报表",
        },
      },
      {
        //考勤- 历史归档
        path: "archiving",
        component: archiving,
        meta: {
          title: "历史归档",
        },
      },
      {
        // 考勤-导入
        path: "attimport",
        component: attimport,
        meta: {
          title: "导入模块"
        }
      },
      {
        // 审批- 流程设置
        path: "security",
        component: security,
        meta: {
          title: "流程设置",
        },
      },
      {
        // 审批
        path: "viewSee/:processId",
        component: viewSee,
      },
      // 导入模块
      {
        path: "importExcel",
        component: importExcel
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
]


const router = new VueRouter({
  routes,
  mode: "history"   //上线需要 服务器支持 否则找的是文件夹
});
export default router