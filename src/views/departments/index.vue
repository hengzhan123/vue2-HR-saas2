<template>
    <div class="departments-container">
        <div class="app-container">
            <!-- 页面容器 -->
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="组织架构" name="first" class="tab-pane">
                            <el-row type="flex" justify="space-between" align="middle" class="department-header">
                                <!-- 第一列20份 -->
                                <el-col :span="20">
                                    <i class="el-icon-s-home" />
                                    <span class="company">中台人力资源管理</span>
                                </el-col>
                                <!-- 第二列4份 -->
                                <el-col :span="4">
                                    <!-- 在容器范围里, 一行再分2列 -->
                                    <el-row type="flex" justify="end">
                                        <el-col>负责人</el-col>
                                        <el-col>
                                            <!-- 这个之前在头部导航右侧下拉菜单讲过 -->
                                            <el-dropdown>
                                                <!-- 下拉菜单文字 -->
                                                <span class="el-dropdown-link">
                                                    操作<i class="el-icon-arrow-down el-icon--right" />
                                                </span>
                                                <!-- 下拉项 -->
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item @click.native="add()">添加子部门</el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </el-col>
                                    </el-row>
                                </el-col>
                            </el-row>

                            <el-tree class="departments-tree" :data="treeData" :props="defaultProps"
                                :default-expand-all="true">
                                <template #default="{ data }">
                                    <el-row type="flex" justify="space-between" align="middle"
                                        style="height: 40px; width: 100%;">
                                        <!-- 部门名字 -->
                                        <el-col :span="20">
                                            <span>{{ data.name }}</span>
                                        </el-col>
                                        <!-- 功能操作区域 -->
                                        <el-col :span="4">
                                            <el-row type="flex" justify="end">
                                                <!-- 两个内容 -->
                                                <el-col>{{ data.manager }}</el-col>
                                                <el-col>
                                                    <!-- 下拉菜单 element -->
                                                    <el-dropdown>
                                                        <span> 操作<i class="el-icon-arrow-down" /> </span>
                                                        <!-- 下拉菜单 -->
                                                        <el-dropdown-menu slot="dropdown">
                                                            <el-dropdown-item
                                                                @click.native="add(data)">添加子部门</el-dropdown-item>
                                                            <el-dropdown-item
                                                                @click.native="edit(data)">查看部门</el-dropdown-item>
                                                            <el-dropdown-item v-if="data && !data.children"
                                                                @click.native="del(data)">删除部门</el-dropdown-item>
                                                        </el-dropdown-menu>
                                                    </el-dropdown>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                </template>
                            </el-tree>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-card>
            <!-- 新增-子部门-弹窗 -->
            <depart-dialog ref="departDialog" :dialog-visible.sync="showDepartDialog" :employees-list="employeesList"
                :origin-list="originList" :is-edit="isEdit" :parent-id="clickDepartId" @addDepartEV="addDepartmentsFn" />
        </div>
    </div>
</template>

<script>
import { departmentsListAPI, getEmployeeSimpleAPI, addDepartmentsAPI, getDepartDetailAPI, updateDepartmentsAPI, delDepartmentAPI } from '@/api'
import { transTree } from '@/utils'
import DepartDialog from './components/departDialog.vue'

export default {
    name: 'Departments',
    components: {
        DepartDialog
    },
    data() {
        return {
            activeName: 'first', // 被激活的 Tab 标签页
            // 树形控件数据
            treeData: [

            ],
            // 定义结构显示
            defaultProps: {},
            showDepartDialog: false, // 新增子部门弹框是否出现
            employeesList: [], // 员工列表
            clickDepartId: '', // 正在编辑部门的id
            isEdit: false, // 编辑状态(false未编辑)
            originList: [] // 用于弹窗内-校验部门code和name是否重复数据数组
        }
    },
    created() {
        // 获取部门列表方法
        this.getDepartMentsListFn()
        // 获取员工列表方法
        this.getEmployeesListFn()
    },
    methods: {
        // 获取员工列表方法
        async getEmployeesListFn() {
            const res = await getEmployeeSimpleAPI()
            this.employeesList = res.data
        },
        // 获取部门列表方法
        async getDepartMentsListFn() {
            const res = await departmentsListAPI()
            // 格式化需要传递给子组件的数据
            this.originList = res.data.depts.map(item => (
                {
                    id: item.id,
                    code: item.code,
                    name: item.name,
                    pid: item.pid // 下面使用
                }
            ))
            this.treeData = transTree(res.data.depts, '') // 因为后台返回的字段是id和pid而且根是空字符串, 如果不是需要自己改变transTree里判断条件等
        },
        // tab导航点击
        handleClick() {

        },
        // 右侧 - 添加子部门
        add(data) {
            this.isEdit = false
            if (data) { // 添加二级以下部门
                this.clickDepartId = data.id // 保存当前部门id
            } else { // 添加一级部门(当前点击公司id为'')
                this.clickDepartId = ''
                // 我们可以看到一级部门的pid都是''
            }

            this.showDepartDialog = true // 弹窗显示
        },
        // 右侧 - 编辑子部门
        async edit(data) {
            this.isEdit = true
            this.clickDepartId = data.id // 编辑的部门id
            // 弹窗显示
            this.showDepartDialog = true
            const res = await getDepartDetailAPI(data.id)
            this.$refs.departDialog.form = res.data // 影响组件表单里对象
        },
        // 右侧 - 删除部门
        async del(data) {
            // 显示删除确认消息对话框
            const delRes = await this.$confirm('此操作将永久删除部门, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).catch(err => err)

            // 如果返回的结果是 cancel 说明用户取消了删除
            if (delRes === 'cancel') return this.$message('您取消了删除')
            // console.log(data.id);
            // 调用删除接口
            const delDepartRes = await delDepartmentAPI(data.id)

            // 根据状态值, 查看是否删除成功
            if (!delDepartRes.success) return this.$message.error(delDepartRes.message)
            // 删除成功需要给用户进行提示
            this.$message.success(delDepartRes.message)
            // 删除后需要重新获取当前页面数据
            this.getDepartMentsListFn()
        },
        // 新增-添加部门的方法
        async addDepartmentsFn(dataObj) {
            if (this.isEdit) { // 编辑状态
                dataObj.id = this.clickDepartId
                const res = await updateDepartmentsAPI(dataObj)
                console.log(res)
            } else { // 新增状态
                dataObj.pid = this.clickDepartId
                const res = await addDepartmentsAPI(dataObj)
                console.log(res)
            }
            this.getDepartMentsListFn()
        }
    }
}
</script>

<style lang="less" scoped>
// .departments-container{
//     width: 100% !important;
// }
.app-container {
    padding: 20px;
}

.box-card {
    padding: 10px 30px;
}

.tab-pane {
    padding: 20px 80px;

    .company {
        margin-left: 12px;
        font-weight: bold;
        font-size: 14px;
    }

    .department-header {
        height: 50px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
}

.departments-tree {
    margin: 12px 0px;
}
</style>
