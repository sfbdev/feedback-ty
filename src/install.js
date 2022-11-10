import FeedbackButton from "./components/Feedback.vue";

const Feedback = {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html

    Vue.component("feedback-button", FeedbackButton);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Feedback);
}

export default FeedbackButton;
