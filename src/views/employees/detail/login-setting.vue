<template>
    <div class="login-setting">
        <el-form ref="userForm" :rules="rules" :model="userInfo" label-width="120px"
            style="margin-left: 245px;margin-top: 30px;">
            <el-form-item label="姓名:" prop="username">
                <el-input v-model="userInfo.username" style="width: 300px;" />
            </el-form-item>
            <el-form-item label="新密码:" prop="password">
                <el-input v-model="userInfo.password" type="password" style="width: 300px;" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="updateFn">更新</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { getDepartAPI, saveUserDetailByIdAPI } from '@/api'
export default {
    data() {
        return {
            userInfo: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ required: true, message: '用户名不能为空', triggler: 'blur' }],
                password: [{ required: true, message: '密码不能为空', triggler: 'blur' }]
            }
        }
    },
    created() {
        //获取用户信息
        // this.getUserInfoFn()
    },
    methods: {
        // async getUserInfoFn() {
        //     const res = await getDepartAPI(this.data)
        //     console.log(res);
        //     this.userInfo.username = res.data.username
        //     this.userInfo.password = res.data.password

        // },
        //保存更新用户信息
        updateFn() {
            this.$refs.userForm.validate(async valid => {
                if (valid) {
                    await saveUserDetailByIdAPI(this.userInfo)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>