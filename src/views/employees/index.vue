<template>
  <div class="app-container">
    <el-card>
      <!-- 自定义左侧内容 -->
      <template>
        <span style="
                              background-color: #e6f7ff;
                              padding: 5px 10px;
                              border-radius: 3px;
                              border: 1px solid #91d5ff;
                            "><i class="el-icon-info" style="color: #409eff"></i>共
          {{ total }} 条记录</span>
      </template>
      <!-- 自定义右侧内容 -->
      <template>
        <span style="float: right">
          <el-button type="primary" size="mini" class="top-right"
            @click="$router.push('/importExcel')">excel导入</el-button>
          <el-button type="primary" size="mini" class="top-right" @click="exportExcel">excel导出</el-button>
          <el-button type="primary" size="mini" class="top-right" @click="addEmpShowDialogFn"><i
              class="el-icon-plus"></i>新增员工</el-button>
        </span>
      </template>
    </el-card>
    <el-card style="margin-top: 10px">
      <el-table :data="employeesList" style="width: 100%" border size="medium">
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column prop="username" label="姓名" width="100" sortable />
        <el-table-column prop="staffPhoto" label="头像" width="120">
          <template v-slot="{ row }">
            <image-holder class="staffPhoto" :src="row.staffPhoto" alt="" />
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" width="120" sortable />
        <el-table-column prop="workNumber" label="工号" width="100" sortable :sort-method="workNumberSortFn" />
        <el-table-column prop="formOfEmployment" label="聘用形式" width="120" sortable>
          <template v-slot="scope">
            <span>{{ formatter(scope.row) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门" width="100" sortable />
        <el-table-column prop="timeOfEntry" label="入职时间" width="120" sortable :formatter="timeFormatter" />
        <el-table-column prop="status" label="状态" width="100" sortable>
          <template v-slot="{ row }">
            <el-switch :value="row.enableState === 1" active-color="#13ce66" inactive-color="#dcdfe6" />
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="250">
          <template v-slot="{ row }">
            <el-button @click="lookDetailFn(row.id)" type="text" size="small">查看</el-button>
            <!-- <el-button type="text" size="small">转正</el-button>
                        <el-button type="text" size="small">调岗</el-button>
                        <el-button type="text" size="small">离职</el-button> -->
            <el-button @click="cancleDialog(row)" type="text" size="small">角色</el-button>
            <el-button disabled type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <!-- 分页区域 -->
      <div class="pages">
        <el-pagination :current-page="query.page" :page-size="query.size" layout="total, prev, pager, next" :total="total"
          @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
    </el-card>
    <!-- 新增员工-弹窗 -->
    <el-dialog title="新增员工" :visible.sync="showDialog" @close="addEmpDialogCloseFn">
      <emp-dialog ref="addEmpDialog" :show.sync="showDialog" :tree-data="treeData" @addEmpEV="addEmpFn" />
    </el-dialog>
    <!-- 角色-弹窗 -->
    <el-dialog title="角色" :visible.sync="showRoleDialog">
      <assign-role-dialog ref="assignRoleDialog" :show.sync="showRoleDialog" :all-role-list="allRoleList"
        @addRoleEV="addRoleFn" />
    </el-dialog>
  </div>
</template>

<script>
import {
  getEmployeesListAPI,
  departmentsListAPI,
  addEmployeeAPI,
  listRolesAPI,
  getDepartAPI,
  assignRolesAPI,
} from "@/api";
import EmpDialog from "./components/empDialog.vue";
import AssignRoleDialog from "./components/assignRoleDialog.vue";
import Employees from "@/api/constant/index";
import Detail from "./detail.vue";
import ImageHolder from "./components/imageHolder.vue";
import { transTree } from "@/utils";
import dayjs from "dayjs";
// import { formatDate } from "@/filters";
export default {
  components: {
    EmpDialog,
    Detail,
    AssignRoleDialog,
    ImageHolder,
  },
  data() {
    return {
      employeesList: [], // 员工列表
      treeData: [], // 存储部门列表(树结构)
      query: {
        page: 1, // 页码
        size: 10, // 每页条数
      },
      total: 0, // 数据总条数
      showDialog: false, // 添加员工组件的展示
      showRoleDialog: false, //角色弹窗
      allRoleList: [], //所有角色列表
      clickEmpId: "", //点击分配角色时，选中员工id
      allEmployeeList: [], //所有员工列表
    };
  },
  created() {
    // 调用获取员工列表的方法
    this.getEmployeeListFn();
    // 调用获取部门列表的方法
    this.getDepartments();
    //调用获取角色列表的方法
    this.listRolesFn();
  },
  methods: {
    // 每页显示的条数发生改变时触发
    handleSizeChange(newSize) {
      this.query.size = newSize;
      this.getEmployeeListFn();
    },

    // 当前页面发生改变时触发
    handleCurrentChange(newPage) {
      this.query.page = newPage;
      this.getEmployeeListFn();
    },
    //新增员工->点击弹窗
    addEmpShowDialogFn() {
      this.showDialog = true;
    },
    //角色->点击弹窗
    async cancleDialog(empObj) {
      const res = await getDepartAPI(empObj.id);
      // console.log(res);
      this.clickEmpId = empObj.id;
      this.showRoleDialog = true;
      this.$nextTick(() => {
        this.$refs.assignRoleDialog.roleIdsList = res.data.roleIds;
      });
    },
    //调用接口保存，员工的最新角色id
    async addRoleFn(roleIdsList) {
      const res = await assignRolesAPI({
        id: this.clickEmpId,
        roleIds: roleIdsList,
      });
      // console.log(res);
    },

    // 获取员工列表
    async getEmployeeListFn() {
      const res = await getEmployeesListAPI(this.query);
      // console.log(res);
      this.employeesList = res.data.rows;
      this.total = res.data.total;

      // 第二次  拿到所有数据(导出用)
      const allRes = await getEmployeesListAPI({
        page: 1,
        size: res.data.total,
      })
      this.allEmployeeList = allRes.data.rows//为了导出
    },
    // 获取部门列表
    async getDepartments() {
      const res = await departmentsListAPI();
      if (!res.success) return this.$message.error(res.message);
      this.treeData = transTree(res.data.depts, "");
      // console.log(this.treeData)
    },
    //获取角色列表
    async listRolesFn() {
      const res = await listRolesAPI({
        page: 1,
        pageSize: 10,
      });
      const allRes = await listRolesAPI({
        page: 1,
        pageSize: res.data.total,
      });
      // console.log(allRes);
      this.allRoleList = allRes.data.rows;
    },
    // 格式化表格的某一项
    formatter(row) {
      const obj = Employees.hireType.find(
        (item) => item.id === row.formOfEmployment
      );
      return obj ? obj.value : "未知";
    },
    //日期格式转换
    timeFormatter(row) {
      return dayjs(row.timeOfEntry).format("YYYY-MM-DD");
    },
    // 员工列-自定义排序
    workNumberSortFn(a, b) {
      return parseInt(a.workNumber) - parseInt(b.workNumber);
    },
    // 新增员工->事件触发
    async addEmpFn(formData) {
      const res = await addEmployeeAPI(formData);

      if (res.success) {
        this.$message.success(res.message);
        // 提示后, 重新请求列表
        this.getEmployeeList();
      } else {
        this.$message.error(res.message);
      }
    },

    // 新增员工->弹窗关闭事件
    addEmpDialogCloseFn() {
      console.log(this.$refs.addEmpDialog);
      this.$refs.addEmpDialog.$refs.addForm.resetFields();
    },
    //点击查看跳转页面
    lookDetailFn(empId) {
      this.$router.push(`/detail?id=${empId}`);
    },
    // 导出
    exportExcel() {
      // excel导出
      import("@/vendor/Export2Excel").then((excel) => {
        const headers = [
          "序号",
          "姓名",
          "头像",
          "手机号",
          "工号",
          "聘用形式",
          "部门",
          "入职时间",
        ];
        // console.log(data,666);
        const chObj = {
          姓名: "username",
          头像: "staffPhoto",
          手机号: "mobile",
          工号: "workNumber",
          聘用形式: "formOfEmployment",
          部门: "departmentName",
          入职时间: "timeOfEntry",
        };
        // 2.遍历每个英文对象
        const data = this.allEmployeeList.map((enObj, index) => {
          let newArr = [];
          headers.forEach((zhKey) => {
            if (zhKey === "序号") {
              newArr.push(index + 1);
            } else {
              const enKey = chObj[zhKey];
              const value = enObj[enKey];
              if (enKey === "formOfEmployment") {
                const obj = Employees.hireType.find(
                  (item) => item.id === parseInt(value)
                );
                newArr.push(obj ? obj.value : "未知");
              } else {
                newArr.push(value);
              }
            }
          });
          return newArr;
        });
        excel.export_json_to_excel({
          header: headers,
          data,
          filname: "文件名",
          autoWidth: true,
          bookType: "xlsx",
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
// *{
//     margin: 0;
//     padding: 0;
// }
.employees-container {
  width: 98%;
}

.app-container {
  padding: 20px;
}

.pages {
  height: 30px;
  margin-top: 10px;
  text-align: right;
}

.staffPhoto {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

/deep/ .el-dialog__header {
  background-color: #66b1ff;

  .el-dialog__title {
    color: #fff;
  }

  .el-dialog__close {
    color: #fff;
  }
}
</style>
