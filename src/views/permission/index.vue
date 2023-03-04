<template>
    <div>
        <div class="box">
        <el-card>
            <!-- 头部 -->
            <div class="header">
                <el-button type="primary" icon="el-icon-edit" size="small" @click="addOpenFn(1,'0')">添加菜单</el-button>
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
        <el-button type="text" size="small" @click="EditFn(row.id)">编辑</el-button>
        <el-button type="text" size="small" @click="delFn(row.id)">删除</el-button>
      </template>
    </el-table-column> 
    </el-table>
</el-card>
<!-- 添加权限  弹框 -->
    <perChildren ref="perChildren" @addFn="addFns" :distinguish="distinguish"/>
    <!-- 添加菜单弹窗 -->
    <!-- <perMenu ref="perMenu"/> -->
    </div>
    </div>
</template>

<script>
import {addPermissionAPI, getIdDetailAPI, getPermissionAPI,updatePermissionAPI,delPermissionAPI} from "@/api"
import perChildren from "./components/perChildren.vue"
// import perMenu from "./components/perMenu.vue"
import {transTree} from "@/utils/index"
    export default {
        data(){
           return{
            tablede: [],
            type:0,
            pid:0,
            distinguish:false      //区分 弹窗编辑还是新增
           }
        } ,
        created(){
            this.getPermissionList();
        },
        methods:{
            // 获取权限信息列表
            async getPermissionList(){
                const res=await getPermissionAPI()
                // console.log(res);
                // 通过封装的树形控件显示数据 让pid为0的为第一层
                this.tablede=transTree(res.data,'0')
            },
             // 点击添加权限弹框 传type，pid判断是菜单添加还是表格添加
             addOpenFn(type,pid){
                this.distinguish=true
                this.$refs.perChildren.dialogVisible=true;
                this.$refs.perChildren.ruleForm.type=type;
                this.$refs.perChildren.ruleForm.pid=pid             
            },
              // 点击打开编辑弹窗
              async EditFn(id){
                this.distinguish=false
                this.$refs.perChildren.dialogVisible=true
                // console.log(id);
                    const res2=await getIdDetailAPI(id);
                    // console.log(res2);
                    // 将接口获取的数据传给弹窗子组件
                    this.$refs.perChildren.ruleForm=res2.data 
            },
            // 新增或编辑权限
            async addFns(ruleForm){
                console.log(ruleForm);
                 if(!this.distinguish){    //编辑更新
                    await updatePermissionAPI(ruleForm)                
                 }else{     // 新增
                    await addPermissionAPI(ruleForm)
                }             
                this.getPermissionList()
            }, 
            // 删除权限 
          async delFn(did){
            // console.log(did);
                await delPermissionAPI(did);
                this.getPermissionList()
            }    
        },
        components:{
            perChildren,
            // perMenu
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