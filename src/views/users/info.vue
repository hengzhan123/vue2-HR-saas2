<template>
  <!-- 首页-个人信息 -->
  <div class="myInfo">
    <div class="myInfoTop">
      <div class="topLab">
        <span class="act">个人信息</span>
      </div>
    </div>
    <div class="myInfoCont">
      <div class="myInfoPic">
        <img v-imagerror="defaultImg" :src="staffPhoto" width="100" alt />
      </div>
      <div>
        <el-form ref="myInfo" :model="myInfo" label-width="80px">
          <el-form-item label="姓名" style="width: 300px">
            <el-input v-model="myInfo.username" />
          </el-form-item>
          <el-form-item label="手机号" style="width: 300px">
            <el-input v-model="myInfo.mobile" />
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="myInfo.sex" placeholder="请选择性别">
              <el-option label="男" value="男" />
              <el-option label="女" value="女" />
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-date-picker
              v-model="myInfo.dateOfBirth"
              type="date"
              format="yyyy-MM-dd"
              placeholder="选择日期"
            />
          </el-form-item>
          <el-form-item>
            <!-- 官网保存没有用 -->
            <el-button type="primary" >保存</el-button>
            <el-button @click="onCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    </div>
</template>

<script>
import { getUserDetailById } from "@/api/user";
import { updateUser } from "@/api/approvals";
import { updatePersonal, getPersonalDetail } from "@/api/employees";
import {mapGetters} from 'vuex'
export default {
  name: "UsersTableIndex",
  data() {
    return {
      myInfo: {
        dateOfBirth: "",//出生日期
        sex: "",//性别
      },
      defaultImg: require("@/assets/common/head.jpg"),

    };
  },
  computed: {
    ...mapGetters(["staffPhoto"]),

  },
  created() {
    this.getUserProfileAPI(localStorage.getItem("userId"));
  },
  methods: {
    // 取消后返回上一级
    onCancel() {
      this.$router.back(-1);
    },
    // 获取用户资料
    //*旧接口所有信息都能显示，新接口只能显示姓名和手机
    async getUserProfileAPI(userId) {
      this.loading = true
      const detailData = await getUserDetailById(userId);
      const personData = await getPersonalDetail(userId);
     this.myInfo.username=detailData.data.username//姓名
     this.myInfo.mobile=detailData.data.mobile //手机
     this.myInfo.sex=personData.data.sex
     this.myInfo.dateOfBirth=personData.data.dateOfBirth
    },
  },
};
</script>

<style lang="less" scoped>
.myInfo {
  padding: 15px;
  margin-top: 15px;
  .myInfoTop {
    color: #666;
    background: #fff;
    border-bottom: solid 1px #ccc;
    line-height: 40px;
    span {
      display: inline-block;
      padding: 0 25px;
      font-size: 18px;
      cursor: pointer;
    }
    .act {
      color: blue;
      border-bottom: solid 2px blue;
    }
  }
  .myInfoCont {
    background: #fff;
    display: flex;
    padding: 20px;
    .myInfoPic {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: solid 1px #ccc;
      margin-right: 40px;
      img {
        width: 100px;
        height: 100px;
      }
    }
    div:last-child {
      flex: 1;
    }
  }
}
</style>
