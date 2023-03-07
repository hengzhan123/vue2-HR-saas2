<template>
  <div class="home">
    <!-- 头部 -->
    <el-card class="header-card">
      <div class="header-box">
        <div class="header-imgBox">
          <img v-imagerror="defaultImg" :src="staffPhoto" class="userImg" />
        </div>
        <div class="header-imgBoxRight">

          <p>早安，{{ userInfo.username }}，祝你开心每一天！</p>
          <p>
            {{ userInfo.username }} | {{ userInfo.company }} -
            {{ userInfo.departmentName }}
          </p>
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
              <el-button class="flow-btn" @click="dialogVisible = true">加班离职</el-button>
              <!-- <el-button class="flow-btn">请假调休</el-button> -->
              <el-button class="flow-btn" @click="dialogLeave = true">请假调休</el-button>
              <el-button class="flow-btn">审批列表</el-button>
              <el-button class="flow-btn" @click="$router.push('myInfo')">我的信息</el-button>
            </div>
          </el-card>
          <!-- 快速开始/便携导航 -->
          <el-card class="right-nav">
            <div class="nav-title">
              <!-- <span>快速开始/便携导航 </span> -->
              <span class="bgc_null">绩效指数 </span>
            </div>
            <!-- 旧版的 -->
            <!-- <div class="right-btnBox">
              <router-link to="/layout/social" class="el-button">人事月报</router-link>
              <router-link to="/layout/attendances" class="el-button">考勤查询</router-link>
              <router-link to="/layout/attendances" class="el-button">考勤统计</router-link>
              <router-link to="/layout/employees" class="el-button">员工审核</router-link>
              <router-link to="/layout/departments" class="el-button">组织架构</router-link>
            </div> -->
            <!-- 雷达图 -->
            <Radar></Radar>
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
    <!-- 加班离职对话框 -->
    <el-dialog title="申请" :visible="dialogVisible" width="40%" @close="btnCancel">
      <el-form ref="ruleForm" :model="ruleForm" label-width="120px">
        <!-- 离职表单 申请类型 -->
        <el-form-item label="申请类型" prop="processName">
          <el-select v-model="ruleForm.processName" placeholder="请选择">
            <el-option v-for="item in processList" :defaultProps="{ label: 'processName' }" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!--  期望离职时间-->
        <template v-if="ruleForm.processName == '离职'">
          <el-form-item label="期望离职时间" style="width: 100px" prop="exceptTime">
            <el-date-picker v-model="ruleForm.exceptTime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <!-- 离职原因 -->
          <el-form-item label="离职原因" prop="reason">
            <el-input type="textarea" v-model="ruleForm.reason" style="width: 80%" placeholder="请输入内容" :autosize="{ minRows: 3, maxRows: 6 }"></el-input>
          </el-form-item>
        </template>
        <!-- 加班 -->
        <template v-else>
          <el-form-item label="加班开始时间" prop="exceptTime">
            <el-date-picker v-model="ruleForm.start_time" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" />
          </el-form-item>
          <el-form-item label="加班结束时间" prop="exceptTime">
            <el-date-picker v-model="ruleForm.end_time" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" />
          </el-form-item>
          <el-form-item label="加班原因" prop="reason">
            <el-input v-model="ruleForm.reason" type="textarea" :autosize="{ minRows: 3, maxRows: 8 }" placeholder="请输入内容" />
          </el-form-item>
        </template>
      </el-form>
      <!-- 提交 重置 -->
      <el-row slot="footer" type="flex" justify="flex-start">
        <el-col :offset="3" :span="6">
          <el-button @click="btnOK">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-col>
      </el-row>
    </el-dialog>

    <!-- 请假调休对话框 -->
    <el-dialog title="申请" :visible="dialogLeave" width="40%" @close="btnCancel2">
      <el-form ref="ruleForm2" :model="ruleForm2" label-width="120px">
        <!-- 假期类型 -->
        <el-form-item label="申请类型" prop="processName">
          <el-select v-model="ruleForm2.processName" placeholder="请选择">
            <el-option v-for="item in processList2" :defaultProps="{ label: 'processName' }" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请单位" prop="applyUnit" style="width: 217px;">
          <!-- <el-input class="borderNone" v-model="ruleForm2.applyUnit" style="border: none !important;" >按天</el-input> -->
          <span>按天</span>
        </el-form-item>
        <template>
          <el-form-item label="开始时间" style="width: 100px" prop="startTime">
            <el-date-picker v-model="ruleForm2.startTime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间" style="width: 100px" prop="endTime">
            <el-date-picker v-model="ruleForm2.endTime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <template v-if="ruleForm2.processName == '请假'">
            <el-form-item label="请假时长" style="width: 100px" prop="duration">
              <el-input v-model="ruleForm2.duration" type="input" style="width: 217px" />
            </el-form-item>
          </template>
          <template v-else>
            <el-form-item label="申请天数" style="width: 100px" prop="duration">
              <el-input type="input" v-model="ruleForm2.duration" style="width: 217px;" placeholder="请输入内容"></el-input>
            </el-form-item>
          </template>
          <el-form-item label="申请理由" prop="reason">
            <el-input v-model="ruleForm2.reason" type="textarea" :autosize="{ minRows: 3, maxRows: 8 }" placeholder="请输入内容" />
          </el-form-item>
        </template>
      </el-form>
      <!-- 提交 重置 -->
      <el-row slot="footer" type="flex" justify="flex-start">
        <el-col :offset="3" :span="6">
          <el-button @click="btnOK2">提交</el-button>
          <el-button @click="resetForm2('ruleForm2')">重置</el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("user");
