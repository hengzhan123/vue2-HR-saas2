import { socialAPI,historysAPI } from '@/api/social'
const state = {
    soList: [],
    hiList: [],
}

const mutations = {
    getSoList(state, val) {
        state.soList = val;
    },
    getHisList(state, val) {
        state.hisList = val;
    }
}

const actions = {
    // 社保列表
    async getSoListAll(context) {
        const res = await socialAPI({});
        context.commit("getSoList", res.data.rows); 
    },
    // 历史归档列表
    // async getHiListAll(context) {
    //     const res = await historysAPI({});
    //     context.commit("getHisList",res.data);
    //     console.log(res.data);
    // }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}