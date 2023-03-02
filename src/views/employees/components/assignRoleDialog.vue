<template>
    <div>
        <!-- 渲染角色列表 -->
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用"></el-checkbox>
            <el-checkbox label="选中且禁用"></el-checkbox>
        </el-checkbox-group>
        <el-row class="footer" type="flex" justify="center">
            <el-col :span="6">
                <el-button type="primary" size="small" @click="enterFn">确定</el-button>
                <el-button size="small" @click="cancelFn">取消</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props: {
        userId: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            checkList: []
        }
    },
    methods: {
        cancelFn() {
            this.$emit('update:show', false)
        },
        enterFn() {
            this.$emit('update:show', false)
        }
    }
}
</script>

<style lang="less" scoped>
.footer {
    margin-top: 30px;
}
</style>