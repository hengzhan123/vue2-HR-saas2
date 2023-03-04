<template>
  <div class="box">
     <!-- 考勤头部内容 -->
    <el-card>
       <el-row style="padding: 10px 0px 25px">
        <el-col :span="10">
          <span style="background-color: #e6f7ff;padding: 5px 10px;border-radius: 3px;border: 1px solid #91d5ff;"><i
              class="el-icon-info" style="color: #409eff"></i>有 0
            条考勤审批尚未处理</span>
        </el-col>
        <el-col :span="8" :push="6">
          <el-button size="mini" type="success" @click="$router.push('/attimport')">导入</el-button>
          <el-badge is-dot style="margin: 0 10px;">
            <el-button size="mini" type="warning" @click="remind = true">提醒</el-button>
          </el-badge>
         
          <el-button size="mini" type="primary" @click="setFn">设置</el-button>
          <el-button size="mini" type="info" @click="$router.push('/archiving')">历史归档</el-button>
          <el-button size="mini" type="primary" @click="$router.push({'path':'/report/'+yearMonth})">{{yearMonth}}月份报表</el-button>
        
        </el-col>
      </el-row>
    </el-card>
 
     <div class="clbox">
       <!-- 部门-->
    <el-card> 
      <el-form  label-width="120px" class="formInfo"> 
        <el-form-item label="部门：">
          <el-checkbox-group class="checkboxs" v-model="formData.departmentBool" >
            <el-checkbox v-for="item in departmentsList" :label="item.id" :key="item.id" @change="tickFn">{{ item.name }}</el-checkbox>  
          </el-checkbox-group>
        </el-form-item>
        <!-- 考勤状态 -->
        <el-form-item label="考勤状态:">
          <el-radio-group v-model="formData.stateBool">
            <el-radio v-for="item in stateData.holidayType" :label="item.value" :value="item.value" :key="item.id">
              {{ item.value }}
            </el-radio>
           
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 考勤表格 -->
   <div class="tablebigbox">
    <div >
      <el-card class="tabs">
      <table border="1"  align="center" cellpadding="0" cellspacing="0">
        <thead>
         <tr>
          <th width="60">序号</th>
          <th width="80">姓名</th>
          <th width="60">工号</th>
          <th width="100">部门</th>
          <th width="100">手机</th>
          <th width="60" v-for="(it,int) in monrept" :key="int">
          {{ attenInfo.month }}/{{ int+1 }}
          </th>
         </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in tableData" :key="item.id" align="center">
            <td>{{ index }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.workNumber }}</td>
            <td>{{ item.departmentName }}</td>
            <td>{{ item.mobile }}</td>
            <td v-for="(it,int) in item.attendanceRecord" :key="int" @click="attFn(item,int,it)">
            <span v-if="it.adtStatu===1">正常</span>
            <span v-if="it.adtStatu===2">旷工</span>
            <span v-if="it.adtStatu===3">迟到</span>
            <span v-if="it.adtStatu===4">早退</span>
            <span v-if="it.adtStatu===5">外出</span>
            <span v-if="it.adtStatu===6">出差</span>
            <span v-if="it.adtStatu===7">年假</span>
            <span v-if="it.adtStatu===8">事假</span>
            <span v-if="it.adtStatu===9">病假</span>
            <span v-if="it.adtStatu===10">婚假</span>
            <span v-if="it.adtStatu===11">丧假</span>
            <span v-if="it.adtStatu===12">产假</span>
            <span v-if="it.adtStatu===13">奖励产假</span>
            <span v-if="it.adtStatu===14">陪产假</span>
            <span v-if="it.adtStatu===15">探亲假</span>
            <span v-if="it.adtStatu===16">工伤假</span>
            <span v-if="it.adtStatu===17">调休</span>
            <span v-if="it.adtStatu===18">产检假</span>
            <span v-if="it.adtStatu===19">流产假</span>
            <span v-if="it.adtStatu===20">长期病假</span>
            <span v-if="it.adtStatu===21">测试假</span>
            <span v-if="it.adtStatu===22">补签</span>
            </td>
          </tr>
        </tbody>
       </table>
    </el-card>
    </div>
   </div>
     </div>
    <!-- 提醒对话框 -->
    <el-dialog title="提醒" :visible.sync="remind" width="300px" center>
      <div class="attenInfo">
        <p>
          系统将通过邮件与短信的形式，对全体员工中存在旷工的考勤进行提醒，该提醒每月仅可发送
          1 次。
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="know">我知道了</el-button>
        <el-button @click="remind = false">取消</el-button>
      </span>
    </el-dialog>
    <!-- 点击考勤详情方案弹窗 -->
    <el-dialog
  :visible.sync="dialogVisible"
  width="30%"
  center>
  <span slot="title" style="color: #fff;"> {{ attenInfo.month }}/{{ attenInfo.getDate }}(实际工作日考勤方案)</span>
    <p style="color: red;">注：统计考勤时，异常状态优先正常状态</p>
    <p class="radiobox">
              <el-radio-group v-model="modifyData.adtStatu">
                <el-radio
                  v-for="item in stateData.vacationtype"
                  :key="item.id"
                  :label="item.id"
                  :value="item.name"
                >{{ item.name }}</el-radio>
              </el-radio-group></p>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="sureFn">确 定</el-button>
  </span>
