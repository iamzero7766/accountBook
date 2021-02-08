import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabIndex: 1,
    menuList: [],
  },
  mutations: {
    setTabIndex(state, value) {
      state.tabIndex = value;
    },
    setMenuList(state, arr) {
      state.menuList = arr;
    }
  },
  actions: {},
  modules: {}
});
