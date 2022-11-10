import axios from "axios";
import VueAxios from "../utils/vueAxios.plugin";

const service = axios.create({
  baseURL: "https://feedback-ty-backend.onrender.coms",
  timeout: 15000,
});

const installer = {
  vm: {},
  // eslint-disable-next-line no-shadow
  install(VueInstance) {
    VueInstance.use(VueAxios, service);
  },
};

export { installer as VueAxios, service as axios };
