<template>
  <!-- 月份报表 -->
  <div class="box">
    <el-card>
      <div class="top">
        <h2 class="centInfo">20233月人事报表</h2>
      <span >考勤统计</span>
      </div>
      <component :is="allList" />
    </el-card>
  </div>
</template>

<script>
import allList from "./components/refort-list";
export default {
  name: "RefortList",
  components: { allList },
  data() {
    return {
      allList: "allList",
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 90%;
  height: 100%;
  margin: 20px;
  .el-card {
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
