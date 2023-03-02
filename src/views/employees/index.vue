<template>
    <div class="app-container">
        <el-card>
            <!-- 自定义左侧内容 -->
            <template>
                <span style="background-color: #e6f7ff; padding: 5px 10px;border-radius: 3px;border: 1px solid #91d5ff;"><i
                        class="el-icon-info" style="color:#409EFF"></i>共 {{ total }} 条记录</span>
            </template>
            <!-- 自定义右侧内容 -->
            <template>
                <span style="float: right;">
                    <el-button type="primary" size="mini" class="top-right">导入</el-button>
                    <el-button type="primary" size="mini" class="top-right" @click="addEmpShowDialogFn"><i
                            class="el-icon-plus"></i>新增员工</el-button>
                </span>
            </template>
        </el-card>
        <el-card style="margin-top: 10px;">
            <el-table :data="employeesList" style="width: 100%;" border size="medium">
                <el-table-column type="index" label="序号" width="60" />
                <el-table-column prop="username" label="姓名" width="100" sortable />
                <el-table-column prop="staffPhoto" label="头像" width="120"></el-table-column>
                <el-table-column prop="mobile" label="手机号" width="120" sortable />
                <el-table-column prop="workNumber" label="工号" width="100" sortable :sort-method="workNumberSortFn" />
                <el-table-column prop="formOfEmployment" label="聘用形式" width="120" sortable>
                    <template v-slot="scope">
                        <span>{{ formatter(scope.row) }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="departmentName" label="部门" width="100" sortable />
                <el-table-column prop="timeOfEntry" label="入职时间" width="120" sortable :formatter="timeFormatter" />
                <el-table-column prop="status" label="状态" width="100" sortable><el-switch active-color="#13ce66"
                        inactive-color="#dcdfe6">
                    </el-switch>
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="250">
                    <template>
                        <el-button @click="lookDetailFn" type="text" size="small">查看</el-button>
                        <!-- <el-button type="text" size="small">转正</el-button>
                        <el-button @click="" type="text" size="small">调岗</el-button>
                        <el-button type="text" size="small">离职</el-button> -->
                        <el-button @click="cancleDialog" type="text" size="small">角色</el-button>
                        <el-button @click="open" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页组件 -->
            <!-- 分页区域 -->
            <div class="pages">
                <el-pagination :current-page="query.page" :page-size="query.size" layout="total, prev, pager, next"
                    :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
            </div>
        </el-card>
        <!-- 新增员工-弹窗 -->
        <el-dialog title="新增员工" :visible.sync="showDialog" @close="addEmpDialogCloseFn">
            <emp-dialog ref="addEmpDialog" :show.sync="showDialog" :tree-data="treeData" @addEmpEV="addEmpFn" />
        </el-dialog>
        <!-- 角色-弹窗 -->
        <el-dialog title="角色" :visible.sync="showRoleDialog">
            <assign-role-dialog :show.sync="showRoleDialog" />
        </el-dialog>
    </div>
</template>

<script>
import { getEmployeesListAPI, departmentsListAPI, addEmployeeAPI } from '@/api'
import EmpDialog from './components/empDialog.vue'
import AssignRoleDialog from './components/assignRoleDialog.vue'
import Employees from '@/api/constant'
import Detail from './detail.vue'
import { transTree } from '@/utils'
import dayjs from 'dayjs'
export default {
    components: {
        EmpDialog,
        Detail,
        AssignRoleDialog
    },
    data() {
        return {
            employeesList: [], // 员工列表
            treeData: [], // 存储部门列表(树结构)
            query: {
                page: 1, // 页码
                size: 10 // 每页条数
            },
            total: 0, // 数据总条数
            showDialog: false, // 添加员工组件的展示
            showRoleDialog: false //角色弹窗
        }
    },
    methods: {
        // 每页显示的条数发生改变时触发
        handleSizeChange(newSize) {
            this.query.size = newSize
            this.getEmployeeListFn()
        },

        // 当前页面发生改变时触发
        handleCurrentChange(newPage) {
            this.query.page = newPage
            this.getEmployeeListFn()
        },
        //新增员工->点击弹窗
        addEmpShowDialogFn() {
            this.showDialog = true
        },
        //角色->点击弹窗
        cancleDialog() {
            this.showRoleDialog = true
        },
        open() {
            this.$confirm('是否删除此条记录?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        // 获取员工列表
        async getEmployeeListFn() {
            const res = await getEmployeesListAPI(this.query)
            console.log(res);
            this.employeesList = res.data.rows
            this.total = res.data.total
        },
        // 获取部门列表
        async getDepartments() {
            const res = await departmentsListAPI()
            if (!res.success) return this.$message.error(res.message)
            this.treeData = transTree(res.data.depts, '')
            // console.log(this.treeData)
        },
        // 格式化表格的某一项
        formatter(row) {
            const obj = Employees.hireType.find(item => item.id === row.formOfEmployment)
            return obj ? obj.value : '未知'
        },
        //日期格式转换
        timeFormatter(row) {
            return dayjs(row.timeOfEntry).format('YYYY-MM-DD')
        },
        // 员工列-自定义排序
        workNumberSortFn(a, b) {
            return parseInt(a.workNumber) - parseInt(b.workNumber)
        },
        // 新增员工->事件触发
        async addEmpFn(formData) {
            const res = await addEmployeeAPI(formData)

            if (res.success) {
                this.$message.success(res.message)
                // 提示后, 重新请求列表
                this.getEmployeeList()
            } else {
                this.$message.error(res.message)
            }
        },

        // 新增员工->弹窗关闭事件
        addEmpDialogCloseFn() {
            console.log(this.$refs.addEmpDialog)
            this.$refs.addEmpDialog.$refs.addForm.resetFields()
        },
        //员工列表->点击查看
        lookDetailFn() {
            this.$router.push('/detail')
        }
    },
    created() {
        // 调用获取员工列表的方法
        this.getEmployeeListFn()
        // 调用获取部门列表的方法
        this.getDepartments()
    }
}
</script>

<style lang="less" scoped>
.app-container {
    padding: 20px;
}

.pages {
    height: 30px;
    margin-top: 10px;
    text-align: right;
}
</style>