<template>
    <div class="departments-container">
        <div class="app-container">
            <!-- 页面容器 -->
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <el-tabs v-model="activeName">
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
                                                    <el-dropdown-item>
                                                        <el-button type="text"
                                                            @click="dialogVisible = true">添加子部门</el-button>
                                                    </el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </el-col>
                                    </el-row>
                                </el-col>
                            </el-row>
                            <el-tree class="departments-tree" :data="treeData" :props="defaultProps"
                                :default-expand-all="true">
                                <el-row slot-scope="{data}" type="flex" justify="space-between" align="middle"
                                    style="height: 50px;width: 100%;">
                                    <!-- 第一列20份 -->
                                    <el-col :span="20">
                                        <span>{{ data.name }}</span>
                                    </el-col>
                                    <!-- 第二列4份 -->
                                    <el-col :span="4">
                                        <!-- 在容器范围里, 一行再分2列 -->
                                        <el-row type="flex" justify="end">
                                            <el-col>{{ }}</el-col>
                                            <el-col>
                                                <!-- 这个之前在头部导航右侧下拉菜单讲过 -->
                                                <el-dropdown>
                                                    <!-- 下拉菜单文字 -->
                                                    <span class="el-dropdown-link">
                                                        操作<i class="el-icon-arrow-down el-icon--right" />
                                                    </span>
                                                    <!-- 下拉项 -->
                                                    <el-dropdown-menu slot="dropdown">
                                                        <el-dropdown-item>
                                                            <el-button type="text"
                                                                @click="dialogVisible = true">添加子部门</el-button>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <el-button type="text"
                                                                @click="dialogVisible = true">查看部门</el-button>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <el-button type="text" @click="open">删除部门</el-button>
                                                        </el-dropdown-item>
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                </el-row>
                            </el-tree>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-card>
            <!-- 新增-子部门-弹窗 -->
            <!-- <DepartDialog :dialog-visible="dialogVisible" /> -->
            <el-dialog title="编辑部门" :visible.sync="dialogVisible">
                <el-form :model="form" label-width="120px">
                    <el-form-item label="部门名称">
                        <el-input v-model="form.name" style="width:80%" placeholder="1-50个字符" />
                    </el-form-item>
                    <el-form-item label="部门编码">
                        <el-input v-model="form.encoded" style="width:80%" placeholder="1-50个字符" />
                    </el-form-item>
                    <el-form-item label="部门负责人">
                        <el-select v-model="form.chargePerson" style="width:80%" placeholder="请选择">
                            <el-option value="管理员" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="部门介绍">
                        <el-input v-model="form.introduce" style="width:80%" placeholder="1-300个字符" type="textarea"
                            :rows="3" />
                    </el-form-item>
                </el-form>
                <el-row slot="footer" type="flex" justify="center">
                    <el-col :span="6">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button @click="dialogVisible = false" type="primary">确 定</el-button>
                    </el-col>
                </el-row>
            </el-dialog>
        </div>
    </div>
</template>

<script>
// import { getDepartmentsAPI } from '@/api/departments'
// import { transTree } from '@/utils'
// import DepartDialog from './components/departDialog.vue'

export default {
    name: 'Departments',
    // components: {
    //   DepartDialog
    // },
    data() {
        return {
            activeName: 'first', // 被激活的 Tab 标签页
            // 树形控件数据
            treeData: [
                {
                    name: '总裁办', children: [{ name: '董事会' }]
                },
                {
                    name: '行政部'
                },
                {
                    name: '人事部', children: [{
                        name: '财务部', children: [{
                            name: '财务核算部'
                        }, { name: '税务管理部' }, { name: '薪资管理部' }]
                    }, {
                        name: '技术部', children: [{
                            name: 'Java研发部'
                        }, { name: 'Python研发部' }, { name: 'Php研发部' }]
                    }]
                },
                {
                    name: '运营部', children: [{
                        name: '市场部', children: [{
                            name: '北京事业部'
                        }, {
                            name: '上海事业部'
                        }]
                    }]
                }
            ],
            // 定义结构显示
            defaultProps: {
                label: 'name'
            },
            dialogVisible: false, // 新增子部门弹框是否出现
            form: {
                name: '',
                chargePerson: '',
                encoded: '',
                introduce: ''
            }
        }
    },
    methods: {
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
        // async getDepartmentsAPI() {
        //   const result = await getDepartmentsAPI()
        //   // this.treeData = result.data.depts
        //   console.log(result);
        // }
    },
    //   created() {
    //     this.getDepartmentsAPI()
    //   }
}
</script>

<style lang="less" scoped>
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
