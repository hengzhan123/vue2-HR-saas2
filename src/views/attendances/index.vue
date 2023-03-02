<template>
  <div class="box">
    <el-card>
      <!-- 考勤头部内容 -->
      <el-row style="padding: 5px">
        <el-col :span="12">
          <span style="background-color: #e6f7ff;padding: 5px 10px;border-radius: 3px;border: 1px solid #91d5ff;"><i
              class="el-icon-info" style="color: #409eff"></i>有 0
            条考勤审批尚未处理</span>
        </el-col>
        <el-col :span="6" :push="6">
          <el-button size="mini" type="primary">导入</el-button>
          <el-button size="mini" type="primary" @click="remind = true">提醒</el-button>
          <el-button size="mini" type="primary">设置</el-button>
          <el-button size="mini" type="primary" @click="$router.push('/layout/archiving')">历史归档</el-button>
          <el-button size="mini" type="primary" @click="$router.push('/layout/report')">3月份报表</el-button>
          <!-- <el-button size="mini" type="primary" @click="$router.push('/attendances/report')">3月份报表</el-button>
          <router-link tag="button" type="primary" :to="{name: 'report'}">3月份报表</router-link> -->
        </el-col>
      </el-row>
      <!-- 部门-->
      <el-form ref="form" :model="form" label-width="120px" class="formInfo">
        <el-form-item label="部门：">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="总裁办" name="type"></el-checkbox>
            <el-checkbox label="行政部" name="type"></el-checkbox>
            <el-checkbox label="人事部" name="type"></el-checkbox>
            <el-checkbox label="财务部" name="type"></el-checkbox>
            <el-checkbox label="技术部" name="type"></el-checkbox>
            <el-checkbox label="运营部" name="type"></el-checkbox>
            <el-checkbox label="市场部" name="type"></el-checkbox>
            <el-checkbox label="财务核算部" name="type"></el-checkbox>
            <el-checkbox label="税务管理部" name="type"></el-checkbox>
            <el-checkbox label="薪资管理部" name="type"></el-checkbox>
            <el-checkbox label="java研发部" name="type"></el-checkbox>
            <el-checkbox label="python研发部" name="type"></el-checkbox>
            <el-checkbox label="php研发部" name="type"></el-checkbox>
            <el-checkbox label="北京事业部" name="type"></el-checkbox>
            <el-checkbox label="上海事业部" name="type"></el-checkbox>
            <el-checkbox label="111" name="type"></el-checkbox>
            <el-checkbox label="222" name="type"></el-checkbox>
            <el-checkbox label="333" name="type"></el-checkbox>
            <el-checkbox label="444" name="type"></el-checkbox>
            <el-checkbox label="555" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 考勤状态 -->
        <el-form-item label="考勤状态">
          <el-radio-group v-model="form.resource">
            <el-radio label="支持"></el-radio>
            <el-radio label="矿工"></el-radio>
            <el-radio label="事假"></el-radio>
            <el-radio label="调休"></el-radio>
            <el-radio label="迟到"></el-radio>
            <el-radio label="早退"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 考勤表格 -->
    <el-card class="tabs">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" type="index" label="序号" width="50px">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="address" label="工号" width="100">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="100">
        </el-table-column>
        <el-table-column prop="address" label="部门" width="100">
        </el-table-column>
        <el-table-column prop="address" label="手机" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/1" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/2" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/3" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/4" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/5" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/6" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/7" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/8" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/9" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/10" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/11" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/12" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/13" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/14" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/15" width="100">
        </el-table-column>
        <el-table-column prop="address" label="3/16" width="100">
        </el-table-column>

      </el-table>
    </el-card>
    <!-- 提醒对话框 -->
    <el-dialog title="提醒" :visible.sync="remind" width="300px" center>
      <div class="attenInfo">
        <p>
          系统将通过邮件与短信的形式，对全体员工中存在旷工的考勤进行提醒，该提醒每月仅可发送
          1 次。
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="know">我知道了</el-button>
        <el-button @click="remind = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remind: false,
      form: {
        type: [],
        resource: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "9002",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "1111",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "1111",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "1111",
        },
      ],
    };
  },
  methods: {
    // 提醒
    know() {
      this.remind = false
    },
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 1320px;
  height: 100%;
  //     overflow-x:hidden;
  // overflow-y:hidden;
  // padding: 20px;
  // background: #fff;
  // border-radius: 3px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .el-card {
    margin: 20px 0px 10px 20px;

    .el-form {
      .el-form-item {
        font-weight: 700;
      }
    }
  }

  .tabs {
    width: 98.5%;
    //     height: 100%;
    //     overflow-x:hidden;
    // overflow-y:hidden;
    overflow: auto;
  }

  .el-dialog {
    .attenInfo {
      p {
        line-height: 30px;

        &.check {
          padding: 50px 0 0;
        }

        .el-radio {
          display: inline-block;
          width: 60px;
          padding: 5px 0;
        }
      }
    }
  }

  ::v-deep .dialog-footer {
    text-align: center;
  }

  // 弹窗信息
  ::v-deep .el-dialog__header {
    height: 30px;
    line-height: 30px;
    background: #66b1ff;

    .el-icon-close:before {
      color: #fff;
    }

    .el-dialog__title {
      color: #fff;
    }
  }
}
</style>
