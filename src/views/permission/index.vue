<template>
    <div class="box">
        <el-card>
            <div class="header">
                <el-button type="primary" size="small">添加权限</el-button>
            </div>
      
<el-table
      :data="tablede"
      row-key="id"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="菜单名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="code"
        label="权限标识"
        width="200">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
      </el-table-column>
      <el-table-column 
      fixed="right"
      label="操作"
      width="500" >
      <template s>
        <el-button type="text" size="small" @click="addOpenFn">添加权限点</el-button>
        <el-button type="text" size="small" >查看api权限</el-button>
        <el-button type="text" size="small">查看</el-button>
        <el-button type="text" size="small" >删除</el-button>
      </template>
    </el-table-column> 
    </el-table>
</el-card>
<!-- 添加权限  弹框 -->
    <perChildren ref="perChildren"/>
    </div>
</template>

<script>
import {getPermissionAPI} from "@/api"
import perChildren from "./components/perChildren.vue"

    export default {
        data(){
           return{
            tablede: []
           }
        } ,
        created(){
            this.getPermissionList()
        }  ,
        methods:{
            // 获取权限信息列表
            async getPermissionList(){
                const res=await getPermissionAPI()
                console.log(res);
                this.tablede=res.data
            },
            // 点击添加权限弹框
            addOpenFn(){
                this.$refs.perChildren.dialogVisible=true
            }
        },
        components:{
            perChildren
        }
 }
</script>

<style lang="less" scoped>
.box{
    padding: 20px;
    width: 97%;
    el-card{
    width: 100%;
   
}
}
.header{
    text-align: right;
    width: 100%;
}

</style>