import axios from "axios";
import Vue from "vue";
import store from "../store";
import VueAxios from "../utils/vueAxios.plugin";

const service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 15000,
});

Vue.store = store; // set store instance

const installer = {
  vm: {},
  // eslint-disable-next-line no-shadow
  install(VueInstance) {
    VueInstance.use(VueAxios, service);
  },
};

export { installer as VueAxios, service as axios };
