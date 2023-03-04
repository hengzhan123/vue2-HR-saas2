import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import settings from './modules/settings'
import user from './modules/user'
import tagsView from './modules/tagsView';

import social from './modules/social'
import salarys from './modules/salarys'  

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings, 
    user,
    tagsView,
    social,
    salarys
  },
  getters
})

export default store
