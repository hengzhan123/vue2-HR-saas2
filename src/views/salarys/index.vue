<template>
  <div class="reportForms">
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
            <router-link to="/payrollReport" class="skip"
              >202003月报表</router-link
            >
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
          <el-checkbox-group v-model="checkList" class="checkBox">
            <el-checkbox label="总裁办"></el-checkbox>
            <el-checkbox label="行政部"></el-checkbox>
            <el-checkbox label="人事部"></el-checkbox>
            <el-checkbox label="财务部"></el-checkbox>
            <el-checkbox label="技术部"></el-checkbox>
            <el-checkbox label="运营部"></el-checkbox>
            <el-checkbox label="市场部"></el-checkbox>
            <el-checkbox label="财务核算部"></el-checkbox>
            <el-checkbox label="税务管理部"></el-checkbox>
            <el-checkbox label="薪资管理部"></el-checkbox>
            <el-checkbox label="Java研发部"></el-checkbox>
            <el-checkbox label="Python研发部"></el-checkbox>
            <el-checkbox label="Php研发部"></el-checkbox>
            <el-checkbox label="北京事业部"></el-checkbox>
            <el-checkbox label="上海事业部"></el-checkbox>
            <el-checkbox label="天天-天天"></el-checkbox>
            <el-checkbox label="iu微软尤为引人"></el-checkbox>
            <el-checkbox label="点点滴滴的的"></el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
    </el-main>
    <el-main class="social-table">
      <el-table stripe style="width: 1100px">
        <el-table-column type="index" prop="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="90">
        </el-table-column>
        <el-table-column prop="mobile" label="手机" width="180">
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" width="100">
        </el-table-column>
        <el-table-column prop="formOfEmployment" label="聘用形式" width="120">
        </el-table-column>
        <el-table-column prop="departmentName" label="部门" width="120">
        </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间" width="120">
        </el-table-column>
        <el-table-column
          prop="currentBasicSalary+currentPostWage"
          label="工资基数"
          width="150"
        >
        </el-table-column>
        <el-table-column prop="providentCities" label="津贴方案" width="150">
        </el-table-column>
        <el-table-column prop="socialNumber" label="操作" width="180">
          <el-button type="primary" @click="showFn">调薪 </el-button>
          <div class="salarybgBox" ref="salaryShow">
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
                      <el-input placeholder="请输入调整后的基本工资"></el-input>
                    </p>
                    <p>
                      <el-input placeholder="20" disabled></el-input>
                      <span>-></span>
                      <el-input placeholder="请输入调整后的岗位工资"></el-input>
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
          </div>
          <el-button type="primary" @click="skipFn">查看</el-button>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          :total="400"
          layout="sizes, prev, pager, next, jumper"
          background
        >
        </el-pagination>
      </div>
    </el-main>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import { salarysAPI } from "@/api";
