import Vue from "vue";

const api = {
  sendFeedback(payload) {
    return Vue.axios.post("/feedbacks", payload);
  },
};

export default api;

// import Vue from "vue";

// const baseURL = "http://localhost:3000";
// const api = {
//   sendFeedback(payload) {
//     return Vue.axios.post(`${baseURL}/feedbacks`, payload);
//   },
// };

// export default api;
