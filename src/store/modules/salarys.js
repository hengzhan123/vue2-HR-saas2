import { settingsAPI } from '@/api/salarys'
const state = {
    seList: [],
}

const mutations = {
    getSeList(state, val) {
        state.seList = val;
    },
}

const actions = {
    // 津贴列表
    async getsettingsAll(context) {
        const res = await settingsAPI({});
        context.commit("getSeList", res.data); 
        console.log(res.data);
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}