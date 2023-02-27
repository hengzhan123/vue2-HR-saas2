<template>
  <div class="home">
    <!-- 头部 -->
    <el-card class="header-card">
      <div class="header-box">
        <div class="header-imgBox">
          <!-- <div> -->
          <img src="@/assets/common/head.jpg" alt="" />
          <!-- </div> -->
        </div>
        <div class="header-imgBoxRight">
          <!-- <div> -->
          <p>早安，管理员，祝你开心每一天！</p>
          <p>管理员 | 中兴南昌-总裁办</p>
          <!-- </div> -->
        </div>
      </div>
    </el-card>
    <!-- 主要内容 -->
    <div class="main">
      <div class="main-box">
        <!-- 左侧 -->
        <div class="main-l">
          <!-- 日历 -->
          <el-card class="date">
            <div class="date-top">
              <p>工作日历</p>
            </div>
            
            <!-- 日历组件 -->
            <div class="date-main" type="flex" content>
              <workdayCalendar></workdayCalendar>
            </div>
          </el-card>

          <!-- 公告 -->
          <el-card class="advContent-box">
            <div class="advContent">
              <div class="title">公告</div>
              <div class="content">
                <ul class="noticeList">
                  <li>
                    <div class="item">
                      <img src="@/assets/common/img.jpeg" alt="" />
                      <div>
                        <p>
                          <span class="name">朱继柳</span> 发布了
                          第1期“传智大讲堂”互动讨论获奖名单公布
                        </p>
                        <p>2018-07-21 15:21:38</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item">
                      <img src="@/assets/common/img.jpeg" alt="" />
                      <div>
                        <p>
                          <span class="name">朱继柳</span> 发布了
                          第2期“传智大讲堂”互动讨论获奖名单公布
                        </p>
                        <p>2018-07-21 15:21:38</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item">
                      <img src="@/assets/common/img.jpeg" alt="" />
                      <div>
                        <p>
                          <span class="name">朱继柳</span> 发布了
                          第3期“传智大讲堂”互动讨论获奖名单公布
                        </p>
                        <p>2018-07-21 15:21:38</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </el-card>
        </div>

        <!-- 右侧 -->
        <div class="main-r">
          <!-- 流程申请 -->
          <el-card class="right-flow">
            <div class="flow-title">
              <span>流程申请</span>
            </div>
            <div class="right-btnBox">
              <el-button class="flow-btn">加班离职</el-button>
              <el-button class="flow-btn">请假调休</el-button>
              <el-button class="flow-btn">审批列表</el-button>
              <el-button class="flow-btn">我的信息</el-button>
            </div>
          </el-card>
          <!-- 快速开始/便携导航 -->
          <el-card class="right-nav">
            <div class="nav-title">
              <span>快速开始/便携导航 </span>
            </div>
            <div class="right-btnBox">
              <router-link to="/layout/social" class="el-button">人事月报</router-link>
              <router-link to="/layout/attendances" class="el-button">考勤查询</router-link>
              <router-link to="/layout/attendances" class="el-button">考勤统计</router-link>
              <router-link to="/layout/employees" class="el-button">员工审核</router-link>
              <router-link to="/layout/departments" class="el-button">组织架构</router-link>
            </div>
          </el-card>
          <!-- 帮助连接 -->
          <el-card class="right-help">
            <div class="help-title">
              <span>帮助链接</span>
            </div>
            <div class="right-btnBox help-iconBox">
              <el-row>
                <el-col :span="8">
                  <a href="#">
                    <span class="icon icon-guide" />
                    <p>入门指南</p>
                  </a>
                </el-col>
                <el-col :span="8">
                  <a href="#">
                    <span class="icon icon-help" />
                    <p>在线帮助手册</p>
                  </a>
                </el-col>
                <el-col :span="8">
                  <a href="#">
                    <span class="icon icon-iphone" />
                    <p>联系技术支持</p>
                  </a>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import workdayCalendar from "./components/workdayCalendar.vue";
export default {
  components:{
    workdayCalendar
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}

::v-deep .el-calendar__header {
    display: none
}
.home {
  margin: 10px;
  .header-card {
    .header-box {
      display: flex;
      .header-imgBox {
        // width: 100%;
        // height: 100%;
        // border-radius: 50%;
        img {
          //     width: 100%;
          // height: 100%;
          // border-radius: 50%;
        }
      }
      .header-imgBoxRight {
        margin-left: 10px;
        p {
          height: 50px;
          margin: 0;
          padding: 0;
          font-size: 30px;
          &:nth-last-child(1) {
            font-size: 20px;
            color: #999;
          }
        }
      }
    }
  }
  .main {
    margin-top: 10px;
    .main-box {
      padding: 0;
      margin: 0;
      display: flex;
      width: 100%;
      justify-content: space-between;
      .main-l {
        width: 60%;
        padding: 0;
      margin: 0;
        .date {
          position: relative;
          padding: 0;
          margin: 0;
          .date-top {
            position: absolute;
            left: 20px;
            top: 0px;
            z-index: 1;
            // height: 60px;
            // padding: 0;
            // margin: 0;
            // height: 60px;
            p {
              width: 100%;
              display:block;
              color: #2c3e50;
              font-size: 24px;
              margin-left: 20px;
              // padding: 18px 20px;
              // line-height: 60px;
            }
          }
          .date-main{
            margin-top: 70px;
            border-top: 1px solid #ebeef5;
          }
        }
        .advContent-box {
          margin-top: 10px;
          .advContent {
            border-top: solid 1px #ccc;
            .title {
              border-bottom: solid 1px #ccc;
            }
          }
          .content {
            ul {
              li {
                list-style: none;
                margin: 0px;
                padding: 0px;
                .item {
                  display: flex;
                  padding: 15px 0;
                  align-items: center;
                  border-bottom: solid 1px #ccc;
                  img {
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                    // vertical-align: middle;
                  }
                  div {
                    margin: 0;
                    padding: 0;
                    //   padding: 15px 0;
                    p {
                      font-size: 14px;
                      margin: 0;
                      padding: 0;
                      line-height: 30px;
                      .name {
                        color: rgb(81, 144, 238);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .main-r {
        width: 39%;
        .right-flow,
        .right-nav,
        .right-help {
          margin-top: 10px;
          .flow-title,
          .nav-title,
          .help-title {
            margin-left: 10px;
            span {
              font-size: 25px;
              color: #2c3e50;
              border-bottom: 4px solid #8a97f8;
              padding-bottom: 10px;
            }
          }
          .right-btnBox {
            margin-top: 20px;
            .flow-btn,
            .el-button {
              font-size: 16px;
              padding: 15px 30px;
              margin: 5px 10px;
            }
            .el-row {
              margin-left: 10px;
              a {
                // margin-left: 10px;
                .icon {
                  display: inline-block;
                  width: 76px;
                  height: 76px;
                  background: url("./../../assets/common/icon.png") no-repeat;
                }
                .icon-guide {
                  background-position: 0 0;
                }

                .icon-help {
                  background-position: -224px 0;
                }

                .icon-iphone {
                  background-position: -460px 0;
                }

                p {
                  margin-left: 10px;
                  font-size: 14px;
                  color: #555;
                }
              }
            }
          }
          .help-iconBox {
            text-align: center;
          }
        }
        .right-flow {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
