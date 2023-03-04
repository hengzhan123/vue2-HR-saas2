<template>
  <div>
    <!-- 社保员工---详情 因接口错误原因写不了更新功能-->
    <div class="detailsBox">
      <div class="details_top">
        <div class="block">
          <el-avatar
            :size="100"
            :src="usList.staffPhoto != null ? usList.staffPhoto : circleUrl"
          ></el-avatar>
        </div>
        <ul class="details_t_r">
          <li>
            <span>{{ usList.username }}</span
            ><span>{{ usList.inServiceStatus == 0 ? "离职" : "在职" }}</span>
          </li>
          <li>
            <span>最新工资基数</span
            ><span>入职时间{{ dateFormat(usList.timeOfEntry) }}</span
            ><span>联系电话{{ usList.mobile }}</span>
          </li>
          <li>
            <span>本月不缴纳社保</span>
            <el-switch
              v-model="usList.enterprisesPaySocialSecurityThisMonth"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
              <!-- :value="options.value" -->
              <!-- :label="options.label" -->
              >
            </el-switch>
            <span>本月不缴纳公积金</span>
            <el-switch
              v-model="usList.enterprisesPayTheProvidentFundThisMonth"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
              >
            </el-switch>
          </li>
        </ul>
      </div>
      <div class="details_bottom">
        <el-form class="details_t_t" ref="form" label-width="80px">
          <el-form-item label="参保城市">
            <el-select v-model="usList2.participatingInTheCity">
              <el-option
                v-for="obj in city"
                :key="obj.value"
                :value="obj.value"
                :label="obj.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="社保类型">
            <el-select v-model="usList2.socialSecurityType">
              <el-option
                v-for="obj in type"
                :key="obj.value"
                :value="obj.value"
                :label="obj.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="户籍类型">
            <el-select v-model="usList2.householdRegistrationType">
              <el-option
                v-for="obj in type2"
                :key="obj.value"
                :value="obj.value"
                :label="obj.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="社保基数">
            <el-input
              class="inputs"
              v-model="usList2.socialSecurityBase"
            ></el-input
            >（基数范围是3387 ~ 25401）
          </el-form-item>
          <el-form-item label="工伤比例">
            <el-input
              class="inputs"
              v-model="usList2.industrialInjuryRatio"
            ></el-input
            >（比例范围是0.2％ ~ 3％，推荐0.2％）
          </el-form-item>
          <el-form-item label="社保缴纳" class="tableBox">
            <el-col :span="6">
              <el-form-item label="个人" class="texttitle">
                <el-input disabled class="inputs" :value="usList2.scalePersonal"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="公司" class="texttitle">
                <el-input disabled class="inputs"></el-input>
              </el-form-item>
            </el-col>
            <el-table :data="ciList" stripe style="width: 100%" class="table">
              <el-table-column
                prop="name"
                label="缴费项目"
                width="147"
              ></el-table-column>
              <el-table-column prop="" label="企业基数" width="142">{{
                10000
              }}</el-table-column>
              <el-table-column prop="scaleCompany" label="企业比例">
                <template slot-scope="scope">
                  {{ scope.row.scaleCompany }}%
                </template>
              </el-table-column>
              <el-table-column prop="" label="企业缴纳" width="142">
                <template slot-scope="scope">
                  <el-input
                    disabled
                    :value="(scope.row.scaleCompany * 10000) / 100 + '.00'"
                    ></el-input
                  >
                </template>
              </el-table-column>
              <el-table-column
                prop=""
                label="个人基数"
                width="142"
              ></el-table-column>
              <el-table-column prop="" label="个人比例" width="142">
                <template slot-scope="scope">
                  {{ scope.row.scalePersonal }}
                </template>
              </el-table-column>
              <el-table-column prop="" label="个人缴纳" width="142">
                <template slot-scope="scope">
                  <el-input
                    disabled
                    class="inputBox"
                    id="inputBox"
                    v-if="scope.row.scalePersonal != null"
                    :value="(scope.row.scalePersonal * 10000) / 100 + '.00'"
                  ></el-input>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
          <el-form-item label="社保备注">
            <el-input
              type="textarea"
              rows="2"
              placeholder="1-300字符"
              maxlength="300"
              class="area inputs"
              v-model="usList2.socialSecurityNotes"
            ></el-input>
          </el-form-item>
          <el-form-item label="公积金城市">
            <el-input
              class="inputs"
              v-model="usList2.providentFundCity"
            ></el-input
            >（基数范围是2273~25401）
          </el-form-item>
          <el-form-item label="企业比例">
            <el-input
              class="inputs"
              v-model="usList2.enterpriseProportion"
            ></el-input
            >（比例范围是5%~12%，推荐12% ）
          </el-form-item>
          <el-form-item label="个人比例">
            <el-input
              class="inputs"
              v-model="usList2.personalProportion"
            ></el-input
            >（比例范围是5%~12%，推荐12% ）
          </el-form-item>
          <el-form-item label="公积金缴纳个人">
            <el-col :span="6">
              <el-form-item label="个人" class="texttitle">
                <el-input
                  class="inputs"
                  :value="
                    Number(usList2.personalProvidentFundPayment / 100) + '.00'
                  "
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="公司" class="texttitle">
                <el-input
                  class="inputs"
                  :value="
                    Number(usList2.enterpriseProvidentFundPayment / 100) + '.00'
                  "
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <span>（为自动测算结果，可手动调整）</span>
            </el-col>
          </el-form-item>
          <el-form-item label="公积金备注">
            <el-input
              type="textarea"
              rows="2"
              placeholder="1-300字符"
              maxlength="300"
              class="area inputs"
              v-model="usList2.providentFundNotes"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <!-- <el-button @click="updateFn(usList2.userId)">保存更新</el-button>
            <el-button>取消</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { userAPI, citysAPI, updateUserAPI } from "@/api/social";
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      value1: true,
      value2: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      usList: [],
      usList2: [],
      ciList: [],
      city: [
        {
          value: "北京",
          label: "北京",
        },
      ],
      type: [
        {
          value: 1,
          label: "首次开户",
        },
        {
          value: 2,
          label: "非首次开户",
        },
      ],
      type2: [
        {
          value: 1,
          label: "本市城镇",
        },
        {
          value: 2,
          label: "本市农村",
        },
        {
          value: 3,
          label: "外阜城镇",
        },
        {
          value: 4,
          label: "外阜农村",
        },
      ],
    };
  },
  methods: {
    // 格式化日期
    dateFormat(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      return year + "-" + month + "-" + day;
    },
  },
  async mounted() {
    // 获取用户信息
    const res = await userAPI({
      id: this.$route.query.id,
    });
    this.usList = res.data.user;
    this.usList2 = res.data.userSocialSecurity;

    // 获取用户社保详细信息
    const res2 = await citysAPI({
      id: this.usList2.participatingInTheCityId,
    });
    this.ciList = res2.data;
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  .detailsBox {
    .details_top {
      width: 95%;
      height: 100px;
      background: white;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 10px;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
      padding: 15px;
      .block {
        float: left;
        .el-avatar {
          width: 100px;
          height: 100px;
          margin-right: 40px;
        }
      }
      .details_t_r {
        float: left;
        li {
          line-height: 20px;
          color: #555;
          font-size: 14px;
        }
        li:nth-of-type(2) {
          span:nth-of-type(2) {
            margin-left: 45px;
            margin-right: 40px;
          }
        }
        li:first-of-type {
          span:first-of-type {
            font-weight: bold;
            color: black;
          }
          span:last-of-type {
            color: white;
            background: rgb(255, 98, 99);
            padding: 2px 4px;
            border-radius: 3px;
            font-size: 12px;
            margin-left: 5px;
          }
        }
        li:last-of-type {
          line-height: 50px;
          span {
            margin-right: 5px;
          }
          span:last-of-type {
            margin-left: 20px;
          }
        }
      }
    }
    .details_bottom {
      width: 95%;
      margin: 0 auto;
      background: white;
      padding: 15px;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
      .details_t_t {
        .el-form-item {
          margin-bottom: 6px;
          /deep/ .el-form-item__label:not(.texttitle) {
            text-align: right;
            width: 115px !important;
          }
          /deep/ .texttitle {
            width: 50px !important;
          }
          /deep/ .el-select {
            // width: 193px;
            // height: 30px;
            .el-input--suffix {
              width: 194px;
              height: 28px;
              .el-input__inner {
                width: 194px;
                height: 28px;
              }
              .el-icon-arrow-up {
                line-height: 28px;
              }
            }
          }
          /deep/.inputs {
            width: 380px;
            height: 28px;
            .el-input__inner {
              width: 380px;
              height: 28px;
            }
          }
          .el-col {
            .el-form-item {
              /deep/ .el-form-item__label {
                margin-left: 0;
              }
              /deep/.el-input {
                width: 178px;
                height: 28px;
                .el-input__inner {
                  width: 178px;
                  height: 28px;
                }
              }
            }

            .el-table__body {
              /deep/ th {
                padding: 0;
                height: 30px;
              }
              /deep/ td {
                padding: 0;
                height: 30px;
              }
            }
          }
          /deep/ .el-form-item__content {
            .area {
              width: 380px;
              margin-bottom: 30px;
              /deep/ .el-textarea {
                width: 380px;
                /deep/ .el-textarea__inner {
                  width: 380px;
                  height: 38px;
                  padding: 5px 15px;
                }
              }
            }
          }
          .el-button {
            width: 80px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            color: white;
            background: rgb(56, 179, 255);
            font-size: 12px;
          }
          .el-button:first-of-type {
            margin-left: 14px;
            margin-top: 10px;
          }
          .el-button:last-of-type {
            background: white;
            color: #555;
            width: 56px;
          }
          .el-button:last-of-type:hover {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }
        }
        .tableBox {
          margin-bottom: 18px;
        }
      }
    }
  }
}
</style>