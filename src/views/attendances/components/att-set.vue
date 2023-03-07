<template>
    <div>
<el-dialog
  title="设置"
  :visible.sync="dialogVisible"
  width="50%">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="出勤设置" name="first">
     <p>
        部门: <el-select v-model="setOne.departmentId" placeholder="请选择">
        <el-option
          v-for="item in departmentData"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
     </p>
     <div class="timebox">
        <p style="margin: 30px 0px 0px;"> 
        出勤时间: <el-time-select
    v-model="setOne.morningStartTime"
    :picker-options="{
      start: '08:30',
    step: '00:15',
    end: '18:30'
    }"
    placeholder="任意时间点">
  </el-time-select>-
  <el-time-select
    arrow-control
    v-model="setOne.morningEndTime"
    :picker-options="{
       start: '08:30',
    step: '00:15',
    end: '18:30'
    }"
     placeholder="任意时间点">
  </el-time-select>
     </p>
     <p style="margin-left: 63px;">
        <el-time-select
    v-model="setOne.afternoonStartTime"
    :picker-options="{
       start: '08:30',
    step: '00:15',
    end: '18:30'
    }"
    placeholder="任意时间点">
  </el-time-select>-
  <el-time-select
    arrow-control
    v-model="setOne.afternoonEndTime"
    :picker-options="{
      start: '08:30',
    step: '00:15',
    end: '18:30'
    }"
    placeholder="任意时间点">
  </el-time-select>
     </p>
     </div>
     <div class="dialog-footer" style="margin: 30px auto 0px;">
        <el-button type="primary" @click="dialogVisible = false">保存更新</el-button>
    <el-button @click="dialogVisible = false">取 消</el-button>
     </div>
    </el-tab-pane>
    <el-tab-pane label="请假设置" name="second" style="padding-left: 30px;">
        <p>
        部门: <el-select v-model="setOne.departmentId" placeholder="请选择">
        <el-option
          v-for="item in departmentData"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
     </p>
     <p style="margin: 20px 0px;">假期类型</p>
          <el-table ref="singleTable" :data="stateData.type" style="width: 100%">
            <el-table-column prop="name" label="类型" width="200" />
            <el-table-column label="是否可用">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.isEnable"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                />
              </template>
            </el-table-column>
          </el-table>
          <div class="el-dialog__footer dialog-footer">
            <el-button type="primary" @click="dialogVisible=false">保存更新</el-button>
            <el-button @click="dialogVisible=false">取消</el-button>
          </div>
          <el-alert type="warning" show-icon :closable="false" title>
            <template>
              <div class="tipInfo">
                <p>事假 请假单位为0.5天 只能提交工作日内的请假单</p>
                <p>当请假开关关闭后，员工则不可在员工端提交请假申请</p>
              </div>
            </template>
          </el-alert>
    </el-tab-pane>
    <el-tab-pane label="扣款设置" name="third">
        <p>
        部门: <el-select v-model="setOne.departmentId" placeholder="请选择">
        <el-option
          v-for="item in departmentData"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
     </p>
    
     <table style="padding: 60px 30px;" class="tabs">
        <tr style="height: 70px;">迟到扣款 <el-switch
     
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch></tr>
        <tr>迟到≤<el-input v-model="input"  style="width: 50px;display: inline-block;"></el-input>分钟</tr>
        <tr>迟到≤<el-input v-model="input" style="width: 50px;display: inline-block;"></el-input>次，
            每次扣款<el-input v-model="input" style="width: 50px;display: inline-block;"></el-input>元</tr>
        <tr>迟到><el-input v-model="input" disabled style="width: 50px;display: inline-block;"></el-input>次，
            每次扣款<el-input v-model="input" style="width: 50px;display: inline-block;"></el-input>元</tr>
        <tr>迟到><el-input v-model="input" disabled style="width: 50px;display: inline-block;"></el-input>分钟</tr>
        <tr>迟到><el-input v-model="input" disabled style="width: 50px;display: inline-block;"></el-input>次，
            每次旷工<el-input v-model="input" style="width: 50px;display: inline-block;"></el-input>天</tr>
     </table>
     <table style="padding: 20px 30px;" class="tabs">
        <tr style="height: 70px;">早退扣款 <el-switch
     
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch></tr>
        <tr>早退≤<el-input v-model="input"  style="width: 50px;display: inline-block;"></el-input>分钟</tr>
        <tr>早退≤<el-input v-model="input" style="width: 50px;display: inline-block;"></el-input>次，
            每次扣款<el-input v-model="input" style="width: 50px;display: inline-block;"></el-input>元</tr>
        <tr>早退><el-input v-model="input" disabled style="width: 50px;display: inline-block;"></el-input>次，
            每次扣款<el-input v-model="input" style="width: 50px;display: inline-block;"></el-input>元</tr>
        <tr>早退><el-input v-model="input" disabled style="width: 50px;display: inline-block;"></el-input>分钟</tr>
        <tr>早退><el-input v-model="input" disabled style="width: 50px;display: inline-block;"></el-input>次，
            每次旷工<el-input v-model="input" style="width: 50px;display: inline-block;"></el-input>天</tr>
     </table>
     <table style="padding: 30px 30px;" class="tabs">
        <tr style="height: 30px;">迟到扣款 <el-switch
     
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch></tr>
        <tr style="height: 40px;">旷工按<el-input  style="width: 50px;display: inline-block;"></el-input>倍工资处罚</tr>
     </table>
     <div class="dialog-footer" style="margin: 0 auto;">
        <el-button type="primary" @click="dialogVisible = false">保存更新</el-button>
    <el-button @click="dialogVisible = false">取 消</el-button>
     </div>
    </el-tab-pane>
    <el-tab-pane label="加班设置" name="fourth">
          <el-form
            ref="overtimeForm"  
            :model="overtimeBase"  
            label-width="100px">
            <el-form-item label="部门：" prop="departmentId">
              <el-select
              v-model="overtimeBase.departmentId"
                placeholder="请选择"         
              >
                <el-option 
                v-for="item in departmentData"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"    
                />
              </el-select>
            </el-form-item>
            <el-form-item label="加班规则：">
              <div v-for="item in overtimeBase.rules" :key="item.id" class="ruleInfo">
                <el-row>
                  <el-col :span="8">
                    <div class="grid-content bg-purple">
                      <el-switch  v-model="item.isEnable" /> {{item.rule}}
                      &nbsp;&nbsp;
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="grid-content bg-purple-light">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      <span class="pad">
                        <el-checkbox v-model="item.isTimeOff">调休假</el-checkbox>&nbsp;
                      </span>
                      <template>
                        <el-time-select
                        style="width:90px;"
                        v-model="item.ruleStartTime"
                        :picker-options="{
                            start: '01:00',
                            step: '00:15',
                            end: '23:59'
                          }"
                          :disabled="item.isTimeOff===false"
                        />
                        <el-time-select
                        v-model="item.ruleEndTime"
                          style="width:90px;"
                          :picker-options="{
                            start: '01:00',
                            step: '00:15',
                            end: '23:59',
                            minTime: item.startTime
                          }"
                          :disabled="item.isTimeOff===false"
                        />
                      </template>
                    </div>
                  
                  </el-col>
                </el-row>
              </div>
            </el-form-item>
            <el-form-item label="打卡验证：" prop="isClock">
              <el-switch v-model="overtimeBase.isClock" />&nbsp;&nbsp;加班需要有打卡记录
            </el-form-item>
            <el-form-item label="开启补偿：" prop="isCompensationint">
              <el-switch v-model="overtimeBase.isCompensationint" />
            </el-form-item>
            <el-form-item label="调休假设置：" prop="latestEffectDate">
              <div class="ruleInfo">
                最晚有效期： 次年
                <el-date-picker
                  type="date"
                  v-model="overtimeBase.latestEffectDate"
                  placeholder="选择日期"
                  style="width:150px;"
                />
              </div>
            </el-form-item>
            <el-form-item label prop="unit">
              <div class="ruleInfo">
                <p>
                  请假最小单位
                  <el-input v-model="overtimeBase.unit" style="width:50px" />天
                </p>
              </div>
            </el-form-item>
          </el-form>
          <div class="el-dialog__footer dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">保存更新</el-button>
            <el-button @click="dialogVisible = false">取消</el-button>
          </div>
        </el-tab-pane>
  </el-tabs>
  <!-- <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span> -->
