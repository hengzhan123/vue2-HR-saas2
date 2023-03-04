<template>
  <!-- 社保---历史归档 -->
  <div class="historicalBox">
    <el-main>
      <el-row>
        <div class="header">
          <p>全公司</p>
          <div class="block" @click="getFn">
            <el-date-picker
              v-model="yearMonth"
              type="year"
              value-format="yyyy"
              placeholder="选择年"
              @change="getMonthFn"
            >
            </el-date-picker>
          </div>
        </div>
      </el-row>
      <div
        v-loading="loading"
        v-for="(item, index) in hiList"
        :key="item.id"
        class="textBox"
      >
        <el-row :gutter="20" class="header-b" :class="{ act: item.act }">
          <el-col :span="2">
            <div
              class="grid-content bg-purple"
              @click="isShowFn(item, index)"
              :class="{ act: item.act }"
            >
              >
            </div>
          </el-col>
          <el-col :span="5"
            ><div class="grid-content bg-purple">
              <p>
                <label>202001社保报表</label
                ><span>{{ dateFormat(item.creationTime) }}</span>
              </p>
              <p @click="isShowFn(item, index)" :class="{ act: item.act }">
                社保报表
              </p>
            </div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple">
              <ul>
                <li>企业缴纳</li>
                <li>{{ item.enterprisePayment }}</li>
              </ul>
            </div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple">
              <ul>
                <li>个人缴纳</li>
                <li>{{ item.personalPayment }}</li>
              </ul>
            </div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple">
              <ul>
                <li>合计</li>
                <li>{{ item.total }}</li>
              </ul>
            </div></el-col
          >
        </el-row>
        <el-row class="footer" ref="socialShow" v-show="item.act">
          <el-col class="footer_t" :span="22">
            <ul class="footer_text">
              <li><span></span>已离职</li>
              <li><span></span>再入职</li>
              <li><span></span>公司台计</li>
              <li><span></span>—级部门</li>
              <li><span></span>二级部门</li>
            </ul>
          </el-col>
          <el-col class="footer_r" :span="2">
            <i class="el-icon-search"></i>
            <span></span>
            <el-button type="primary" @click="exportExcel">导出</el-button>
          </el-col>
          <el-col class="table" :span="24">
            <el-table
              :data="item.hiList2"
              id="socialTable"
              height="250"
              border
              style="height: 284px"
            >
              <el-table-column
                type="index"
                prop="index"
                label="序号"
                width="50"
                height="20"
              >
              </el-table-column>
              <el-table-column prop="username" label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="timeOfEntry" label="入职时间" width="120">
              </el-table-column>
              <el-table-column prop="mobile" label="手机" width="120">
              </el-table-column>
              <el-table-column prop="idNumber" label="身份证号码" width="120">
              </el-table-column>
              <el-table-column
                prop="theHighestDegreeOfEducation"
                label="学历"
                width="120"
              >
              </el-table-column>
              <el-table-column prop="" label="开户行" width="120">
              </el-table-column>
              <el-table-column prop="openingBank" label="一级部门" width="120">
              </el-table-column>
              <el-table-column
                prop="twoLevelDepartment"
                label="二级部门"
                width="120"
              >
              </el-table-column>
              <el-table-column prop="workingCity" label="工作城市" width="120">
              </el-table-column>
              <el-table-column
                prop="socialSecurityComputerNumber"
                label="社保电脑号"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="providentFundAccount"
                label="公积金账号"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="resignationTime"
                label="离职时间"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="householdRegistrationType"
                label="户籍类型"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="participatingInTheCity"
                label="参保城市"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="socialSecurityMonth"
                label="社保月份"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="socialSecurityBase"
                label="社保基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="socialSecurity"
                label="社保合计"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="socialSecurityEnterprise"
                label="社保企业"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="socialSecurityIndividual"
                label="社保个人"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="providentFundCity"
                label="公积金城市"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="providentFundMonth"
                label="公积金月份"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="providentFundBase"
                label="公积金基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="accumulationFundEnterpriseBase"
                label="公积金企业基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="proportionOfProvidentFundEnterprises"
                label="公积金企业比例"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="individualBaseOfProvidentFund"
                label="公积金个人基数"
                width="120"
              >
              </el-table-column>

              <el-table-column
                prop="personalRatioOfProvidentFund"
                label="公积金个人比例"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="totalProvidentFund"
                label="公积金合计"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="providentFundEnterprises"
                label="公积金企业"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="providentFundIndividual"
                label="公积金个人"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="pensionEnterpriseBase"
                label="养老企业基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="proportionOfPensionEnterprises"
                label="养老企业比例"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="personalPensionBase"
                label="养老个人基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="personalPensionRatio"
                label="养老个人比例"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="oldAgeIndividual"
                label="养老个人"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="unemploymentEnterpriseBase"
                label="失业企业基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="proportionOfUnemployedEnterprises"
                label="失业企业比例"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="unemployedEnterprise"
                label="失业企业"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="theNumberOfUnemployedIndividuals"
                label="失业个人基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="percentageOfUnemployedIndividuals"
                label="失业个人比例"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="unemployedIndividual"
                label="失业个人"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="medicalEnterpriseBase"
                label="医疗企业基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="proportionOfMedicalEnterprises"
                label="医疗企业比例"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="medicalEnterprise"
                label="医疗企业"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="medicalPersonalBase"
                label="医疗个人基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="medicalIndividual"
                label="医疗个人"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="baseOfIndustrialInjuryEnterprises"
                label="工伤企业基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="proportionOfIndustrialInjuryEnterprises"
                label="工伤企业比例"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="industrialInjuryEnterprise"
                label="工伤企业"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="fertilityEnterpriseBase"
                label="生育企业基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="proportionOfFertilityEnterprises"
                label="生育企业比例"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="childbearingEnterprise"
                label="生育企业"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop=" baseOfSeriousIllness"
                label="大病企业基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="fertilityEnterpriseBase"
                label="生育企业基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="proportionOfFertilityEnterprises"
                label="生育企业比例"
                width="120"
              ></el-table-column>
              <el-table-column prop="" label="大病企业比例" width="120">
              </el-table-column>
              <el-table-column
                prop="bigDiseaseEnterprise"
                label="大病企业"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="personalBaseOfSeriousIllness"
                label="大病个人基数"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop=""
                label="大病个人"
                width="120"
              ></el-table-column>
              <el-table-column
                prop="providentFundNotes"
                label="公积金备注"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="socialSecurityNotes"
                label="社保备注"
                width="120"
              >
              </el-table-column>
              <el-table-column
                prop="personalProportionOfSeriousIllness"
                label="大病个人比例"
                width="120"
              >
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </div>
</template>

