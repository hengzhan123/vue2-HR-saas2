<template>
  <div class="reportforms">
    <!-- 社保---报表 新建报表因接口报错原因写不了功能-->
    <el-main>
      <el-row>
        <el-col class="header">
          <p>社保报表</p>
        </el-col>
      </el-row>
      <el-row class="footer">
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
          <el-button type="primary" @click="exportExcel">导出</el-button>
        </el-col>
      </el-row>
      <el-row class="table" :span="24">
        <el-table :data="reList" height="250" border id="socialTable">
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
          <el-table-column
            prop="timeOfEntry"
            :formatter="formatTime"
            label="入职时间"
            width="120"
          >
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
          <el-table-column prop="openingBank" label="开户行" width="120">
          </el-table-column>
          <el-table-column
            prop="firstLevelDepartment"
            label="一级部门"
            width="120"
          >
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
            prop="leaveDate"
            label="离职时间"
            :formatter="formatTime"
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
          <el-table-column prop="socialSecurity" label="社保合计" width="120">
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
            prop="socialSecurityBase"
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
          <el-table-column prop="oldAgeIndividual" label="养老个人" width="120">
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
            prop="baseOfSeriousIllness"
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
      </el-row>
      <el-row class="footer_button">
        <el-button type="primary" @click="placeFn">归档01月份报表</el-button>
        <!-- <el-button type="primary" @click="newFn">新建报表</el-button> -->
        <el-button type="primary" @click="fn">取消</el-button>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import * as XLSX from "xlsx";
import FileSaver from "file-saver";
import { monthAPI, placeAPI } from "@/api/social";
export default {
  data() {
    return {
      reList: [],
      yearMonth: 202001,
    };
  },
  methods: {
    // 点击月份报表取消跳转到社保列表页
    fn() {
      this.$router.push({
        path: "/social",
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
    // 归档01月份报表
    placeFn() {
      this.$confirm(
        "您确认归档当月报表吗？(报表归档将覆盖上一次归档记录，无法恢复)",
        "归档202001报表",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true,
        }
      ).then(() => {
        this.getplace();
      });
    },
    // 
    async getplace() {
      const res = await placeAPI({
        yearMonth: this.yearMonth,
      });
      // 归档成功提示弹框
      if ((res.code = 10000 && (res.message = "操作成功！"))) {
        this.$message({
          message: "操作成功!",
          type: "success",
        });
      }
    },
    // 新建报表
    // newFn(){
    //   this.$confirm(
    //     "您将创建 《 2020年03月 》 报表",
    //     "提示",
    //     {
    //       confirmButtonText: "确定",
    //       cancelButtonText: "取消",
    //       type: "warning",
    //       center: true,
    //     }
    //   ).then(() => {
    //     // this.getplace();
    //   });
    // },

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
    // 获取报表列表数据
    const res = await monthAPI();
    this.reList = res.data;
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  .reportforms {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    margin-top: 20px;
    .el-main {
      height: 760px;
      width: 98%;
      margin: 15px auto;
      background: white;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
      .el-row:first-of-type {
        overflow: hidden;
        padding-bottom: 15px;
        .header {
          height: 56px;
          border-bottom: 1px solid #e2e2e2;
          p {
            float: left;
            width: 110px;
            height: 54px;
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
          }
        }
        .header-b {
          .el-col {
            height: 60px;
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
                color: #999;
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
      }
      .footer {
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
          .el-button {
            width: 56px;
            height: 28px;
            line-height: 28px;
            font-size: 12px;
            border-radius: 3px;
            margin-left: 42px;
          }
        }
      }
      .table {
        height: 800px;
        width: 100%;
        margin: 0 auto;
        .el-table {
          height: 700px !important;
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
            height: 44px;
          }
        }
      }
      .footer_button {
        width: 32%;
        height: 54px;
        margin: 0 auto;
        .el-button {
          height: 34px;
          margin: 10px;
          width: 140px;
          text-align: center;
          line-height: 30px;
        }
        .el-button:nth-of-type(2) {
          width: 100px;
        }
        .el-button:last-of-type {
          width: 70px;
          color: #666;
          background: #ccc;
          border: none;
        }
      }
    }
  }
}
</style>