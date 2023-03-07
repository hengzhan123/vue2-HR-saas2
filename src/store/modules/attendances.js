import { getAttendancesAPI,departmentsListAPI,updateAttendanceAPI } from '@/api';


const state = {
    departmentsList:[],
    tableDataList:[],
    yuefen:"",
    count:0
}

const mutations = {
    getDepartmentsList(state,val){
        state.departmentsList=val
    },
    getAttendanceList(state,val){
        state.tableDataList=val.data.rows
        state.yuefen=val.monthOfReport
        state.count=val.data.total
    }
}

const actions = {
    async getDepartments(context){
        const res=await departmentsListAPI()
        context.commit("getDepartmentsList",res.data.depts);
      },
      async getAttends(context){
        const res=await getAttendancesAPI({ page:1,
            pagesize:10,
            total:0})
            // console.log(res);
        context.commit("getAttendanceList",res.data)
      }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}