</el-dialog>
    </div>
</template>

<script>
import {departmentsListAPI,getItemAPI} from "@/api"
import attendance from "@/api/constant/attendance";
    export default {
        data(){
            return{
                dialogVisible: false,
                activeName: 'first',
                value2: new Date(2016, 9, 10, 18, 40),
                value3: new Date(2016, 9, 10, 18, 40),
                input:'30',
                setOne:{                //出勤设置 信息
                  departmentId:'',
                  morningStartTime: '',
                  morningEndTime: '',
                  afternoonStartTime: '',
                  afternoonEndTime: '',
                },
                overtimeBase: {             //加班设置  信息
                 departmentId: '',
                  isClock: false,
                  isCompensationint: false,
                  latestEffectDate: '',
                  unit: '',
                  rules: attendance.overtimeType
            },
                departmentData:[],     //部门架构信息列表
                stateData:[],

            }
        },
        created(){
          this.getItemOne();
          this.getdepartmentList();
          this.stateData=attendance
        },
        methods:{
            // 显示弹窗
            setShowDialog(){
                this.dialogVisible=true
            },
            // 隐藏弹窗
            setHideDialog(){
                this.dialogVisible=false
            },
            handleClick(tab, event) {
              // console.log(tab, event);
          },
          // 获取组织架构列表
          async getdepartmentList(){
            const res=await departmentsListAPI();
              this.departmentData=res.data.depts
          },
          // 
         async getItemOne(){
           const res=await getItemAPI()
            console.log(res);
            this.setOne=res.data
          }
        }
    }
</script>

<style lang="less" scoped>
    .el-select{
        margin-left: 20px;
    }
    .timebox{
        // margin: 20px 0px 10px 0px;
    }
    .tabs{  
        tr{
            height: 55px;
        }
    }
 
</style>