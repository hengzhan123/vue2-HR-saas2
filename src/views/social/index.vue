<template>
  <div class="socialBox">
    <!-- 社保---首页 -->
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
            <router-link to="/socialhis" class="skip">历史归档</router-link>
            <router-link to="/reportforms" class="skip"
              >202001月报表</router-link
            >
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <p>部门:</p>
          <p>社保城市∶</p>
          <p>公积金城市∶</p>
        </el-col>
        <el-col :span="20">
            <el-checkbox-group
              v-model="checkList"
              v-for="obj in deList"
              :key="obj.id"
              class="checkBox"
            >
              <el-checkbox :label="obj.name"></el-checkbox>
            </el-checkbox-group>
          <el-checkbox-group v-model="checkList" class="checkBox checkText">
            <el-checkbox label="北京"></el-checkbox>
          </el-checkbox-group>
            <el-checkbox-group  v-model="checkList" class="checkBox checkText">
            <el-checkbox label="北京"></el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
    </el-main>
    <el-main class="social-table">
      <el-table
        :data="
          soList.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        stripe
        style="width: 100%"
        @row-click="changeFn"
      >
        <el-table-column type="index" prop="id" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="90" sortable>
        </el-table-column>
        <el-table-column prop="mobile" label="手机" width="130" sortable>
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" width="100" sortable>
        </el-table-column>
        <el-table-column
          prop="departmentName"
          label="部门"
          width="120"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="timeOfEntry"
          label="入职时间"
          width="120"
          sortable
        >
        </el-table-column>
        <el-table-column prop="leaveDate" label="离职时间" width="120" sortable>
        </el-table-column>
        <el-table-column
          prop="participatingInTheCity"
          label="社保城市"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="providentFundCity"
          label="公积金城市"
          width="120"
        >
        </el-table-column>
        <el-table-column prop="socialSecurityBase" label="社保基数" width="100">
        </el-table-column>
        <el-table-column
          prop="providentFundBase"
          label="公积金基数"
          width="100"
        >
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="pageSize"
          :total="soList.length"
          layout="total,sizes, prev, pager, next, jumper"
          background
        >
        </el-pagination>
      </div>
    </el-main>
  </div>
</template>

<script>
import { socialAPI, departmentAPI } from "@/api/social";
export default {
  data() {
    return {
      soList: [],
      checkList: ["选中且禁用", "复选框 A"],
      pageSize: 10, //每页的数据条数
      currentPage: 1, //当前页码
      total: 25, //总条数
      deList: [],
    };
  },
  methods: {
    // 切换分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    // 获取社保列表
    async getFn() {
      const res = await socialAPI({
        page: 1,
        pageSize: 30,
        total: 0,
      });
      this.soList = res.data.rows;
    },
    // 点击列表行跳转到员工详情页并传id
    changeFn(row, column, event) {
      console.log(row.id);
      this.$router.push({
        path: "/details",
        query: {
          id: row.id,
        },
      });
    },
  },
  async mounted() {
    this.getFn();
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
        .el-col:last-of-type{
          .el-checkbox-group{
            float: left;
            width: 120px;
            line-height: 20px;
          }
          .checkText{
            clear: left;
            line-height: 22px;
          }
        }
        .el-col:first-of-type{
          p{
            color: #555;
            font-size: 14px;
            font-weight: bold;
            text-indent: 1.2em;
          }
          p:first-of-type{
            height: 75px;
          }
          p:nth-of-type(2){
            margin-top: 20px;
          }
          p:not(:first-of-type){
            line-height: 30px;
          }
        }
      }
    }
    .social-table {
      // width: 1150px;
      width: 98%;
      margin: 0 auto;
      padding: 15px;
      margin-top: 15px;
      margin-bottom: 15px;
      background: white;
      border-radius: 3px;
      box-shadow: 0px 0px 10px rgb(177, 177, 177);
      // color: red;
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