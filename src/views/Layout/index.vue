<template>
    <div class="bigbox">
    

    <el-menu route default-active="1-4-1" class="el-menu-vertical-demo"  @close="handleClose" :collapse="isCollapse" text-color="#fff" collapse-transition="true">
      <img src="@/common/logo.png" class="logo" width="100%">
      <router-link to="/layout/dashboard">
      <el-menu-item index="1" >       
  <i class="el-icon-menu "></i>
    <span slot="title" >
      首页
    </span>
  </el-menu-item>
</router-link>
<router-link to="/layout/departments">
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title" >
     组织架构
    </span>
  </el-menu-item>
</router-link>
<router-link to="/layout/employees">
  <el-menu-item index="3">
    <i class="el-icon-menu"></i>
    <span slot="title">员工</span>
  </el-menu-item>
</router-link>
<router-link to="/layout/setting">
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">公司设置</span>
  </el-menu-item>
</router-link>
  <router-link to="/layout/permission">
  <el-menu-item index="5">
    <i class="el-icon-setting"></i>
    <span slot="title">权限设置</span>
  </el-menu-item>
</router-link>
  <router-link to="/layout/social">
  <el-menu-item index="6">
    <i class="el-icon-menu"></i>
    <span slot="title">社保</span>
  </el-menu-item>
</router-link>
  <router-link to="/layout/attendances">
  <el-menu-item index="7">
    <i class="el-icon-menu"></i>
    <span slot="title">考勤</span>
  </el-menu-item>
</router-link>
  <router-link to="/layout/salarys">
  <el-menu-item index="8">
    <i class="el-icon-menu"></i>
    <span slot="title">工资</span>
  </el-menu-item>
</router-link>
  <router-link to="/layout/apprmission">
  <el-menu-item index="9">
    <i class="el-icon-menu"></i>
    <span slot="title">审批</span>
  </el-menu-item>
</router-link>
</el-menu>
<el-menu 
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#4879FA"
  text-color="#fff"
  active-text-color="#ffd04b">
 
<el-menu-item class="el-icon-s-fold"  @click="isCollapse=!isCollapse"></el-menu-item>
<div class="heads">
  <span class="title">人力资源管理系统</span>
 <el-dropdown>
  <span class="el-dropdown-link">
    管理员<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>首页</el-dropdown-item>
    <el-dropdown-item>退出登录</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown>
</div>
<div class="main">
        <router-view></router-view>
    </div>
</el-menu>
</div>
</template>

<script>
   export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isCollapse: false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" scoped>
.bigbox{

    display: flex;
    width: 100%; 
    height: 100%; 
    .el-menu-demo{
        width: 100%;
        height: 50px;
      line-height: 50px;
    }
    .el-icon-s-fold{
  
      height: 50px;
    }
    .title{
      color: white;
    }
    .el-menu-vertical-demo{
      // width: 180px;
      height: 730px;
      z-index: 33;
      background-color: rgb(84,133,254);
      // el-menu-item {
      //   color: white!important;;
      // }
      align-items: center;
      .logo{
        margin-top: 5px;
      }
    }
    .heads{
      display: flex;
     justify-content: space-between;
     }
 
}
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
</style>