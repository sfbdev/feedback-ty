import Vue from "vue";

const api = {
  sendFeedback(payload) {
    return Vue.axios.post("/feedbacks", payload);
  },
};

export default api;
