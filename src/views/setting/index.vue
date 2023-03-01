<template>
    <div>
      <el-card class="box-card">
       <div v-for="o in 1" :key="o" class="text item">
       <!-- 角色管理 -->
       <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="角色管理" name="first" >
       <div>
       <el-button size="mini" type="primary" style="margin: 10px 35px;"  @click="addRoleBtnFn">+新增角色</el-button>
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
         type="text" size="small" @click="Assign(scope.row)">分配权限</el-button>
        <el-button type="text" size="small" @click="revise(scope.row)">修改</el-button>
        <el-button type="text" size="small" @click="open(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
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
</div>
      </el-tab-pane>
      <!-- 公司信息 -->
      <el-tab-pane label="公司信息" name="second">
       <div class="input1">
   <el-form  label-width="80px" :disabled="true ">
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
</el-card>
      <el-dialog title="为【人事经理】分配权限" @close="perDialogCloseFn" :visible.sync="dialogVisible">
        <assign-permission
        v-model="dialogVisible" 
        :PermissionsList="PermissionsList"
        :PermIds="PermIds"
        @addPerEV="addPermissionFn" />
      </el-dialog>
      <!-- 新建 -->
     <el-dialog :title="dialogTitle"
      :visible.sync="showDialog"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      >
     <el-form :model="roleForm" ref="roleForm" :rules="roleRules">
     <el-form-item label="角色名称"  prop="name" :label-width="formLabelWidth">
     <el-input v-model="roleForm.name" autocomplete="off" ></el-input>
     </el-form-item>
     <el-form-item label="角色描述" prop="description" :label-width="formLabelWidth">
      <el-input v-model="roleForm.description"  autocomplete="off"></el-input>
     </el-form-item>
     </el-form>
    <el-row slot="footer" type="flex" justify="cenetr">
      <el-col :span="6">
    <el-button size="small" @click="cancleRoles">取消</el-button>
    <el-button size="small" type="primary" @click="roleSubmit">确 定</el-button>
      </el-col>
    </el-row>
    </el-dialog>
  </div>
  </template>
  <script>
  import{assignPremAPI,PermissionsAPI,getUserProfileAPI,listRolesAPI,InquireEnterpriseAPI,addRolesAPI,RoledetailsAPI,updateRoleAPI,DeleteRoleAPI}from"@/api"
  import{tranListToTreeData} from "@/utils"
  import AssignPermission from "./assignPermission.vue" 
  export default {
  components: { AssignPermission },
      data() {
        return {
          query:{
            pagesize:10,
            page:1
          },
          rows:[],                //角色信息
          formLabelAlign: {},     //公司信息
          PermissionsList:[],     //权限信息
          PermIds:[],  //权限点的id
          clickRoleId:'',   //分配权限时,点击那行角色的id
          total:0,               //总数
         activeName: 'first',
         dialogTitle:"",
         showDialog: false,     //新建
         isEdit:false,   //新增/编辑的状态(false为新增反之)
         dialogVisible:false,   //权限
         roleForm: {                
          name: '',
          description:''
         },
         roleRules:{     //校验
          name:[
            {required:true,message:"角色名称不能为空",trigger:"blur"}
          ],
          description:[
          {required:true,message:"角色描述不能为空",trigger:"blur"}
          ]
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
         //当前显示的条数发生改变时触发
         handleSizeChange(size) {
          this.query.pagesize=size
          this.listRolesFn()
       },
       //当前页码发生改变时触发
        handleCurrentChange(page) {
          this.query.page=page
          this.listRolesFn()
         },
         //获取角色列表
        async  listRolesFn(){
            const res=await listRolesAPI(this.query)
            this.rows=res.data.rows
            this.total=res.data.total
        },
        //获取公司列表
        async InquireEnterpriseFn(){
          const {data:{companyId}}=await getUserProfileAPI()
          const res= await InquireEnterpriseAPI(companyId)
          this.formLabelAlign=res.data[0]
        },
         //删除
         async open(roleObj) {
          await DeleteRoleAPI(roleObj.id)
          if(this.rows.length===1){
            this.query.page--
            if(this.query.page===0){
              this.query.page=1
            }
          }
          this.listRolesFn()
         },
          //新建
          roleSubmit(){
           this.$refs.roleForm.validate(async valid=>{
              if(valid){
                if(this.isEdit){
                 await updateRoleAPI(this.roleForm)
                }else{
                  await addRolesAPI(this.roleForm)
                }
                this.listRolesFn()
                this.showDialog=false
              }
            })
          },
          cancleRoles(){
              this.showDialog=false
          },
          addRoleBtnFn(){
            this.dialogTitle="新增角色"
            this.roleForm.name=""
            this.roleForm.description=""
            this.isEdit=false
            this.showDialog=true 
          },
           //修改
          async revise(roleObj){ 
            this.isEdit=true
            this.showDialog = true;
            this.dialogTitle="修改角色"
             const res=await RoledetailsAPI(roleObj.id)
             this.roleForm=res.data
                },
               confirm(){
               
                  },
          //权限
          async  Assign(roleObj){
            this.dialogVisible=true
            this.clickRoleId=roleObj.id
            const res=await RoledetailsAPI(roleObj.id)
            this.PermIds=res.data.permIds
            },
            async PermissionsFn(){
              const res= await PermissionsAPI()
              console.log(res)
              this.PermissionsList= tranListToTreeData(res.data,'0')
              
            }, 
            perDialogCloseFn(){
            this.PermIds=[]
            },
            async addPermissionFn(permIdsList){
             await assignPremAPI({
                id:this.clickRoleId,
                permIds:permIdsList
              })
              this.listRolesFn()
             
            }     
       },
          created(){
            //获取所有角色列表
            this.listRolesFn(),
            this.InquireEnterpriseFn()
            this.PermissionsFn()
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
    left: 530px;
    bottom: 20px;
  }
  .bq{
   font-size: 14px;
   color: gray;
   margin-left: 550px;
   margin-top: 30px;
  }
  .input1{
    margin: 30px 50px; 
    width: 450px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 10px 0;
  }

  .box-card {
    width: 97%;
    margin: 20px 20px;
  }
</style>