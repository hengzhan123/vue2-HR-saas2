<template>
  <!-- 考勤-月份报表组件 -->
  <div class="box">
    <div class="tabInfo">
      <a class="el-button el-button--primary el-button--mini" title="导出">导出</a>
    </div>
    <!-- 考勤统计表格 -->
    <el-table   fit highlight-current-row style="width: 100%; margin-top: 10px;" border>
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="workNumber" label="工号" width="100" />
      <el-table-column prop="mobile" label="手机号" width="200" />
      <el-table-column prop="department" label="部门" width="200" />
      <el-table-column prop="leaveDays" label="事假" width="100" />
      <el-table-column prop="dayOffLeaveDays" label="调休" width="100" />
      <el-table-column prop="normalDays" label="正常" width="100" />
      <el-table-column prop="laterTimes" label="迟到次数" width="100" />
      <el-table-column prop="earlyTimes" label="早退次数" width="100" />
      <el-table-column prop="averageDailyNaturalDays" label="日均时长" width="150" />
      <el-table-column prop="absenceDays" label="旷工天数" width="100" />
      <el-table-column prop="whetherItIsFullOfWork" label="是否全勤" width="100" />
      <el-table-column prop="actualAttendanceDaysAreOfficial" label="实际出勤天数" width="180" />
      <el-table-column prop="attendanceDay" label="应出勤工作日" width="120" />
      <el-table-column prop="salaryStandard" label="计薪标准" width="100" />
      <el-table-column prop="officialSalaryDays" label="计薪天数" width="150" />
    </el-table>
    <!-- 数据表格  -->
    <div class="butList">
      <el-tooltip class="item" effect="dark" content="将当前报表存放至归档，归档可以多次，但只保留最后一次" placement="top-start">
        <el-button type="primary" size="small">归档3月份报表</el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="开始做下月考勤" placement="top-start">
        <el-button type="primary" size="small">新建报表</el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "RefortList",
  data() {
    return {
    };
  },


};
</script>

<style lang="less" scoped>

.box {
  width: 100%;
  overflow:auto;
  .tabInfo {
    text-align: right;
    padding: 0 0 15px;
  }
  .butList {
    margin-top: 15px;
    text-align: center;
    background: #fff;
  }
}
</style>
