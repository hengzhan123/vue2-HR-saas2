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
                <el-button type="primary">更新</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { getDepartAPI } from '@/api'
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
        this.getUserInfoFn()
    },
    methods: {
        async getUserInfoFn() {
            const res = await getDepartAPI(this.$route.query.id)
            // console.log(res);
            this.userInfo = res.data
        },
        //保存更新用户信息
        // updateFn() {
        //     this.$refs.userForm.validate(async valid => {
        //         if (valid) {
        //             await saveUserDetailByIdAPI(this.userInfo)
        //             this.$message.success(res.message)
        //         }
        //     })
        // }
    }
}
</script>

<style lang="less" scoped>
/deep/ label {
    font-weight: 700;
}
</style>