import workdayCalendar from "./components/workdayCalendar.vue";
import { startProcess } from "@/api/approvals";
import Radar from "./components/radar.vue";

export default {
  components: {
    workdayCalendar,
    Radar,
  },
    //* 新版接口离职没有用，加班新旧都没有用，我的信息新接口显示一部分，旧接口都能显示，头像新接口是能看到动态的，旧接口的不可以
  data() {
    return {
      dialogVisible: false,//加班离职对话框
      dialogLeave: false,//请假调休对话框
      ruleForm: {
        exceptTime: "", //离职时间
        reason: "", //离职/加班原因
        processKey: "process_dimission", // 特定的审批
        processName: "离职",//申请类型
        // endTime:'',
        // startTime:'',
        // start_time: '',//加班开始时间
        // end_time: '',//加班结束时间
      },
      ruleForm2: {
        applyUnit: "按天",
        duration: '',
        endTime: "",
        holidayType: "1",
        processKey: "process_leave",
        processName: "",
        reason: "",
        startTime: "",
        // userId
      },
      defaultImg: require("@/assets/common/head.jpg"),
      processList: [
        {
          value: "加班",
          label: "加班",
        },
        {
          value: "离职",
          label: "离职",
        },
      ],
      processList2: [
        {
          value: "请假",
          label: "请假",
        },
        {
          value: "调休",
          label: "调休",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["name", "staffPhoto"]),
    ...mapState(["userInfo"]),
  },
  methods: {
    // 加班离职重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 请假调休重置
    resetForm2(formName) {
      this.$refs[formName].resetFields();
    },
    // 离职加班提交
    btnOK() {
      this.$refs.ruleForm.validate(async (isOK) => {
        if (isOK) {
          await startProcess({
            ...this.ruleForm,
            userId: this.userInfo.userId,
            username: this.userInfo.username,
          });
          this.$message.success("提交流程成功");
          this.dialogVisible = false;
        }
      });
    },
    // 关闭离职对话框
    btnCancel() {
      this.ruleForm = {
        exceptTime: "",//
        reason: "",
        processKey: "process_dimission",
        processName: "离职",
        // startTime: "",
        // endTime: "",//
        // start_time: '',
        // end_time: '',
        // overtimeReason: "",
      };
      this.dialogVisible = false;
      this.$refs.ruleForm.resetFields();
    },
    // 请假调休
    btnOK2() {
      this.$refs.ruleForm2.validate(async (isOK) => {
        if(this.ruleForm2.processName=== "调休"){
         this.ruleForm2.holidayType = 0
        }
        if (isOK) {
          await startProcess({
            ...this.ruleForm2,
            userId: this.userInfo.userId,
            username: this.userInfo.username,
          });
          this.$message.success("操作成功");
          this.dialogLeave = false;
        }
      });
    },
    // 关闭请假调休对话框
    btnCancel2() {
      this.ruleForm2 = {
        applyUnit: "按天",
        duration: '',
        endTime: "",
        holidayType: "1",
        processKey: "process_leave",
        processName: "",
        reason: "",
        startTime: "",
      };
      this.dialogLeave = false;
      this.$refs.ruleForm2.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}

::v-deep .el-calendar__header {
  display: none;
}
// 离职加班对话框
::v-deep .el-dialog__header {
  background: #66b1ff;
  height: 25px;
  line-height: 25px;

  .el-dialog__title {
    height: 25px;
    line-height: 25px;
  }
  .el-dialog__headerbtn {
    .el-dialog__close {
      color: #fff;
    }
  }
}

.home {
  margin: 10px;
  .header-card {
    margin-top: 25px;
    .header-box {
      display: flex;
      .header-imgBox {
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
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
          line-height: 100px;
          .date-top {
            position: absolute;
            left: 20px;
            top: 0px;
            z-index: 1;
            p {
              width: 100%;
              display: block;
              color: #2c3e50;
              font-size: 24px;
              margin-left: 20px;
            }
          }
          .date-main {
            margin-top: 70px;
            border-top: 1px solid #ebeef5;
          }
        }
        .advContent-box {
          margin-top: 10px;
          .advContent {
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
                  }
                  div {
                    margin: 0;
                    padding: 0;
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
          .nav-title {
            .bgc_null {
              border-bottom: none;
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
  .borderNone /deep/ .el-input__inner {
    border: none;
  }
}
</style>
