<template>
  <div class="reportForms">
    <!-- 工资---首页 -->
    <el-main>
      <el-row class="social_top">
        <el-col :span="20">
          <div class="grid-content bg-purple social_t_l">
            <i class="el-icon-info"></i>本月：入职 离职 调薪 未定薪
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple social_t_r">
            <router-link to="/setup" class="skip">设置</router-link>
            <!-- <router-link to="/payrollReport" class="skip"
              >202003月报表</router-link
            > -->
          </div> 
        </el-col>
      </el-row>
      <el-row class="center">
        <el-col class="centerBox">
          <div class="grid-content bg-purple">聘用形式:</div>
          <el-checkbox-group v-model="checkList" class="checkBox">
            <el-checkbox label="正式"></el-checkbox>
            <el-checkbox label="非正式"></el-checkbox>
          </el-checkbox-group>
          <div class="grid-content bg-purple social_title">员工状态:</div>
          <el-checkbox-group v-model="checkList" class="checkBox checkText">
            <el-checkbox label="在职"></el-checkbox>
            <el-checkbox label="离职"></el-checkbox>
          </el-checkbox-group>
        </el-col>
        <el-col> </el-col>
        <el-col>
          <div class="grid-content bg-purple">部门:</div>
          <el-checkbox-group
            v-model="checkList"
            class="checkBox"
            v-for="obj in deList"
            :key="obj.id"
            @change="fn"
          >
            <el-checkbox :label="obj.name"></el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
    </el-main>
    <el-main class="social-table">
      <el-table
        :data="
          saList.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        stripe
        style="width: 1100px"
      >
        <el-table-column type="index" prop="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="90">
        </el-table-column>
        <el-table-column prop="mobile" label="手机" width="180">
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" width="100">
        </el-table-column>
        <el-table-column prop="formOfEmployment" label="聘用形式" width="120">
          <template slot-scope="scope">
            {{ scope.row.formOfEmployment == 1 ? "正式" : "未知" }}
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门" width="120">
        </el-table-column>
        <el-table-column
          prop="timeOfEntry"
          label="入职时间"
          width="120"
          :formatter="formatTime"
        >
        </el-table-column>
        <el-table-column prop="currentBasicSalary" label="工资基数" width="150">
          <template slot-scope="scope">
            {{ scope.row.currentBasicSalary + scope.row.currentPostWage }}
          </template>
        </el-table-column>
        <el-table-column prop="inServiceStatus" label="津贴方案" width="150">
          <template slot-scope="scope">
            {{ scope.row.inServiceStatus == 1 ? "通用方案" : "通用方案" }}
          </template>
        </el-table-column>
        <el-table-column prop="socialNumber" label="操作" width="180">
          <template v-slot="{ row }">
            <el-button
              type="primary"
              prop="departmentId"
              @click="showFn(row.id)"
              >定薪
            </el-button>
            <div class="salarybgBox" ref="salaryShow">
              <div class="salary">
                <el-row>
                  <el-col :span="12">
                    <p>定薪</p>
                  </el-col>
                  <el-col :span="12">
                    <i class="el-icon-close" @click="noShowFn"></i>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="salary_b">
                    <el-col :span="4">
                      <p>当前基本工资</p>
                      <p>当前岗位工资</p>
                      <p>当前工资合计</p>
                      <p>转正基本工资</p>
                      <p>转正岗位工资</p>
                      <p>转正工资合计</p>
                    </el-col>
                    <el-col :span="20">
                      <p>
                        <el-input
                          placeholder="当前基本工资"
                          v-model="value1"
                          @input="getSumOne"
                        ></el-input>
                      </p>
                      <p>
                        <el-input
                          placeholder="当前岗位工资"
                          v-model="value2"
                          @input="getSumOne"
                        ></el-input>
                      </p>
                      <p>
                        <el-input
                          placeholder=""
                          disabled
                          v-model="sum1"
                        ></el-input>
                      </p>
                      <p>
                        <el-input
                          placeholder="转正基本工资"
                          v-model="value3"
                          @input="getSumTwo"
                        ></el-input>
                      </p>
                      <p>
                        <el-input
                          placeholder="转正岗位工资"
                          v-model="value4"
                          @input="getSumTwo"
                        ></el-input>
                      </p>
                      <p>
                        <el-input
                          placeholder=""
                          disabled
                          v-model="sum2"
                        ></el-input>
                      </p>
                      <el-button type="primary" @click="getFn(row.id)"
                        >保存</el-button
                      >
                      <el-button type="primary" @click="noShowFn"
                        >关闭</el-button
                      >
                    </el-col>
                  </el-col>
                </el-row>
              </div>
            </div>
            <!-- <div class="salarybgBox" ref="salaryShow">
              <div class="salary">
                <el-row>
                  <el-col :span="12">
                    <p>调薪</p>
                  </el-col>
                  <el-col :span="12">
                    <i class="el-icon-close" @click="noShowFn"></i>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="salary_t">
                    <el-col :span="3">
                      <div class="block">
                        <el-avatar :size="100" :src="circleUrl"></el-avatar>
                      </div>
                    </el-col>
                    <el-col :span="20">
                      <p>张三</p>
                      <p>部门:<span>总裁办</span></p>
                      <p>入职时间:<span>2018-11-02</span></p>
                    </el-col>
                  </el-col>
                  <el-col class="salary_b">
                    <el-col :span="4">
                      <p>调整基本工资</p>
                      <p>调整岗位工资</p>
                      <p>工资合计</p>
                      <p>调整幅度</p>
                    </el-col>
                    <el-col :span="20">
                      <p>
                        <el-input placeholder="20" disabled></el-input>
                        <span>-></span>
                        <el-input
                          placeholder="请输入调整后的基本工资"
                        ></el-input>
                      </p>
                      <p>
                        <el-input placeholder="20" disabled></el-input>
                        <span>-></span>
                        <el-input
                          placeholder="请输入调整后的岗位工资"
                        ></el-input>
                      </p>
                      <p>
                        <el-input placeholder="40" disabled></el-input>
                        <span>-></span>
                        <el-input placeholder="0"></el-input>
                      </p>
                      <p>
                        <el-input placeholder="-40" disabled></el-input>
                      </p>
                      <el-button type="primary">保存</el-button>
                      <el-button type="primary">关闭</el-button>
                    </el-col>
                  </el-col>
                </el-row>
              </div>
            </div> -->
            <!-- <el-button type="primary" @click="skipFn(row.id)">查看</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="pageSize"
          :total="saList.length"
          layout="total,sizes, prev, pager, next, jumper"
          background
        >
        </el-pagination>
      </div>
    </el-main>
  </div>
