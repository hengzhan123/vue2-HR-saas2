<template>
    <div>
        <!-- 渲染角色列表 -->
        <el-checkbox-group v-model="roleIdsList">
            <el-checkbox :label="item.id" v-for="item in allRoleList" :key="item.id">
                <span>{{ item.name }}</span>
            </el-checkbox>
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
        //所有的角色列表
        allRoleList: {
            type: Array,
            dafault: () => []
        }
    },
    data() {
        return {
            roleIdsList: []  //收集选中的角色ID
        }
    },
    methods: {
        cancelFn() {
            this.$emit('update:show', false)
        },
        enterFn() {
            this.$emit('addRoleEV', this.roleIdsList)
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