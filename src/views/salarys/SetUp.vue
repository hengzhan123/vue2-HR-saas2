<template>
<!-- 工资设置 -->
  <div class="setUpBox">
    <el-main class="setUp_top">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="计薪设置" name="first">
          <el-row class="payroll">
            <div style="margin: 20px"></div>
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="formLabelAlign"
            >
              <el-form-item label="对应社保自然月" label-width="130px">
                <el-select v-model="formInline.region" placeholder="当月">
                  <el-option label="当月" value="shanghai"></el-option>
                  <el-option label="次月" value="beijing"></el-option>
                </el-select>
                <i class="el-icon-question"></i>
              </el-form-item>
              <el-form-item label="社保数据来源" label-width="130px">
                <el-input
                  v-model="formLabelAlign.region"
                  disabled="disabled"
                ></el-input>
                <i class="el-icon-question"></i>
              </el-form-item>
              <el-form-item label="考勤数据来源" label-width="130px">
                <el-input
                  v-model="formLabelAlign.type"
                  disabled="disabled"
                ></el-input>
                <i class="el-icon-question"></i>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>重置</el-button>
              </el-form-item>
            </el-form>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="津贴设置" name="second">
          <el-row class="payroll">
            <div style="margin: 20px"></div>
            <el-form
              :label-position="labelPosition2"
              label-width="80px"
              :model="formLabelAlign"
            >
              <el-form-item label="通用方案" label-width="130px">
                <el-input class="inputBox"></el-input>
              </el-form-item>
              <el-form-item label="备注" label-width="130px">
                <el-input class="inputBox"></el-input>
              </el-form-item>
              <el-form-item label="津贴名称" label-width="130px" class="subsidy"
                ><el-input
                  v-model="formLabelAlign.type"
                  disabled="disabled"
                ></el-input>

                <el-select
                  v-model="formInline.region"
                  placeholder="每月固定"
                  class="areaBox"
                >
                  <el-option label="每月固定" value="shanghai"></el-option>
                  <el-option
                    label="每日出勤"
                    value="beijing"
                  ></el-option> </el-select
                ><i class="el-icon-question"></i>
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="" label-width="130px" class="subsidy"
                ><el-input
                  v-model="formLabelAlign.type"
                  disabled="disabled"
                ></el-input>

                <el-select
                  v-model="formInline.region"
                  placeholder="每月固定"
                  class="areaBox"
                >
                  <el-option label="每月固定" value="shanghai"></el-option>
                  <el-option
                    label="每日出勤"
                    value="beijing"
                  ></el-option> </el-select
                ><i class="el-icon-question"></i>
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="" label-width="130px" class="subsidy"
                ><el-input
                  v-model="formLabelAlign.type"
                  disabled="disabled"
                ></el-input>

                <el-select
                  v-model="formInline.region"
                  placeholder="每月固定"
                  class="areaBox"
                >
                  <el-option label="每月固定" value="shanghai"></el-option>
                  <el-option
                    label="每日出勤"
                    value="beijing"
                  ></el-option> </el-select
                ><i class="el-icon-question"></i>
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="适用计税方式" label-width="130px">
                <el-radio v-model="radio" label="税前">税前</el-radio>
                <el-radio v-model="radio" label="税后">税后</el-radio>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>重置</el-button>
              </el-form-item>
            </el-form>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      labelPosition: "left",
      labelPosition2: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
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
  .setUpBox {
    width: 97%;
    margin: 0 auto;
    .setUp_top {
      .payroll {
        width: 99%;
        margin: 0 auto;
        padding-left: 15px;
        padding-bottom: 15px;
        box-shadow: 0px 0px 10px rgb(213, 213, 213);
        .el-form-item {
          height: 60px;
          line-height: 60px;
          .el-select {
            width: 280px;
            .el-option {
              height: 20px;
              line-height: 20px;
            }
          }
          .areaBox {
            margin-left: 10px;
          }
          .el-input {
            height: 36px;
            width: 280px;
          }
          .el-icon-question {
            font-size: 20px;
            margin: 0 10px;
            color: #ccc;
          }
          .el-radio:last-of-type{
            margin-left: 25px;
          }
          .el-button {
            width: 80px;
            height: 38px;
            line-height: 38px;
            font-size: 14px;
            color: #fff;
          }
          .el-button:first-of-type {
            margin-left: 50px;
          }
          .el-button:last-of-type {
            color: #606266;
          }
          .inputBox{
            width: 400px;
          }

        }
        .subsidy{
            .el-input{
                width: 200px;
            }
            .el-select{
                width: 200px;
            }
        }
      }
    }
  }
}
</style>