</template>

<script>
import {
  salarysAPI,
  salarysInitAPI,
  departmentAPI,
  lookAPI,
} from "@/api/salarys";
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      sum1: "",
      sum2: "",
      checkList: ["选中且禁用", "复选框 A"],
      saList: [],
      pageSize: 10, //每页的数据条数
      currentPage: 1, //当前页码
      total: 25, //总条数
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      deList: [],
    };
  },
  methods: {
    // 点击调薪/定薪弹出弹框 并获取id对应数据
    async showFn() {
      this.$nextTick(() => {
        this.$refs.salaryShow.style.display = "block";
      });
    },
    // 定薪
    async getFn(id) {
      console.log(id);
      const res = await salarysInitAPI({
        userId: id,
        currentBasicSalary: this.value1,
        currentPostWage: this.value2,
        correctionOfBasicWages: this.value3,
        turnToPostWages: this.value4,
      });
      console.log(res);
      // 定薪成功提示弹框
      if ((res.code = 10000 && (res.message = "操作成功！"))) {
        this.$message({
          message: "保存成功",
          type: "success",
        });
        this.$nextTick(() => {
          this.$refs.salaryShow.style.display = "none";
        });
      }
    },
    // 点击调薪/定薪弹框右上角x取消弹框
    noShowFn() {
      this.$nextTick(() => {
        this.$refs.salaryShow.style.display = "none";
      });
    },
    //统计薪资
    getSumOne() {
      this.sum1 = Number(this.value1) + Number(this.value2);
    },
    getSumTwo() {
      this.sum2 = Number(this.value3) + Number(this.value4);
    },
    // 点击查看按钮跳转路由到员工信息页面
    async skipFn(id) {
      this.$router.push({
        path: "/lookup",
        query: {
          id: id,
        },
      });
    },
    // 日期格式转换
    formatTime(row, column) {
      let data = row[column.property];
      let dtime = new Date(data);
      const year = dtime.getFullYear();
      let month = dtime.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let day = dtime.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      return year + "-" + month + "-" + day + " ";
    },
    // 分页功能
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    // async fn(e) {
      
    // },
  },
  async mounted () {
    // 获取工资列表
    const res = await salarysAPI({
      page: 1,
      pageSize: 28,
    });
    this.saList = res.data.rows;
    // 获取工资部门列表
    const res2 = await departmentAPI({});
    this.deList = res2.data.depts;
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  .reportForms {
    width: 99%;
    margin: 15px auto;
    .el-main {
      .social_top {
        width: 99%;
        margin: 0 auto;
        padding: 20px;
        margin-top: 15px;
        margin-bottom: 15px;
        background: white;
        border-radius: 3px;
        box-shadow: 0px 0px 10px rgb(177, 177, 177);
        .social_t_l {
          background: red;
          height: 30px;
          width: 222px;
          line-height: 30px;
          border-radius: 3px;
          font-size: 14px;
          color: rgb(85, 85, 85);
          border: 1px solid rgb(115, 215, 255);
          background: rgb(225, 248, 255);
          border: 1px solid rgb(115, 215, 255);
          .el-icon-info {
            margin-left: 12px;
            margin-right: 5px;
            color: rgb(0, 160, 255);
          }
        }
        .social_t_r {
          width: 180px;
          height: 30px;
          line-height: 30px;
          text-align: right;
          float: left;
          .skip {
            font-size: 14px;
            color: rgb(85, 85, 85);
          }
          .skip:first-of-type {
            margin-right: 20px;
          }
        }
        .el-row:last-of-type {
          margin-top: 40px;
          .el-col {
            div {
              width: 8%;
              margin-left: 16px;
              float: left;
              font-size: 14px;
              color: #555;
              font-weight: bold;
            }
            .social_title {
              line-height: 28px;
            }
            .checkBox {
              border: 1px solid green;
              width: 86%;
              line-height: 35px;
              display: flex;
              .el-checkbox {
                margin-right: 5px;
                height: 30px;
              }
            }
            .checkText {
              line-height: 28px;
            }
            .el-checkbox-group {
              .el-checkbox {
                width: 110px;
              }
            }
          }
        }
      }
      .center {
        width: 99%;
        margin: 0 auto;
        padding: 15px;
        padding-bottom: 20px;
        padding-top: 30px;
        margin-top: 15px;
        margin-bottom: 15px;
        background: white;
        border-radius: 3px;
        box-shadow: 0px 0px 10px rgb(177, 177, 177);
        .el-col {
          width: 100%;
          div {
            width: 8%;
            margin-left: 16px;
            float: left;
            font-size: 14px;
            color: #555;
            font-weight: bold;
          }
          .social_title {
            line-height: 28px;
          }
          .checkBox {
            width: 100px;
            line-height: 35px;
            .el-checkbox-group {
              border: 1px solid red;
              width: 100px !important;
              .el-checkbox {
                margin-right: 5px;
                height: 30px;
                width: 100px !important;
              }
            }
          }
          .checkText {
            line-height: 28px;
          }
          .el-checkbox-group {
            .el-checkbox {
              width: 110px;
            }
          }
        }
        .centerBox {
          line-height: 30px;
          div {
            float: left;
          }
          .el-checkbox-group {
            width: 30%;
            float: left;
          }
        }
      }
    }
    .social-table {
      width: 99%;
      margin: 0 auto;
      padding: 15px;
      margin-bottom: 15px;
      background: white;
      border-radius: 3px;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
      /deep/ th {
        padding: 0;
        height: 44px;
      }

      /deep/ td {
        padding: 0;
        height: 49px;
      }
      .el-table-column:last-of-type {
        font-size: 12px;
        border-radius: 3px;
      }
      .el-button {
        width: 60px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        border-radius: 3px;
        background: #66b1ff !important;
        color: white !important;
        border: none !important;
      }
      .salarybgBox {
        display: none;
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 99;
        .salary {
          width: 666px;
          height: 515px;
          position: fixed;
          left: 50%;
          top: 90px;
          background: white;
          transform: translateX(-50%);
          z-index: 999;
          .el-row:first-of-type {
            background: #66b1ff;
            padding: 20px 20px 10px;
            color: white;
            .el-col {
              text-align: left;
              font-size: 18px;
              font-weight: normal;
            }
            .el-col:last-of-type {
              text-align: right;
            }
          }
          .el-row:last-of-type {
            padding: 30px 5px;
            .salary_t {
              color: black;
              height: 100px;
              border-bottom: 1px solid #ccc;
              padding-bottom: 120px;
              .el-col:first-of-type {
                width: 100px;
                height: 100px;
                .block {
                  margin: 0 auto;
                  margin-right: 56px;
                }
              }
              .el-col:last-of-type {
                text-align: left;
                padding-left: 30px;
                p {
                  font-size: 16px;
                  color: #606266;
                  font-weight: bold;
                  line-height: 32px;
                  span {
                    font-size: 14px;
                    font-weight: normal;
                    margin-left: 10px;
                  }
                }
                p:not(:first-of-type) {
                  font-size: 14px;
                }
              }
            }
            .salary_b {
              .el-col:first-of-type {
                p {
                  width: 100px;
                  margin-right: 15px;
                  font-size: 14px;
                  color: #606266;
                  text-align: right;
                  line-height: 56px;
                }
              }
              .el-col:last-of-type {
                p {
                  line-height: 56px;
                  .el-input {
                    width: 300px;
                    height: 36px;
                    margin-left: 25px;
                  }
                  span {
                    font-size: 14px;
                    color: #999;
                    margin: 0 20px;
                  }
                }
                .el-button {
                  width: 70px;
                  height: 36px;
                  line-height: 36px;
                  margin-top: 10px;
                }
                .el-button:first-of-type {
                  margin-left: 30px;
                }
              }
            }
          }
        }
      }
      .el-button:last-of-type {
        background: white;
        border: 1px solid #ccc;
        color: black;
        // margin-left: 10px;
      }
    }
    .el-table__header tr,
    .el-table__header th {
      padding: 0;
      height: 44px;
    }
    .el-table__body tr,
    .el-table__body td {
      padding: 0;
      height: 49px;
    }
    .block {
      width: 43%;
      height: 30px;
      float: right;
      margin-top: 10px;
    }
  }
}
</style>