<script>
import * as XLSX from "xlsx";
import FileSaver from "file-saver";
import { historysAPI, historysAPI2 } from "@/api/social";
export default {
  data() {
    return {
      hiList: [],
      hiList2: [],
      loading: false,
      activeName: "second",
      yearMonth: "2020",
    };
  },
  methods: {
    // 切换分页
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getMonthFn() {
      console.log(this.yearMonth);
      this.getFn();
    },
    // 获取历史社保信息列表
    async getFn() {
      const res = await historysAPI({ yearMonth: this.yearMonth });
      this.hiList = res.data;
    },
    // 获取历史归档列表
    async isShowFn(obj, index) {
      if (!obj.act) {
        const res = await historysAPI2({
          month: obj.yearsMonth,
          yearMonth: this.yearMonth,
        });
        this.$set(this.hiList[index], "hiList2", res.data);
        this.loading = false;
        this.$set(this.hiList[index], "act", true);
      } else {
        this.$set(this.hiList[index], "act", false);
      }
    },
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

    // 导出表格功能
    exportExcel() {
      var xlsxParam = { raw: true };
      let fix = document.querySelector(".el-table__fixed");
      let wb;
      if (fix) {
        //判断要导出的节点中是否有fixed的表格，如果有，转换excel时先将该dom移除，然后append回去
        wb = XLSX.utils.table_to_book(
          document.querySelector("#socialTable").removeChild(fix),
          xlsxParam
        );
        document.querySelector("#socialTable").appendChild(fix);
      } else {
        wb = XLSX.utils.table_to_book(document.querySelector("#socialTable"));
      }
      let wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array",
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          `${this.Month}报表.xlsx`
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      this.$message({
        message: "表格导出成功！（有延迟请稍等)",
        type: "success",
      });
      return wbout;
    },
  },
  async mounted() {
    this.getFn();
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  .historicalBox {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    margin-top: 20px;
    .el-main {
      .act {
        color: rgb(0, 160, 255) !important;
        border-color: #409eff !important;
      }
      width: 98%;
      margin: 15px auto;
      background: white;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
      .el-row:first-of-type {
        border-bottom: 3px solid #ccc;
        overflow: hidden;
        padding-bottom: 15px;
        .header {
          height: 60px;
          border-bottom: 1px solid #e2e2e2;
          p {
            float: left;
            width: 110px;
            height: 59px;
            line-height: 54px;
            font-size: 18px;
            font-weight: 700;
            color: #409eff;
            text-align: center;
            margin-left: 10px;
            border-bottom: 2px solid #409eff;
          }
          .block {
            float: right;
            margin-right: 10px;
            margin-top: 5px;
          }
        }
      }
      .header-b {
        .el-col {
          height: 60px;
          cursor: pointer;
        }
        .el-col:first-of-type {
          div {
            text-indent: 1em;
            line-height: 75px;
          }
        }
        .el-col:nth-of-type(2) {
          div {
            p {
              height: 30px;
            }
            p:first-of-type {
              font-size: 16px;
              color: #555;
              span {
                font-size: 13px;
                color: #999;
                margin-left: 5px;
              }
            }
            p:last-of-type {
              font-size: 13px;
              color: #555;
              margin-left: 5px;
            }
          }
        }
        ul {
          height: 60px;
          margin: 8px 0;
          border-left: 1px solid #ccc;
          li {
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 13px;
            color: #999;
            margin-left: 5px;
          }
          li:last-of-type {
            font-size: 20px;
            color: #555;
          }
        }
      }
      .footer {
        // display: none;
        .footer_t {
          ul {
            li {
              height: 40px;
              line-height: 40px;
              font-size: 14px;
              color: #555;
              span {
                width: 15px;
                height: 15px;
                display: inline-block;
                margin-right: 5px;
                margin-left: 30px;
                vertical-align: middle;
              }
              float: left;
            }
            li:first-of-type {
              span {
                background: rgb(197, 240, 255);
              }
            }
            li:nth-of-type(2) {
              span {
                background: rgb(137, 250, 191);
              }
            }
            li:nth-of-type(3) {
              span {
                background: rgb(255, 218, 214);
              }
            }
            li:nth-of-type(4) {
              span {
                background: #ffe7c8;
              }
            }
            li:last-of-type {
              span {
                background: rgb(254, 252, 214);
              }
            }
          }
        }
        .footer_r {
          span {
            width: 15px;
            height: 15px;
            display: inline-block;
            margin: 0 5px;
            background: rgb(137, 250, 191);
          }
          .el-button {
            width: 56px;
            height: 28px;
            line-height: 28px;
            font-size: 12px;
            border-radius: 3px;
          }
        }
      }
      .table {
        width: 100%;
        margin: 0 auto;
        .el-table {
          height: 284px;
          width: 1200px;
          .el-table-column__label {
            height: 30px;
            border: 1px solid red;
            background-color: green;
          }
          /deep/ th {
            padding: 0;
            height: 44px;
          }

          /deep/ td {
            padding: 0;
            height: 49px;
          }
        }
      }
    }
  }
}
</style>