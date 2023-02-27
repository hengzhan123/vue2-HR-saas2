<template>
  <!--考勤-历史归档 -->
  <div class="content">
    <el-card>
      <el-row :span="6" class="content">
        <el-col class="title">
        <span>员工历史归档</span>
      </el-col>
      <el-col :span="6" class="calendar">
        <el-date-picker v-model="value1" type="year" placeholder="2023">
        </el-date-picker>
      </el-col>
      </el-row>
      <div class="con">
        <span>该年份无归档报表</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
data(){
  return{
    value1:''
  }
}
}
</script>

<style lang="less" scoped>
.el-card {
  position: relative;
  margin: 20px;
  height: 500px;
    .content{
    display: flex;
  // justify-content: space-between;

  .title {
    margin-left: 10px;
    span {
      font-size: 25px;
      color: #2c3e50;
      border-bottom: 4px solid #8a97f8;
      padding-bottom: 10px;
    }
  }

  .calendar{
    text-align: right;
  }
  }
  .con{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    
  }
}
</style>