<template>
  <div class="bigbox">

    <el-menu route default-active="1" class="el-menu-vertical-demo" @close="handleClose" :collapse="isCollapse"
      text-color="#fff" active-text-color="#5485FE">
      <img src="@/assets/common/logo.png" class="logo" width="90%">
      <router-link to="/layout/dashboard">
        <el-menu-item index="1">
          <i class="el-icon-tickets "></i>
          <span slot="title">
            首页
          </span>
        </el-menu-item>
      </router-link>
      <router-link to="/departments">
        <el-menu-item index="2">
          <i class="el-icon-printer"></i>
          <span slot="title">
            组织架构
          </span>
        </el-menu-item>
      </router-link>
      <router-link to="/employees">
        <el-menu-item index="3">
          <i class="el-icon-news"></i>
          <span slot="title">员工</span>
        </el-menu-item>
      </router-link>
      <router-link to="/setting">
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">公司设置</span>
        </el-menu-item>
      </router-link>
      <router-link to="/permission">
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">权限设置</span>
        </el-menu-item>
      </router-link>
      <router-link to="/social">
        <el-menu-item index="6">
          <i class="el-icon-menu"></i>
          <span slot="title">社保</span>
        </el-menu-item>
      </router-link>
      <router-link to="/attendances">
        <el-menu-item index="7">
          <i class="el-icon-date"></i>
          <span slot="title">考勤</span>
        </el-menu-item>
      </router-link>
      <router-link to="/salarys">
        <el-menu-item index="8">
          <i class="el-icon-sold-out"></i>
          <span slot="title">工资</span>
        </el-menu-item>
      </router-link>
      <router-link to="/apprmission">
        <el-menu-item index="9">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">审批</span>
        </el-menu-item>
      </router-link>
    </el-menu>
    <div class="navs" :class="{ ss: isCollapse }">
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#5485FD" text-color="#fff"
        active-text-color="#ffd04b">

        <el-menu-item class="el-icon-s-fold" @click="isCollapse = !isCollapse">
        </el-menu-item>
        <div class="heads">
          <span class="title">人力资源管理系统</span>
          <div class="head-right">
            <i class="el-icon-search" style="margin-right: 15px;"></i>
            <i class="el-icon-rank" style="margin-right: 15px;"></i>
            <el-color-picker size="medium" v-model="color1" style="margin: 0px 20px 0px 0px;"></el-color-picker>
            <el-dropdown>
              <span class="el-dropdown-link">
                <label>
                  <img src="@/assets/common/bigUserHeader.png" class="userImg" />
                  <span class="name">{{ $store.getters.name }}<i class="el-icon-arrow-down el-icon--right"></i></span>
                </label>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="goIndex">首页</el-dropdown-item>
                <!-- 注意：此组件点击事件需加 .native 生效 -->
                <el-dropdown-item @click.native="loginout">退出登录</el-dropdown-item>

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
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      color1: "#409EFF",
      isCollapse: false,
      titles: this.$route.meta.title
    };
  },
  computed: {
    ...mapGetters(['name'])
  },
  //  watch:{
  //   $route(){
  //     this.titles=this.$route.meta.title
  //   }
  //  },
  created() {

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
    goIndex() {
      this.$router.push('/')
      console.log(111);
    },
    // 退出账户
    loginout() {
      this.$confirm('确定退出？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await this.$store.dispatch('user/logOutActions')
        this.$router.push('/login')
        // console.log(111);
      }).catch(() => {

      })

    },

  }
}
</script>

<style lang="less" scoped>
.navs {
  width: 100%;
  margin-left: 184px;
  transition: all 0.40s linear;
}

.ss {
  margin-left: 64px;
  transition: all 0.13s linear;
}

// 左侧导航菜单选择默认背景颜色
.el-menu-item.is-active {
  background-color: #fff;
}

// 左侧导航菜单移上变色
li:hover {
  color: #5485FE !important;

  i {
    color: #5485FE !important;
  }
}

body {
  margin: 0;
  padding: 0;
}

.bigbox {
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  height: 100%;

  .el-menu-demo {

    width: 100%;
    height: 50px;
    // line-height: 50px;

    .heads {
      align-items: center;
      display: flex;
      justify-content: space-between;

      .head-right {
        padding: 0px 10px;

        i {
          display: inline-block;
          width: 30px;

        }

        el-dropdown {
          padding: 0px 0px;

        }
      }
    }

    //
  }

  .el-icon-s-fold {

    height: 50px;
  }

  .title {
    color: white;
  }

  .el-menu-vertical-demo {

    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    // transition:all 0.21s linear;
    z-index: 11;
    background-color: rgb(84, 133, 254);
    align-items: center;

    .logo {
      margin-top: 5px;
    }
  }
}

.name {
  display: inline-block;

}

a {
  text-decoration: none;
}

i {
  color: #FFFF;
}

el-icon-menu:first-of-type {
  background-color: #fff;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 185px;
  min-height: 700px;
}

.userImg {
  width: 35px;
  margin-right: 5px;
  vertical-align: middle;
}</style>