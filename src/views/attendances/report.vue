<template>
  <!-- 月份报表 -->
  <div class="box">
    <el-card>
      <div class="top">
        <h2 class="centInfo">{{this.$route.params.month}}月人事报表</h2>
      <span >考勤统计</span>
      </div>
      <component :is="allList" :show-height="showHeight" :month="this.$route.params.month"
       @archivingReportForm="archivingReportForm" />
    </el-card>
  </div>
</template>

<script>
import allList from "./components/refort-list";
import {getReportsAPI} from "@/api"
export default {
  name: "RefortList",
  components: { allList },
  data() {
    return {
      allList: "allList",
      activeName:'first',
      showHeight:40
    };
  },
  methods:{
    archivingReportForm() {
      this.$confirm(
        '报表归档将覆盖上一次归档记录，无法恢复。',
        '归档确认'
      )
        .then(async() => {
          await getReportsAPI({ month: this.$route.params.month })
          this.$message.success('归档报表成功')
        })
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  // width: 90%;
  width: 84vw;
  height: 100%;
  margin: 20px;
  .el-card {
    // width: 100%;
    .top{
      border-bottom: solid 1.5px #ccc;
          .centInfo {
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      color: #666;
    }
    
    span {
        font-size: 16px;
        color: #409eff;
        border-bottom: 2px solid#409eff;;
        padding-bottom: 13px;
      }

    }

  }
}
</style>
