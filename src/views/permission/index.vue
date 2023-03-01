<template>
    <div>
        <div class="box">
        <el-card>
            <!-- 头部 -->
            <div class="header">
                <el-button type="primary" icon="el-icon-edit" size="small" @click="addMenu(1,'0')">添加菜单</el-button>
            </div>
            <!-- 列表 -->
<el-table
      :data="tablede"
      row-key="id"
      style="width: 97%">
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
      <template  v-slot="{row}" >
        <el-button type="text" v-if="row.type==1" size="small" @click="addOpenFn(2,row.id)">添加</el-button>
        <el-button type="text" size="small" @click="lookFn(row.id)">编辑</el-button>
        <el-button type="text" size="small" >删除</el-button>
      </template>
    </el-table-column> 
    </el-table>
</el-card>
<!-- 添加权限  弹框 -->
    <perChildren ref="perChildren"/>
    <!-- 添加菜单弹窗 -->
    <perMenu ref="perMenu"/>
    </div>
    </div>
</template>

<script>
import {getPermissionAPI} from "@/api"
import perChildren from "./components/perChildren.vue"
import perMenu from "./components/perMenu.vue"
import {transTree} from "@/utils/index"
    export default {
        data(){
           return{
            tablede: [],
          
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
                // 通过封装的树形控件显示数据 让pid为0的为第一层
                this.tablede=transTree(res.data,'0')
            },
            handleNodeClick(data) {
            console.log(data);
        },
            // 点击添加权限弹框
            addOpenFn(){
                this.$refs.perChildren.dialogVisible=true
            },
            // 点击打开添加菜单弹窗
            addMenu(){
                this.$refs.perMenu.dialogVisible=true
            },
            // 点击打开查看弹窗
            lookFn(id){
                this.$refs.perMenu.dialogVisible=true
            }
        },
        components:{
            perChildren,
            perMenu
        }
 }
</script>

<style lang="less" scoped>
.el-card__body{
    padding: 0 !important;
}
.box{
    padding: 20px;
    width:97%;
    el-card{
    width: 100%;
   
}

}
.header{
    text-align: right;
    width: 100%;
}

</style>