export default {
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"],
      // saList: [
      //   {
      //     username: "管理员",
      //     departmentName: "总裁办",
      //     timeOfEntry: "2018-11-02T08:00:00.000+0000",
      //     id: "1063705989926227968",
      //     mobile: "13800000002",
      //     workNumber: "9002",
      //     currentBasicSalary: 123,
      //     currentPostWage: 456,
      //     departmentId: "1175310929766055936",
      //     inServiceStatus: 1,
      //     formOfEmployment: 1,
      //   },
      //   {
      //     timeOfEntry: "2018-11-04T08:00:00.000+0000",
      //     currentPostWage: 20,
      //     workNumber: "111",
      //     mobile: "13800000003",
      //     currentBasicSalary: 20,
      //     id: "1066370498633486336",
      //     departmentId: "1175311466846683136",
      //     departmentName: "市场部",
      //     username: "孙财",
      //     inServiceStatus: 1,
      //     formOfEmployment: 1,
      //   },
      //   {
      //     username: "罗晓晓",
      //     timeOfEntry: "2018-12-02T08:00:00.000+0000",
      //     currentBasicSalary: 3,
      //     workNumber: "1111",
      //     id: "1071632760222810112",
      //     mobile: "13800000004",
      //     departmentName: "人事部",
      //     currentPostWage: 3,
      //     departmentId: "1175311267684352000",
      //     inServiceStatus: 1,
      //     formOfEmployment: 1,
      //   },
      //   {
      //     workNumber: "1001",
      //     username: "文吉星",
      //     departmentName: "人事部",
      //     id: "1074238801330704384",
      //     currentBasicSalary: 5000,
      //     departmentId: "1175311267684352000",
      //     mobile: "13400000001",
      //     currentPostWage: 5000,
      //     inServiceStatus: 1,
      //     timeOfEntry: "2018-01-01T00:00:00.000+0000",
      //     formOfEmployment: 1,
      //   },
      //   {
      //     workNumber: "1002",
      //     currentBasicSalary: 100,
      //     departmentName: "人事部",
      //     currentPostWage: 100,
      //     mobile: "13400000002",
      //     id: "1074238801402007552",
      //     username: "巴思慧",
      //     departmentId: "1175311267684352000",
      //     inServiceStatus: 1,
      //     timeOfEntry: "2018-01-01T00:00:00.000+0000",
      //     formOfEmployment: 1,
      //   },
      //   {
      //     departmentName: "总裁办",
      //     currentBasicSalary: 7,
      //     id: "1075383133106425856",
      //     username: "乔海",
      //     mobile: "13500000001",
      //     currentPostWage: 7,
      //     departmentId: "1175310929766055936",
      //     workNumber: "2001",
      //     inServiceStatus: 1,
      //     timeOfEntry: "2018-01-01T00:00:00.000+0000",
      //     formOfEmployment: 1,
      //   },
      //   {
      //     username: "董昊空",
      //     departmentName: "总裁办",
      //     workNumber: "2002",
      //     currentPostWage: 123,
      //     mobile: "13500000002",
      //     id: "1075383135371350016",
      //     currentBasicSalary: 123,
      //     departmentId: "1175310929766055936",
      //     inServiceStatus: 1,
      //     timeOfEntry: "2018-01-01T00:00:00.000+0000",
      //     formOfEmployment: 1,
      //   },
      //   {
      //     workNumber: "2003",
      //     departmentName: "财务部",
      //     departmentId: "1175311325720936448",
      //     mobile: "13500000003",
      //     username: "周乐天",
      //     id: "1075383135459430400",
      //     currentPostWage: 10,
      //     currentBasicSalary: 10,
      //     inServiceStatus: 1,
      //     timeOfEntry: "2018-01-01T00:00:00.000+0000",
      //     formOfEmployment: 1,
      //   },
      //   {
      //     timeOfEntry: "1992-08-04T08:00:00.000+0000",
      //     id: "1235396724497268736",
      //     departmentName: "总裁办",
      //     currentBasicSalary: 8888,
      //     mobile: "13600000001",
      //     workNumber: "0001",
      //     currentPostWage: 8888,
      //     username: "吕勇锐",
      //     departmentId: "1175310929766055936",
      //     inServiceStatus: 1,
      //     formOfEmployment: 1,
      //   },
      //   {
      //     username: "袁永安",
      //     mobile: "13600000002",
      //     workNumber: "0002",
      //     currentPostWage: null,
      //     departmentName: "总裁办",
      //     currentBasicSalary: null,
      //     id: "1235396819959627776",
      //     departmentId: "1175310929766055936",
      //     timeOfEntry: "1993-08-04T08:00:00.000+0000",
      //     inServiceStatus: 1,
      //     formOfEmployment: 1,
      //   },
      // ],
        saList:[],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {
    // 点击调薪/定薪弹出弹框
    showFn() {
      this.$nextTick(() => {
        this.$refs.salaryShow.style.display = "block";
      });
    },
    // 点击调薪/定薪弹框右上角x取消弹框
    noShowFn() {
      this.$nextTick(() => {
        this.$refs.salaryShow.style.display = "none";
      });
    },
    // 点击查看按钮跳转路由到员工信息页面
    skipFn() {
      this.$router.push({
        path: "/layout/lookup",
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    async FFn(){
      const res = await salarysAPI();
      console.log(res);
    }
  },
  computed: {
    // ...mapGetters(["saList"]),
  },
   created() {
    // this.$store.dispatch("salarys/getSaListAll");
    // const res =  salarysAPI();
    // this.saList = res.data.rows;
    // console.log(res);
   this.FFn()
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
            width: 86%;
            line-height: 35px;
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
          width: 676px;
          height: 568px;
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
            padding: 30px 20px;
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
                    width: 220px;
                    height: 36px;
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
                  margin-top: 50px;
                }
                .el-button:first-of-type {
                  margin-left: 200px;
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
        margin-left: 10px;
      }
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