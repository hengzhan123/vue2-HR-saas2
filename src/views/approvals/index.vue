<template>
  <!-- 审批 -->
  <div class="top-box">
    <!-- 头部 -->
    <el-card>
      <!-- <template>
        <span style="background-color: #e6f7ff; padding: 5px 10px;border-radius: 3px;border: 1px solid #91d5ff;"><i class="el-icon-info" style="color:#409EFF"></i>当前审批中 0 本月审批通过 1 本月审批驳回 0</span>
      </template> -->
      <template>
        <el-button size="mini" class="top-right" type="primary" @click="$router.push('/security')">流程设置</el-button>
      </template>
    </el-card>
    <!-- 主要内容 -->
    <el-card style="margin-top: 10px;">
      <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
        <!-- <el-table-column type="selection" width="30" /> -->
        <el-table-column type="index" width="80" label="序号" />
        <el-table-column prop="processName" label="审批类型" sortable>
        </el-table-column>
        <el-table-column prop="username" label="申请人" sortable>
        </el-table-column>
        <el-table-column prop="procCurrNodeUserName" label="审批人" sortable>
        </el-table-column>
        <el-table-column prop="procApplyTime" :formatter="formatter" label="审批发起时间" sortable>
        </el-table-column>
        <el-table-column prop="processState" :formatter="statusFormatter" label="审批状态" sortable>
        </el-table-column>
        <el-table-column prop="address" label="操作" width="100">
          <template  slot-scope="scope">
        <el-button type="text" size="small" @click="$router.push({'path':'/viewSee/'+scope.row.processId})">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="query.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="query.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
    </el-card>
  </div>
</template>

<script>
import{dateFormat} from "@/utils"
import{applicationsListAPI,} from "@/api"
export default {
  data() {
    return {
      query:{
        page:1,
        pagesize:10
          },
      total:0,
      tableData: [],
      processId:""
    }
  },
  methods: {
     //当前显示的条数发生改变时触发
      handleSizeChange(size) {
          this.query.pagesize=size
          this.applicationsListFn()
       },
         //当前页码发生改变时触发
         handleCurrentChange(page) {
          this.query.page=page
          this.applicationsListFn()
         },
     async applicationsListFn(){
      const res= await applicationsListAPI(this.query)
      this.tableData=res.data.rows
      this.total=res.data.total
      this.processId=res.data.rows.processId
     },
      formatter(row,column){
        return dateFormat(row.procApplyTime)        
   },
     statusFormatter(row,column){
      const processState=row.processState
      if(processState==1){
       return "审批中"
      }else if(processState==2){
        return "审批通过"
      }else if(processState==3){
        return "审批不通过"
      }else{
        return "撤销"
      }
     },
  },
  created(){
    this.applicationsListFn()
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
      margin-bottom: 10px;
    }
    .block {
      text-align: center;
      .el-pagination {
        margin-top: 10px;
      }
    }
  }
}
</style>