</el-dialog>
      <!--底部 分页功能 -->
    <div class="block">
  <el-pagination
    :page-size="obj.pagesize"
    :current-page="obj.page"
    layout="prev, pager, next"
    :total="obj.total" @current-change="pageChange">
  </el-pagination>
</div>
      <!-- 设置按钮 组件弹窗 -->
      <attSet ref="set" @setFn2="setFn2"/>
  </div>
</template>

<script>
import { getAttendancesAPI,departmentsListAPI,updateAttendanceAPI } from '@/api';
import attendances from "@/api/constant/attendance"
import attSet from './components/att-set.vue';

export default {
  data() {
    return {
      remind: false,        //提醒对话框
      dialogVisible: false,    //考勤方案
      stateData: attendances,     //请假类型列表
      
     obj:{
      page:1,
      pagesize:10,
      total:0
     },
      formData:{              //部门、考勤状态是否选中过滤
        page:1,
        pagesize:10,
        departmentBool:[],
      stateBool:[]
      },
      departmentsList:[],     //部门列表
      tableData:[],           //考勤表格信息
      monrept:"",       //考勤表格月份
      month:"",
      yearMonth:"",       //年月
      attenInfo:{
        month:"",
        getDate:"",
        getInfo:"",
      },
      attendanceRecord:"",
      modifyData: {        //修改数据
        userId: '',
        day: '',
        adtStatu: ''
      },

    };
  },
  created(){
    this.getList();
    this.getDepartments()
  },
  methods: {
    // 提醒
    know() {
      this.remind = false;
      this.$message.success('提醒成功')
    },
    // 设置按钮 显示弹窗
    setFn(){
      this.$refs.set.setShowDialog()

    },
    // 隐藏弹窗
    setFn2(){
      this.$refs.set.setHideDialog()
    },
    attFn(item,int,it){
     this.dialogVisible = true   //显示弹窗
      this.modifyData.userId = item.int
      this.modifyData.day = it.day
      this.modifyData.departmentId = item.departmentId
      this.modifyData.adtStatu = it.adtStatu + '' // 数字转成字符串

      if (it.adtStatu !== '') {
        this.attenInfo.getDate = parseInt(int + 1)
        this.attenInfo.getInfo = it.adtStatu
        this.attenInfo.name = item.name
        
      }
    },
    // 表格序号从 0 开始
    indexMethod(index) {
        return index * 1;
    },
    // 获取部门列表
    async getDepartments(){
      const res=await departmentsListAPI()
        // console.log(res.data);
     this.departmentsList=res.data.depts
      
    },
      // 获取考勤表格信息
   async getList(){
    try{
      const res =await getAttendancesAPI({...this.obj,...this.formData})
      // console.log(11,res);
      this.tableData=res.data.data.rows    //存入总数据
      const monrept=res.data.monthOfReport   //月份
      this.obj.total =res.data.data.total     // 总条数
      this.attenInfo.month=monrept

      var date = new Date()       
      var year = date.getFullYear()
      const month = monrept
      var d = new Date(year, month, 0) // 获取月份
      this.monrept = d.getDate() // 获取日期
      this.yearMonth = year + ('' + month < 10 ? '0' + month : month)
      this.month =monrept
    } catch(error){
      console.log(error);
    }
    },
    async tickFn(){  
      console.log(this.formData); 
        this.getList()
    },
    // 确定按钮
   async sureFn(){
      this.dialogVisible = false    //显示弹窗
       await updateAttendanceAPI(this.modifyData)
        this.getList();       //重新执行获取数据列表方法
    },
    //  页码处理
    pageChange(page){
      this.obj.page=page;
      this.getList();
    }
  },
  components:{
    attSet,
  }
};
</script>

<style lang="less" scoped>
// .tablebigbox{
//   width: 100%;
//   position: relative;
//       overflow-x:auto;
//   overflow-y:hidden;
// }
.checkboxs{
  display: inline-block;
  padding:0px 10px;
}
.radiobox{
  margin: 15px 0px 0px;
  .el-radio{
    width: 60px;
    padding: 5px;
  }
}
.block{
  margin-top: 25px;
  text-align: center;
}
.box {
  width: 98%;
  height: 100%;
  padding-bottom: 50px;
  //     overflow-x:hidden;
  // overflow-y:hidden;
    // padding: 20px;
  // background: #fff;
  // border-radius: 3px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .el-card {
    margin:20px 0px 10px 20px;
    &:nth-child(2){
      
    }
    .el-form {
      .el-form-item {
        font-weight: 700;
      }
    }
  }

  .tabs {
        // width: 98.5%;
        width: 83vw;
        // position: relative;
    //     height: 100%;
        overflow-x:auto;
    overflow-y:hidden;
    overflow: auto;
    table{
      width:200%;
      line-height: 36px;
      border: 1px solid #ebeef5;
      // border-right: none;
      th{
        height: 50px;
      }
      td{
        height: 37px;
      }
    }
  }

  .el-dialog {
    .attenInfo {
      p {
        line-height: 30px;

        &.check {
          padding: 50px 0 0;
        }

        .el-radio {
          display: inline-block;
          width: 60px;
          padding: 5px 0;
        }
      }
    }
  }

  ::v-deep .dialog-footer {
    text-align: center;
  }

  // 弹窗信息
  ::v-deep .el-dialog__header {
    height: 30px;
    line-height: 30px;
    background: #66b1ff;

    .el-icon-close:before {
      color: #fff;
    }

    .el-dialog__title {
      color: #fff;
    }
  }
}</style>
