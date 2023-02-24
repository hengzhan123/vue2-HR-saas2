<template>
    <div class="bigbox">

    <el-menu route default-active="1-1" class="el-menu-vertical-demo"  @close="handleClose" :collapse="isCollapse"
     text-color="#fff"  active-text-color="#ffd04b" >
      <img src="@/common/logo.png" class="logo" width="90%">
      <router-link to="/layout/dashboard" >
      <el-menu-item index="1" >       
  <i class="el-icon-menu "></i>
    <span slot="title"  >
      首页
    </span>
  </el-menu-item>
</router-link>
<router-link to="/layout/departments">
  <el-menu-item index="2">
    <i class="el-icon-printer"></i>
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
<div class="navs">
  <el-menu 
 
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#5485FD"
  text-color="#fff"
  active-text-color="#ffd04b">
 
<el-menu-item class="el-icon-s-fold"  @click="isCollapse=!isCollapse">
</el-menu-item>
<div class="heads">
  <span class="title">人力资源管理系统</span>
 <div class="head-right">
  <i class="el-icon-search" style="margin-right: 15px;"></i>
  <i class="el-icon-rank" style="margin-right: 15px;"></i>
  <el-color-picker size="medium" style="margin:10px 15px 0px;"></el-color-picker>
  <el-dropdown>
  <span class="el-dropdown-link">
   <label>
    <img src="@/common/bigUserHeader.png" class="userImg"/>
    管理员<i class="el-icon-arrow-down el-icon--right"></i>
   </label>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item >首页</el-dropdown-item>
    <el-dropdown-item   @click="loginout">退出登录</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown>
 </div>
</div>
<div id="main">
        <router-view></router-view>
    </div>
</el-menu>
</div>
</div>
</template>

<script>
// import {mapGetters} from 'vuex'

   export default {
    data() {
      return {
        isCollapse: false
      };
    },
    // computed:{
    //   ...mapGetters(['name'])
    // },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      loginout(){
        
      }
    }
  }
</script>

<style lang="less" scoped>
.navs{
  position: relative;
  width: 100%;
}
body{
  margin: 0;
  padding: 0;
}
.bigbox{

  margin: 0;
  padding: 0;
    display: flex;
    width: 100%; 
    height: 100%; 
    .el-menu-demo{
      // position: absolute;
      // left: 0%;
       width: 100%;
        height: 50px;
      line-height: 50px;
      .heads{
        
      display: flex;
     justify-content: space-between;
     
     .head-right{
      height: 50px;
     padding:0px 10px;
     line-height: 50px;
    
      i{
        display:inline-block;
        width: 30px;
         
      }
     el-dropdown{
      padding:0px 0px;
    
     }
      }
     }
  //
    }
    .el-icon-s-fold{
      // margin-left: 200px;
      height: 50px;
    }
    .title{
      color: white;
    }
    .el-menu-vertical-demo{
    //  position: fixed;
     z-index: 11;
      height: 730px;
      background-color: rgb(84,133,254);
      // el-menu-item {
      //   color: white!important;;
      // }
      align-items: center;
    
      .logo{
        margin-top: 5px;
      }
    }
    
 

}
a {
  text-decoration: none;
}
i{
        color: #FFFF;
      }

      el-icon-menu:first-of-type{
        background-color: #fff;
      }

      .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 185px;
    min-height: 400px;
  }
 .userImg{
  width: 35px;
 }

</style>