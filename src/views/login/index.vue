<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <!-- 放置标题图片 @是设置的别名, 是在vue.config.js中设置的路径别名, 代表src绝对地址 -->
      <div class="title-container">
        <h3 class="title">
          <img src="@/assets/common/login-logo.png" alt="">
        </h3>
      </div>

      <el-form-item prop="mobile">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="mobile"
          v-model="loginForm.mobile"
          placeholder="Mobile"
          name="mobile"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.prevent="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>

      <el-button
        class="login_btn"
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
      >登录</el-button>

      <div class="tips">
       <a>暂无账户？立即注册</a>
      </div>

      
    </el-form>
   
  </div>
</template>

<script>
import { validMobile } from '@/utils/validate'
import { mapActions } from 'vuex'
// import { getUserProfileAPI } from '@/api'
export default {
  name: 'Login',
  data() {
    const validateMobile = (rule, value, callback) => {
      if (!validMobile(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        mobile: '13800000002',
        password: '123456'
      },
      loginRules: {
        mobile: [
          { required: true, trigger: 'blur', validator: validateMobile }
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            min: 6,
            max: 16,
            message: '密码长度在6-16位'
          }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
  
    ...mapActions (['user/loginActions']),
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 登录
    handleLogin() {
      this.$refs.loginForm.validate(async isOK=> {
        // 登录校验
        if (isOK) {        
          try {
            this.loading = true
            // 效验通过在执行，防止页面先跳转
           await this['user/loginActions'](this.loginForm)
            // this.$message.success(res.message)
            // this.$router.replace(this.redirect || '/')
            // 登录成功之后跳转
            this.$router.replace('/')
            
          } catch (err) {
            console.error(err)
          } finally{
            this.loading = false
          }
          
        // } else {
        //   return false // 未通过
        }
      })
     
    },
  
  }
}
</script>

<style lang="less">
.login_btn {
  background: #407ffe;
  height: 64px;
  line-height: 32px;
  font-size: 24px;
}


/* reset element-ui css */
.el-form-item__error {
  font-size: 14px;
}
.login-container {
  height: 730px;
  width: 100%;
  background-image: url("@/assets/common/login.jpg") ; // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      height: 47px;
    
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    // background: rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="less" scoped>

.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    // color: black !important;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
  }
}

</style>
