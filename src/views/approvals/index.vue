<template>
  <!-- 审批 -->
  <div class="top-box">
    <!-- 头部 -->
    <el-card>
      <template>
        <span style="background-color: #e6f7ff; padding: 5px 10px;border-radius: 3px;border: 1px solid #91d5ff;"><i class="el-icon-info" style="color:#409EFF"></i>当前审批中 0 本月审批通过 1 本月审批驳回 0</span>
      </template>
      <template>
        <el-button size="mini" class="top-right" type="primary" @click="$router.push('/security')">流程设置</el-button>
      </template>
    </el-card>
    <!-- 主要内容 -->
    <el-card style="margin-top: 10px;">
      <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column type="selection" width="30" />
        <el-table-column type="index" width="80" label="序号" />
        <el-table-column prop="date" label="审批类型" sortable>
        </el-table-column>
        <el-table-column prop="name" label="审批人" sortable>
        </el-table-column>
        <el-table-column prop="name" label="当前审批人" sortable>
        </el-table-column>
        <el-table-column prop="name" label="审批发起时间" sortable>
        </el-table-column>
        <el-table-column prop="name" label="审批状态" sortable>
        </el-table-column>
        <el-table-column prop="address" label="操作" width="100">
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-row class="page">
        <el-pagination background @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 30, 40, 50]" :page-size="10" layout="sizes, prev, pager, next, jumper" :total="1">
        </el-pagination>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      //前往第几页
      currentPage4: 1
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style lang="less" scoped>
.top-box {
  width: 100%;
  height: 100%;
  .el-card {
  margin: 10px;
    .top-right {
      float: right;
    }
    .page {
      text-align: right;
      height: 35px;
      line-height: 60px;

      .el-pagination {
        margin-top: 10px;
      }
    }
  }
}
</style>