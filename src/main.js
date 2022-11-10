import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
// import VueAxios from "vue-axios";
import { VueAxios } from "./config/axios.js";

import "@/config/component";
import "@/config/globalMixin";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
