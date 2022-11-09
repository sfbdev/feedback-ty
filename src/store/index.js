import Vue from "vue";
import Vuex from "vuex";
import api from "@/utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    // eslint-disable-next-line no-unused-vars
    sendFeedback({ state }, payload) {
      return api.sendFeedback(payload);
    },
  },
  modules: {},
});
