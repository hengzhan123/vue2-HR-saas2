<template>
    <div>
       <!-- 角色管理 -->
       <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="角色管理" name="first" >
       <div>
       <el-button size="mini" type="primary" style="margin: 10px 35px;" @click="newlyBuilt=true">+新增角色</el-button>
        
       <!-- 新建 -->
     <el-dialog title="编辑角色" :visible.sync="newlyBuilt">
     <el-form :model="form">
     <el-form-item label="角色名称" :label-width="formLabelWidth">
     <el-input v-model="form.name" autocomplete="off"></el-input>
     </el-form-item>
     <el-form-item label="角色描述" :label-width="formLabelWidth">
      <el-input v-model="form.description" autocomplete="off"></el-input>
     </el-form-item>
     </el-form>
    <div slot="footer" class="dialog-footer">
    <el-button @click="newlyBuilt = false">取消</el-button>
    <el-button type="primary" @click="newFn">确 定</el-button>
    </div>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog title="编辑角色" :visible.sync="getRevise">
    <el-form :model="form">
    <el-form-item label="角色名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="角色描述" :label-width="formLabelWidth">
      <el-input v-model="form.description" autocomplete="off"></el-input>
    </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
    <el-button @click="getRevise= false">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
    </div>
    </el-dialog>
    <!-- 权限 -->
    <el-dialog title="为【人事经理】分配权限" :visible.sync="permissions">
    <el-form :model="form">
    
    </el-form>
    <div slot="footer" class="dialog-footer">
    <el-button @click="permissions = false">取消</el-button>
    <el-button type="primary" @click="permissions = false">确 定</el-button>
    </div>
    </el-dialog>

    <el-table class="bor" :data="rows" style="width:95%" 
    :default-sort = "{prop: 'date', order: 'descending'}">
    <el-table-column
      type="index"
      label="序号"
      sortable
      width="180">
    </el-table-column>
    <el-table-column

      prop="name"
      label="角色名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button
         type="text" size="small" @click="Assign(scope.row.id)">分配权限</el-button>
        <el-button type="text" size="small" @click="revise(scope.row.id)">修改</el-button>
        <el-button type="text" size="small" @click="open(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
     <el-pagination
      :page-size="6"
      layout="total, prev, pager, next"
      :total="6">
    </el-pagination>
  </div>
</div>
      </el-tab-pane>
      <!-- 公司信息 -->
      <el-tab-pane label="公司信息" name="second">
       <div class="input1">
   <el-form  label-width="80px" :model="formLabelAlign" :disabled="true ">
  <el-form-item label="企业名称" >
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="公司地址">
    <el-input v-model="formLabelAlign.companyAddress"></el-input>
  </el-form-item>
  <el-form-item label="公司电话">
    <el-input v-model="formLabelAlign.companyPhone"></el-input>
  </el-form-item>
  <el-form-item label="邮箱">
    <el-input v-model="formLabelAlign.mailbox"></el-input>
  </el-form-item>
  <el-form-item label="备注">
    <el-input v-model="formLabelAlign.remarks"></el-input>
  </el-form-item>
   </el-form>
</div>
      </el-tab-pane>
      <p class="bq">copyright@ 2023 iHRM 系统 版权所有</p>
    </el-tabs>
  </div>
  </template>
  <script>
  import { mapGetters } from "vuex"
    export default {
      data() {
        return {
         formLabelAlign: {
            "name": "江苏传智播客教育科技股份有限公司",
            "companyAddress": "北京市昌平区建材城西路金燕龙办公楼一层",
            "companyPhone": "400-618-9090",
            "mailbox": "bd@itcastcn",
            "remarks": "传智播客官网-好口碑IT培训机构,一样的教育,不一样的品质",
         },
         activeName: 'first',
         getRevise:false,       //修改
         newlyBuilt: false,     //新建
         permissions: false,    //权限
         form: {
          name: '',
          description:''
         },
         formLabelWidth: '120px'
         }
         },
          methods: {
          handleClick(tab, event) {
          console.log(tab, event);
         },
         formatter(row, column) {
         return row.address;
         },
         //删除
          open(id) {
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
           confirmButtonText: '确定',
           cancelButtonText: '取消',
           type: 'warning'
           }).then(() => {
           this.$message({
            type: 'success',
            message: '删除成功!'
           });
          var index = this.rows.findIndex((rows) => rows.id ==id);
					this.rows.splice(index, 1);
            }).catch(() => {
           this.$message({
            type: 'info',
            message: '已取消删除'
          });          
         });
         },
          //新建
          newFn(){
            if(this.form.name==="" || this.form.description===""){
              alert("不能为空")
              return
            }else{
              let newRows={
             name:this.form.name,
              description:this.form.description
            }
            this.newlyBuilt=false
            this.rows.push(newRows)
            this.form.name=""  
            this.form.description=""
            }
		 }, 
           //修改
           revise(id){
                    this.userId = id;
                    console.log(id)
                    this.form = {
                        name: this.rows.name,
                        description: this.rows.description,
                    };
                    this.getRevise = true;
                },
               confirm(){
                this.getRevise = false;
              this.$set(this.rows, this.userId, this.form);
                  },
                     //权限
               Assign(id){
            this.permissions=true
           },
           },
          created(){
            this.$store.dispatch("setting/listRoles")
          },
          computed:{
            ...mapGetters(["rows"])
          },
     }
    
  </script>
  <style scoped>
  .bor{
   border: 1px rgba(209, 206, 206, 0.5)  solid;
   margin:  20px auto;
  }
  .tiao{
    position: relative;
    left: 1220px;
  }
  .block{
    position: relative;
    left: 1150px;
    bottom: 20px;
  }
  .bq{
   font-size: 14px;
   color: gray;
   margin-left: 550px;
   margin-top: 180px;
  }
  .input1{
    margin: 30px 50px; 
    width: 450px;
  }
</style>