import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/views/Layout";
import dashboard from "@/views/dashboard";
import departments from "@/views/departments";
import employees from "@/views/employees";
import setting from "@/views/setting";
import permission from "@/views/permission";
import social from "@/views/social";
import attendances from "@/views/attendances";
import salarys from "@/views/salarys";
import approvals from "@/views/approvals";
import Login from "@/views/login";
import falses from "@/views/404";
import security from "@/views/approvals/security";
import report from "@/views/attendances/report";
import archiving from "@/views/attendances/historical";
import myInfo from "@/views/users/info";
import detail from "@/views/employees/detail";
import importExcel from "@/views/import/index";
import socialhis from "@/views/social/Historical";
import reportforms from "@/views/social/ReportForms";
import setup from "@/views/salarys/SetUp";
import attimport from "@/views/attendances/components/att-import";
import viewSee from "@/views/approvals/viewSee";
import details from "@/views/social/Details";
Vue.use(VueRouter);
const routes = [
  // 登录
  {
    path: "/login",
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
        name: "dashboard",
        meta: {
          title: "首页",
        },
      },
      // 首页-个人信息
      {
        path: "myInfo",
        component: myInfo,
        name: "myInfo",
        hidden: true,
        meta: {
          title: "我的信息",
        },
      },
      {
        path: "departments",
        component: departments,
        name: "departments",
        meta: {
          title: "组织架构",
        },
      },
      {
        path: "employees",
        component: employees,
        name: "employees",
        meta: {
          title: "员工",
        },
      },
      // 员工-上传
      {
        path: "importExcel",
        component: importExcel,
        name: "importExcel",
        hidden: true,
        meta: {
          title: "员工上传",
        },
      },
      // 员工-查看
      {
        path: "detail",
        component: detail,
        name: "detail",
        hidden: true,
        meta: {
          title: "员工查看",
        },
      },
      {
        path: "setting",
        component: setting,
        name: "setting",
        meta: {
          title: "公司设置",
        },
      },
      {
        path: "permission",
        component: permission,
        name: "permission",
        meta: {
          title: "权限设置",
        },
      },
      {
        path: "social",
        component: social,
        name: "social",
        meta: {
          title: "社保",
        },
      },
      // 社保-历史归档
      {
        path: "socialhis",
        component: socialhis,
        name: "socialhis",
        hidden: true,
        meta: {
          title: "历史归档",
        },
      },
      // 社保-报表
      {
        path: "reportforms",
        component: reportforms,
        name: "reportforms",
        meta: {
          title: "报表",
        },
      },
      // 社保-员工详情
      {
        path: "details",
        component: details,
        name: "details",
        meta: {
          title: "社保-员工详情",
        },
      },
      {
        path: "attendances",
        component: attendances,
        name: "attendances",
        meta: {
          title: "考勤",
        },
      },
      {
        //考勤-月份报表
        path: "report/:month",
        component: report,
        name: "report",
        hidden: true,
        meta: {
          title: "月份报表",
        },
      },
      {
        //考勤- 历史归档
        path: "archiving",
        component: archiving,
        name: "archiving",
        hidden: true,
        meta: {
          title: "考勤-历史归档",
        },
      },
      // 考勤 -导入
      {
        path: "attimport",
        component: attimport,
      },
      {
        path: "salarys",
        component: salarys,
        name: "salarys",
        meta: {
          title: "工资",
        },
      },
      // 工资-设置
      {
        path: "setup",
        component: setup,
        name: "salarys",
        hidden: true,
        meta: {
          title: "工资设置",
        },
      },
      {
        path: "approvals",
        component: approvals,
        name: "approvals",
        meta: {
          title: "审批",
        },
      },
      // 审批-流程设置
      {
        path: "security",
        component: security,
        name: "security",
        hidden: true,
        meta: {
          title: "流程设置",
        },
      },
      // /审批-查看
      {
        path: "viewSee/:processId",
        component: viewSee,
        name: "viewSee",
        hidden: true,
        meta: {
          title: "查看",
        },
      },
      {
        path: "falses",
        component: falses,
        meta: {
          title: "404",
        },
      },
    ],
  },
  // 404页面
  {
    path: "/404",
    component: falses,
    meta: {
      title: "404",
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history", //上线需要 服务器支持 否则找的是文件夹
});
export default router;
