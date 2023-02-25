<template>
  <div class="payrollReport">
    <!-- 工资报表 -->
    <el-main>
      <el-row>
        <el-col class="header">
          <p>工资报表</p>
        </el-col>
      </el-row>
      <el-row class="footer">
        <el-button type="primary">导出</el-button>
      </el-row>
      <el-row class="table" :span="24">
        <el-table height="250" border style="height: 284px" cellpadding="0" cellspacing="0" :header-cell-style="{
            height: '35px',
        }">
          <el-table-column prop="" label="序号" width="50" height="20">
          </el-table-column>
          <el-table-column prop="" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="" label="手机号" width="120">
          </el-table-column>
          <el-table-column prop="" label="工号" width="120">
          </el-table-column>
          <el-table-column prop="" label="部门名称" width="120"> </el-table-column>
          <el-table-column prop="" label="在职状态" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金个人" width="120">
          </el-table-column>
          <el-table-column prop="" label="社保个人" width="120">
          </el-table-column>
          <el-table-column prop="" label="社保企业" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金企业" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金社保企业" width="120">
          </el-table-column>
          <el-table-column prop="" label="基本工资" width="120">
          </el-table-column>
          <el-table-column prop="" label="岗位工资" width="120">
          </el-table-column>
          <el-table-column prop="" label="福利津贴" width="120">
          </el-table-column>
          <el-table-column prop="" label="考勤扣款" width="120">
          </el-table-column>
          <el-table-column prop="" label="税前工资合计" width="120">
          </el-table-column>
          <el-table-column prop="" label="应纳税工资" width="120">
          </el-table-column>
          <el-table-column prop="" label="应扣税" width="120">
          </el-table-column>
          <el-table-column prop="" label="实发工资" width="120">
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="footer_button">
        <el-button type="primary">归档03月份报表</el-button>
        <el-button type="primary">新建报表</el-button>
        <el-button type="primary">取消</el-button>
      </el-row>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
     height:0,
    };
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  .payrollReport {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    margin-top: 20px;
    .el-main {
      width: 98%;
      margin: 15px auto;
      background: white;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
      .el-row:first-of-type {
        overflow: hidden;
        // padding-bottom: 15px;
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
        height: 50px;
        .el-button {
          float: right;
          width: 56px;
          height: 28px;
          line-height: 28px;
          font-size: 12px;
          border-radius: 3px;
          margin-left: 42px;
          margin-top: 10px;
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