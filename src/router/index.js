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
import myInfo from "@/views/users/info"
import detail from "@/views/employees/detail"
import importExcel from "@/views/import"
import socialhis from "@/views/social/Historical";
import reportforms from "@/views/social/ReportForms";
import setup from "@/views/salarys/SetUp"
import attimport from "@/views/attendances/components/att-import"
import viewSee from "@/views/approvals/viewSee"
import details from "@/views/social/Details"
Vue.use(VueRouter);
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
        meta:{
            title:"首页"
         }
      },
      {
        path: "departments",
        component: departments,
        meta:{
          title:"组织架构"
       }
      },
      {
        path: "employees",
        component: employees,
        meta:{
          title:"员工"
       }
      },
      // 员工-查看
      {
        path: "detail",
        component: detail
      },
      {
        path: "setting",
        component: setting,
        meta:{
          title:"公司设置"
       }
      },
      {
        path: "permission",
        component: permission,
        meta:{
          title:"权限设置"
       }
      },
      {
        path: "social",
        component: social,
        meta:{
          title:"社保"
       }
      },
      // 社保-历史归档
      {
        path:"socialhis",
        component:socialhis
      },
      // 社保-报表
      {
        path:"reportforms",
        component:reportforms
      },
      // 社保-详情
      {
        path:"details",
        component:details
      },
      {
        path: "attendances",
        component: attendances,
        meta:{
          title:"考勤"
       }
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
      // 考勤 -导入
      {
        path:"attimport",
        component:attimport
      },
      {
        path:"salarys",
        component:salarys,
        meta:{
          title:'工资'
        }
      },
      // 工资-设置
      {
        path:"setup",
        component:setup
      },
      {
        path:"approvals",
        component:approvals,
        meta:{
          title:'审批'
        }
      },
      // 审批-流程设置
      {
        path:"security",
        component:security,
      },
      // 审批-查看
      {
        path:"viewSee/:processId",
        component:viewSee
      },
            // 个人信息
            {
              path: "myInfo",
              component:myInfo,
              name: 'myInfo',
              meta: {
                title: '我的信息'
              }
            },
          //  上传
          {
            path:"importExcel",
            component:importExcel
          }
    ],
  },
  // 404页面
  {
    path:"/404",
    component:falses,
    meta:{
      title:"404"
    }
   },
];


const router = new VueRouter({
  routes,
  mode: "history"   //上线需要 服务器支持 否则找的是文件夹
});
export default router