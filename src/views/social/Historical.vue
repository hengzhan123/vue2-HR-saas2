<template>
  <!-- 历史归档 -->
  <div class="historicalBox">
    <el-main>
      <el-row>
        <div class="header">
          <p>全公司</p>
          <div class="block">
            <el-date-picker v-model="value3" type="year" placeholder="选择年">
            </el-date-picker>
          </div>
        </div>
        <el-row :gutter="20" class="header-b">
          <el-col :span="2">
            <div class="grid-content bg-purple">></div>
          </el-col>
          <el-col :span="4"
            ><div class="grid-content bg-purple">
              <p>202001社保报表<span>未归档</span></p>
              <p @click="fn">社保报表</p>
            </div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple">
              <ul>
                <li>企业缴纳</li>
                <li>8804.87</li>
              </ul>
            </div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple">
              <ul>
                <li>个人缴纳</li>
                <li>8804.87</li>
              </ul>
            </div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content bg-purple">
              <ul>
                <li>合计</li>
                <li>17609.74</li>
              </ul>
            </div></el-col
          >
        </el-row>
      </el-row>
      <el-row class="footer" ref="socialShow">
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
          <el-button type="primary">导出</el-button>
        </el-col>
        <el-col class="table" :span="24">
          <el-table :data="tableData" height="250" border style="height: 284px">
            <el-table-column prop="id" label="序号" width="50" height="20">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="entryDate" label="入职时间" width="120">
            </el-table-column>
            <el-table-column prop="phone" label="手机" width="120">
            </el-table-column>
            <el-table-column prop="" label="身份证号码" width="120">
            </el-table-column>
            <el-table-column prop="" label="学历" width="120">
            </el-table-column>
            <el-table-column prop="" label="开户行" width="120">
            </el-table-column>
            <el-table-column prop="" label="一级部门" width="120">
            </el-table-column>
            <el-table-column prop="" label="二级部门" width="120">
            </el-table-column>
            <el-table-column prop="" label="工作城市" width="120">
            </el-table-column>
            <el-table-column prop="" label="社保电脑号" width="120">
            </el-table-column>
            <el-table-column prop="" label="公积金账号" width="120">
            </el-table-column>
            <el-table-column prop="" label="离职时间" width="120">
            </el-table-column>
            <el-table-column prop="" label="户籍类型" width="120">
            </el-table-column>
            <el-table-column prop="" label="参保城市" width="120">
            </el-table-column>
            <el-table-column prop="" label="社保月份" width="120">
            </el-table-column>
            <el-table-column prop="" label="社保基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="社保合计" width="120">
            </el-table-column>
            <el-table-column prop="" label="社保企业" width="120">
            </el-table-column>
            <el-table-column prop="" label="社保个人" width="120">
            </el-table-column>
            <el-table-column prop="" label="公积金城市" width="120">
            </el-table-column>
            <el-table-column prop="" label="公积金月份" width="120">
            </el-table-column>
            <el-table-column prop="" label="公积金基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="公积金企业基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="公积金企业比例" width="120">
            </el-table-column>
            <el-table-column prop="" label="公积金个人基数" width="120">
            </el-table-column>

            <el-table-column prop="" label="公积金个人比例" width="120">
            </el-table-column>
            <el-table-column prop="" label="公积金合计" width="120">
            </el-table-column>
            <el-table-column prop="" label="公积金企业" width="120">
            </el-table-column>
            <el-table-column prop="" label="公积金个人" width="120">
            </el-table-column>
            <el-table-column prop="" label="养老企业基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="养老企业比例" width="120">
            </el-table-column>
            <el-table-column prop="" label="养老个人基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="养老个人比例" width="120">
            </el-table-column>
            <el-table-column prop="" label="养老个人" width="120">
            </el-table-column>
            <el-table-column prop="" label="失业企业基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="失业企业比例" width="120">
            </el-table-column>
            <el-table-column prop="" label="失业企业" width="120">
            </el-table-column>
            <el-table-column prop="" label="失业个人基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="失业个人比例" width="120">
            </el-table-column>
            <el-table-column prop="" label="失业个人" width="120">
            </el-table-column>
            <el-table-column prop="" label="医疗企业基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="医疗企业比例" width="120">
            </el-table-column>
            <el-table-column prop="" label="医疗企业" width="120">
            </el-table-column>
            <el-table-column prop="" label="医疗个人基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="医疗个人" width="120">
            </el-table-column>
            <el-table-column prop="" label="工伤企业基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="工伤企业比例" width="120">
            </el-table-column>
            <el-table-column prop="" label="工伤企业" width="120">
            </el-table-column>
            <el-table-column prop="" label="生育企业基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="生育企业比例" width="120">
            </el-table-column>
            <el-table-column prop="" label="生育企业" width="120">
            </el-table-column>
            <el-table-column prop="" label="大病企业基数" width="120">
            </el-table-column>
            <el-table-column prop="" label="生育企业基数" width="120">
            </el-table-column>
            <el-table-column
              prop=""
              label="生育企业比例"
              width="120"
            ></el-table-column>
            <el-table-column prop="" label="大病企业比例" width="120">
            </el-table-column>
            <el-table-column prop="" label="大病企业" width="120">
            </el-table-column>
            <el-table-column prop="" label="大病个人基数" width="120">
            </el-table-column>
            <el-table-column
              prop=""
              label="大病个人"
              width="120"
            ></el-table-column>
            <el-table-column prop="" label="公积金备注" width="120">
            </el-table-column>
            <el-table-column prop="" label="社保备注" width="120">
            </el-table-column>
            <el-table-column prop="" label="大病个人比例" width="120">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <!-- <el-col class="table" :span="24">
        <el-table :data="tableData" height="250" border style="height: 284px">
          <el-table-column prop="id" label="序号" width="50" height="20">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="entryDate" label="入职时间" width="120">
          </el-table-column>
          <el-table-column prop="phone" label="手机" width="120">
          </el-table-column>
          <el-table-column prop="" label="身份证号码" width="120">
          </el-table-column>
          <el-table-column prop="" label="学历" width="120"> </el-table-column>
          <el-table-column prop="" label="开户行" width="120">
          </el-table-column>
          <el-table-column prop="" label="一级部门" width="120">
          </el-table-column>
          <el-table-column prop="" label="二级部门" width="120">
          </el-table-column>
          <el-table-column prop="" label="工作城市" width="120">
          </el-table-column>
          <el-table-column prop="" label="社保电脑号" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金账号" width="120">
          </el-table-column>
          <el-table-column prop="" label="离职时间" width="120">
          </el-table-column>
          <el-table-column prop="" label="户籍类型" width="120">
          </el-table-column>
          <el-table-column prop="" label="参保城市" width="120">
          </el-table-column>
          <el-table-column prop="" label="社保月份" width="120">
          </el-table-column>
          <el-table-column prop="" label="社保基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="社保合计" width="120">
          </el-table-column>
          <el-table-column prop="" label="社保企业" width="120">
          </el-table-column>
          <el-table-column prop="" label="社保个人" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金城市" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金月份" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金企业基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金企业比例" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金个人基数" width="120">
          </el-table-column>

          <el-table-column prop="" label="公积金个人比例" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金合计" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金企业" width="120">
          </el-table-column>
          <el-table-column prop="" label="公积金个人" width="120">
          </el-table-column>
          <el-table-column prop="" label="养老企业基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="养老企业比例" width="120">
          </el-table-column>
          <el-table-column prop="" label="养老个人基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="养老个人比例" width="120">
          </el-table-column>
          <el-table-column prop="" label="养老个人" width="120">
          </el-table-column>
          <el-table-column prop="" label="失业企业基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="失业企业比例" width="120">
          </el-table-column>
          <el-table-column prop="" label="失业企业" width="120">
          </el-table-column>
          <el-table-column prop="" label="失业个人基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="失业个人比例" width="120">
          </el-table-column>
          <el-table-column prop="" label="失业个人" width="120">
          </el-table-column>
          <el-table-column prop="" label="医疗企业基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="医疗企业比例" width="120">
          </el-table-column>
          <el-table-column prop="" label="医疗企业" width="120">
          </el-table-column>
          <el-table-column prop="" label="医疗个人基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="医疗个人" width="120">
          </el-table-column>
          <el-table-column prop="" label="工伤企业基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="工伤企业比例" width="120">
          </el-table-column>
          <el-table-column prop="" label="工伤企业" width="120">
          </el-table-column>
          <el-table-column prop="" label="生育企业基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="生育企业比例" width="120">
          </el-table-column>
          <el-table-column prop="" label="生育企业" width="120">
          </el-table-column>
          <el-table-column prop="" label="大病企业基数" width="120">
          </el-table-column>
          <el-table-column prop="" label="生育企业基数" width="120">
          </el-table-column>
          <el-table-column
            prop=""
            label="生育企业比例"
            width="120"
          ></el-table-column>
          <el-table-column prop="" label="大病企业比例" width="120">
          </el-table-column>
          <el-table-column prop="" label="大病企业" width="120">
          </el-table-column>
          <el-table-column prop="" label="大病个人基数" width="120">
          </el-table-column>
          <el-table-column
            prop=""
            label="大病个人"
            width="120"
          ></el-table-column>
          <el-table-column prop="" label="公积金备注" width="120">
          </el-table-column>
          <el-table-column prop="" label="社保备注" width="120">
          </el-table-column>
          <el-table-column prop="" label="大病个人比例" width="120">
          </el-table-column>
        </el-table>
      </el-col> -->
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      activeName: "second",
      tableData: [
        {
          id: 1,
          name: "cgx",
          entryDate: "2016-05-04",
          phone: "11111111111",
        },
      ],
      value3: "",
    };
  },
  methods: {
    fn(){
      this.isShow = !this.isShow
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
      }
      .footer {
        display: none;
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
        }
      }
    }
  }
}
</style>