<template>
  <div class="bigbox">
    <el-menu
      route
      default-active=""
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#5485FE"
    >
      <img src="@/assets/common/logo.png" class="logo" width="90%" />
      <router-link to="/dashboard">
        <el-menu-item index="1">
          <i class="el-icon-tickets"></i>
          <span slot="title">
            {{ $t("route.dashboard") }}
          </span>
        </el-menu-item>
      </router-link>
      <router-link to="/departments">
        <el-menu-item index="2">
          <i class="el-icon-printer"></i>
          <span slot="title"> {{ $t("route.departments") }} </span>
        </el-menu-item>
      </router-link>
      <router-link to="/employees">
        <el-menu-item index="3">
          <i class="el-icon-news"></i>
          <span slot="title">{{ $t("route.employees") }}</span>
        </el-menu-item>
      </router-link>
      <router-link to="/setting">
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">{{ $t("route.setting") }}</span>
        </el-menu-item>
      </router-link>
      <router-link to="/permission">
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">{{ $t("route.permission") }}</span>
        </el-menu-item>
      </router-link>
      <router-link to="/social">
        <el-menu-item index="6">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ $t("route.social") }}</span>
        </el-menu-item>
      </router-link>
      <router-link to="/attendances">
        <el-menu-item index="7">
          <i class="el-icon-date"></i>
          <span slot="title">{{ $t("route.attendances") }}</span>
        </el-menu-item>
      </router-link>
      <router-link to="/salarys">
        <el-menu-item index="8">
          <i class="el-icon-sold-out"></i>
          <span slot="title">{{ $t("route.salarys") }}</span>
        </el-menu-item>
      </router-link>
      <router-link to="/approvals">
        <el-menu-item index="9">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">{{ $t("route.approvals") }}</span>
        </el-menu-item>
      </router-link>
    </el-menu>
    <div class="navs" :class="{ ss: isCollapse }">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#5485FD"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item class="el-icon-s-fold" @click="isCollapse = !isCollapse">
        </el-menu-item>
        <div class="heads">
          <span class="title">????????????????????????</span>

          <div class="head-right">
            <!-- ??????????????? -->
            <el-tooltip content="??????" placement="bottom">
              <lang class="right-menu-item" />
            </el-tooltip>
            <!-- ?????? -->
            <el-tooltip content="??????" placement="bottom">
              <ScreenFull class="right-menu-item" />
            </el-tooltip>
            <!--  ?????????????????? -->
            <el-tooltip content="??????" placement="bottom">
              <theme-picker
                class="right-menu-item"
                style="margin-bottom: -5px !important"
              />
            </el-tooltip>
            <el-dropdown>
              <span class="el-dropdown-link">
                <label>
                  <!-- <img src="@/assets/common/bigUserHeader.png" class="userImg"/> -->
                  <img
                    v-imagerror="defaultImg"
                    :src="staffPhoto"
                    class="userImg"
                  />

                  <span class="name"
                    >{{ $store.getters.name
                    }}<i class="el-icon-arrow-down el-icon--right"></i
                  ></span>
                </label>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="$router.push('/dashboard')"
                  >??????</el-dropdown-item
                >
                <!-- ???????????????????????????????????? .native ?????? -->
                <el-dropdown-item @click.native="loginout"
                  >????????????</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div id="main">
          <!-- tab???????????? -->
          <tags-view />
          <router-view></router-view>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      color1: "#409EFF",
      isCollapse: false,
      titles: this.$route.meta.title,
      defaultImg: require("@/assets/common/head.jpg"),
    };
  },
  computed: {
    ...mapGetters(["name", "staffPhoto"]),
  },
  created() {},
  methods: {
    // ????????????
    loginout() {
      this.$confirm("???????????????", "??????", {
        confirmButtonText: "??????",
        cancelButtonText: "??????",
        type: "warning",
      })
        .then(async () => {
          await this.$store.dispatch("user/logOutActions");
          this.$router.push("/login");
          // console.log(111);
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
#tags-view-container{
  margin-bottom: 30px;
}
.navs {
  width: 100%;
  margin-left: 184px;
  transition: all 0.32s linear;
}
#main {
  width: 100%;
  transition: all 0.32s linear;
}

.ss {
  margin-left: 64px;
  transition: all 0.13s linear;
}

// ??????????????????????????????????????????
.el-menu-item.is-active {
  background-color: #fff;
}

// ??????????????????????????????
li:hover {
  color: #5485fe !important;

  i {
    color: #5485fe !important;
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

    .heads {
      // margin-top: 7px;
      align-items: center;
      display: flex;
      justify-content: space-between;

      .head-right {
        padding: 0px 15px;

        .right-menu-item {
          display: inline-block;
          width: 30px;
          height: 30px;
          line-height: 35px;
          text-align: center;
          margin: 8px 5px;
        }
        el-dropdown {
          padding: 0px 0px;
        }
      }
    }
  }

  .el-icon-s-fold {
    height: 46px;
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
  margin-left: 2px;
  color: #fff;
}

a {
  text-decoration: none;
}

i {
  color: #ffff;
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
  height: 35px;
  margin: 0 5px;
  vertical-align: middle;
  margin-bottom: 5px;
  border-radius: 50%;
}
</style>
