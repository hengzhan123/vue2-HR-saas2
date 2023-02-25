<template>
  <div class="socialBox">
    <el-main class="social_top">
      <el-row>
        <el-col :span="20">
          <div class="grid-content bg-purple social_t_l">
            <i class="el-icon-info"></i>本月：社保在缴 公积金在缴 增员 减员 入职
            离职
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple social_t_r">
            <router-link to="/layout/historical" class="skip">历史归档</router-link>
            <router-link to="/layout/reportforms" class="skip">202001月报表</router-link>
          </div>
        </el-col>
      </el-row>
      <el-row>
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
        <el-col>
          <div class="grid-content bg-purple social_title">社保城市∶</div>
          <el-checkbox-group v-model="checkList" class="checkBox checkText">
            <el-checkbox label="北京"></el-checkbox>
          </el-checkbox-group>
        </el-col>
        <el-col>
          <div class="grid-content bg-purple social_title">公积金城市∶</div>
          <el-checkbox-group v-model="checkList" class="checkBox checkText">
            <el-checkbox label="北京"></el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
    </el-main>
    <el-main class="social-table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="序号" width="50"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="90" sortable> </el-table-column>
        <el-table-column prop="phone" label="手机" width="130" sortable>
        </el-table-column>
        <el-table-column prop="jobNo" label="工号" width="100" sortable>
        </el-table-column>
        <el-table-column prop="department" label="部门" width="120" sortable>
        </el-table-column>
        <el-table-column prop="entryDate" label="入职时间" width="120" sortable>
        </el-table-column>
        <el-table-column prop="leaveDate" label="离职时间" width="120" sortable>
        </el-table-column>
        <el-table-column prop="socialCities" label="社保城市" width="120">
        </el-table-column>
        <el-table-column prop="providentCities" label="公积金城市" width="120">
        </el-table-column>
        <el-table-column prop="socialNumber" label="社保基数" width="100">
        </el-table-column>
        <el-table-column prop="providentNumber" label="公积金基数" width="100">
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"],
      tableData: [
        {
          id: 1,
          name: "cgx",
          phone: "11111111111",
          jobNo: 1000,
          department: "总裁办",
          entryDate: "2016-05-04",
          leaveDate: "2020-05-04",
          socialCities: "北京",
          providentCities: "北京",
          socialNumber: 10000,
          providentNumber: 20000,
        },
        {
          id: 2,
          name: "cgx",
          phone: "11111111111",
          jobNo: 1000,
          department: "总裁办",
          entryDate: "2016-05-04",
          leaveDate: "2020-05-04",
          socialCities: "北京",
          providentCities: "北京",
          socialNumber: 10000,
          providentNumber: 20000,
        },
        {
          id: 3,
          name: "cgx",
          phone: "11111111111",
          jobNo: 1000,
          department: "总裁办",
          entryDate: "2016-05-04",
          leaveDate: "2020-05-04",
          socialCities: "北京",
          providentCities: "北京",
          socialNumber: 10000,
          providentNumber: 20000,
        },
        {
          id: 4,
          name: "cgx",
          phone: "11111111111",
          jobNo: 1000,
          department: "总裁办",
          entryDate: "2016-05-04",
          leaveDate: "2020-05-04",
          socialCities: "北京",
          providentCities: "北京",
          socialNumber: 10000,
          providentNumber: 20000,
        },
        {
          id: 5,
          name: "cgx",
          phone: "11111111111",
          jobNo: 1000,
          department: "总裁办",
          entryDate: "2016-05-04",
          leaveDate: "2020-05-04",
          socialCities: "北京",
          providentCities: "北京",
          socialNumber: 10000,
          providentNumber: 20000,
        },
        {
          id: 6,
          name: "cgx",
          phone: "11111111111",
          jobNo: 1000,
          department: "总裁办",
          entryDate: "2016-05-04",
          leaveDate: "2020-05-04",
          socialCities: "北京",
          providentCities: "北京",
          socialNumber: 10000,
          providentNumber: 20000,
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
  .socialBox {
    width: 99%;
    margin: 15px auto;
    padding-bottom: 50px;
    .social_top {
      width: 98%;
      margin: 0 auto;
      padding: 15px;
      padding-bottom: 40px;
      margin-top: 15px;
      margin-bottom: 15px;
      background: white;
      border-radius: 3px;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
      .social_t_l {
        height: 30px;
        width: 340px;
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
          .social_title{
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
          .checkText{
            line-height: 28px;
          }
          .el-checkbox-group{
            .el-checkbox{
              width: 110px;
            }
          }
        }
      }
    }
    .social-table {
      width: 98%;
      margin: 0 auto;
      padding: 15px;
      margin-top: 15px;
      margin-bottom: 15px;
      background: white;
      border-radius: 3px;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
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