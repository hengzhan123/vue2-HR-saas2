<template>
  <!--审批-流程设置 -->
  <div class="securitySetting">
    <div class="settingList">
      <div class="set">
        <!-- 请假按钮 -->
        <span>请假</span>
        <span>
          <el-switch v-model="levelData.enable" active-color="#13ce66" :inactive-color="inactiveColor" />
        </span>
        <i class="el-icon-setting" @click="setFlow('regular')" />
      </div>
      <div class="set">
        <!-- 加班按钮 -->
        <span>加班</span>
        <span>
          <el-switch v-model="overtimeData.enable" active-color="#13ce66" :inactive-color="inactiveColor" />
        </span>
        <i class="el-icon-setting" @click="setFlow('regular')" />
      </div>
      <div class="set">
        <!-- 离职按钮 -->
        <span>离职</span>
        <span>
          <el-switch v-model="dimissionData.enable" active-color="#13ce66" :inactive-color="inactiveColor" />
        </span>
        <i class="el-icon-setting" @click="setFlow('regular')" />
      </div>
    </div>
    <!-- 提示上传对话框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span style="text-align:center">
        <el-upload class="upload-demo" drag action="/api/user/process/deploy"     :show-file-list="false" :file-list="fileList">
          <i class="el-icon-upload" />
          <div class="el-upload__text">将文件拖到此处</div>
        </el-upload>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'UsersTableIndex',
  components: {},
  data() {
    return {
      requestData: {},
      activeColor: '#13ce66',
      inactiveColor: '#ccc',
      dialogVisible: false,
      processing: false,
      uploadTip: '点击上传',
      fileList: [],
      dataBase: [],
      // 请假
      levelData: {
        enable: false
      },
      // 加班
      overtimeData: {
        enable: false
      },
      // 离职
      dimissionData: {
        enable: false
      }
    }
  },

  methods: {
    // 提示文件上传
    setFlow(obj) {
      this.dialogVisible = true
    },


  }
}
</script>

<style  lang="less" scoped>
.securitySetting {
  padding: 20px;
  background: #fff;
  border-radius: 3px;
  margin: 15px;
  border: 1px solid #ebeef5;
  .settingList {
    margin-bottom: 20px;
    .title {
      font-weight: bold;
      line-height: 40px;
      margin-bottom: 20px;
      border-bottom: solid 1px #ccc;
    }
    .set {
      border: solid 1px #ccc;
      border-radius: 3px;
      padding: 15px 30px 15px 20px;
      position: relative;
      display: inline-block;
      margin-right: 20px;
      span:first-child {
        padding-right: 15px;
        border-right: solid 1px #ccc;
        margin-right: 15px;
      }
      .el-icon-setting {
        position: absolute;
        right: 5px;
        top: 5px;
        color: #999;
      }
    }
  }
}
</style>
