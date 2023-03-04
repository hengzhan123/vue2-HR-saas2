<template>
    <div class="bigbox">

    <el-menu route default-active="1" class="el-menu-vertical-demo"  @close="handleClose"
     :collapse="isCollapse" 
     text-color="#fff"  active-text-color="#5485FE" >
      <img src="@/assets/common/logo.png" class="logo" width="90%">
      <router-link to="/layout/dashboard" >
      <el-menu-item index="1" >       
  <i class="el-icon-tickets "></i>
    <span slot="title">
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
    <i class="el-icon-news"></i>
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
    <i class="el-icon-date"></i>
    <span slot="title">考勤</span>
  </el-menu-item>
</router-link>
  <router-link to="/layout/salarys">
  <el-menu-item index="8">
    <i class="el-icon-sold-out"></i>
    <span slot="title">工资</span>
  </el-menu-item>
</router-link>
  <router-link to="/layout/apprmission">
  <el-menu-item index="9">
    <i class="el-icon-edit-outline"></i>
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
 
<el-menu-item class="el-icon-s-fold"  @click="isCollapse=!isCollapse"
 
>
</el-menu-item>
<div class="heads">
  <span class="title">人力资源管理系统</span>

 <div class="head-right">
  <!-- 多语言切换 -->
  <!-- <el-tooltip  content="语言" placement="bottom" >
  <lang class="right-menu-item" />
</el-tooltip> -->
   <!-- 全屏 -->
   <el-tooltip  content="全屏" placement="bottom">
    <ScreenFull class="right-menu-item"/>
    </el-tooltip>
    <!--  切换主题组件 -->
   <el-tooltip  content="换肤" placement="bottom"  >
    <theme-picker class="right-menu-item"  style="margin-bottom: -5px !important;"/>
  </el-tooltip>
  <el-dropdown>
  <span class="el-dropdown-link">
   <label >
    <!-- <img src="@/assets/common/bigUserHeader.png" class="userImg"/> -->
    <img v-imagerror="defaultImg" :src="staffPhoto" class="userImg"/>

    <span class="name">{{ $store.getters.name }}<i class="el-icon-arrow-down el-icon--right"></i></span>
   </label>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item @click.native="goIndex">首页</el-dropdown-item>
    <!-- 注意：此组件点击事件需加 .native 生效 -->
    <el-dropdown-item   @click.native="loginout">退出登录</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown>
 </div>
</div>
<div id="main">
  <!-- tab导航标签 -->
  <!-- <tags-view/> -->
        <router-view></router-view>
    </div>
</el-menu>
</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

   export default {
    data() {
      return {
        color1:"#409EFF",
        isCollapse: false,
        titles:this.$route.meta.title,
        defaultImg: require('@/assets/common/head.jpg')
      };
    },
    computed:{
      ...mapGetters(['name','staffPhoto'])
    },
  created(){

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
      },
      goIndex(){
        this.$router.push('/')
        console.log(111);
      },
      // 退出账户
    loginout(){
      this.$confirm('确定退出？','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(async()=>{
        await this.$store.dispatch('user/logOutActions')
        this.$router.push('/login')
        // console.log(111);
      }).catch(()=>{
        
      })
       
      },
    
    }
  }
</script>

<style lang="less" scoped>
.navs{
  position: relative;
  width: 100%;
}
// 左侧导航菜单选择默认背景颜色
.el-menu-item.is-active{
  background-color: #fff;
}
// 左侧导航菜单移上变色
  li:hover{
 color: #5485FE !important;
    i{
      color: #5485FE !important;
    }
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
       align-items: center;
      display: flex;
     justify-content: space-between;
     
     .head-right{
     padding:0px 10px;
      // i{
      //   display:inline-block;
      //   width: 30px; 
      // }
      .right-menu-item{
        display:inline-block;
        width: 30px;
        height: 30px;
        line-height: 35px;
        text-align: center;
        margin: 0 2px;
      }
     el-dropdown{
      padding:0px 0px;
    
     }
      }
     }
  //
    }
    .el-icon-s-fold{
     
      height: 50px;
    }
    .title{
      color: white;
    }
    .el-menu-vertical-demo{
  
    //  position: fixed;
     z-index: 11;
      height: 830px;
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
.name{
  display: inline-block;
  margin-left: 2px;
  color: #fff;
  
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
    min-height: 700px;
  }
 .userImg{
  width: 35px;
  height: 35px;
  margin:0 3px;
  vertical-align: middle;
  margin-bottom: 5px;
  border-radius: 50%;
 }

</style>