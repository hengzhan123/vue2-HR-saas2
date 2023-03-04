<template>
    <div>
        <el-dialog
      :title="distinguish?'添加权限':'编辑权限'"
      :visible.sync="dialogVisible"
      width="50%"
      
      :before-close="handleClose">
      <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="权限名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="权限标识" prop="code">
    <el-input v-model="ruleForm.code"></el-input>
  </el-form-item>
  <el-form-item label="权限描述" prop="">
    <el-input v-model="ruleForm.description"></el-input>
  </el-form-item>

  <el-form-item label="企业可见" prop="delivery">
    <el-switch
  v-model="ruleForm.delivery"
  active-text="可见"
  inactive-text="不可见">
</el-switch>
  </el-form-item>
  <!-- <el-form-item label="按钮样式" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="按钮icon" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="按钮状态" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item> -->
</el-form>
<el-row slot="footer" type="flex" justify="center">
                    <el-col :span="6">
                        <el-button @click="cancelFn">取 消</el-button>
                        <el-button @click="sureFn" type="primary">确 定</el-button>
                    </el-col>
                </el-row>
    </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
      return {
        dialogVisible: false,
        
        ruleForm: {
          name: '',
          code: '',
          description: '',
          date2: '',
          delivery: false,
          type: '',       //类型
          pid: '',        //判断哪个节点
                 
        },
        // rules: {
        //   name: [
        //     { required: true, message: '请输入活动名称', trigger: 'blur' },
        //     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        //   ],
        //   region: [
        //     { required: true, message: '请选择活动区域', trigger: 'change' }
        //   ],
        //   date1: [
        //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        //   ],
        //   date2: [
        //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        //   ],
        //   type: [
        //     { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        //   ],
        //   resource: [
        //     { required: true, message: '请选择活动资源', trigger: 'change' }
        //   ],
        //   desc: [
        //     { required: true, message: '请填写活动形式', trigger: 'blur' }
        //   ]
        // }
      };
    },
    props:{
     type:Number,
     pid:String ,
     res2:Object,
     distinguish:Boolean
    },
    watch:{
      ruleForm(){
        this.ruleForm.type=this.type;
        this.ruleForm.pid=this.pid
       
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      // 确定 点击按钮
      sureFn(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
           this.$emit('addFn',{...this.ruleForm});
           this.dialogVisible=false
          } 
        })
        
      },
      // 取消 点击按钮
      cancelFn(){
        this.dialogVisible=false
        // 当点击编辑之后，在点击添加弹窗会有上一次编辑的数据
        // 清空ruleForm里的数据，但是id清空不了新增数据id会冲突
        this.$refs.ruleForm.resetFields()
        // $options 内置方法，初始化data.ruleForm的数据再赋值到上面 
        this.ruleForm=this.$options.data().ruleForm
      },
    }
    }
</script>

<style lang="less" scoped>
.el-dialog_body{
  padding: 0px;
}
</style>