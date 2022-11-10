import FeedbackButton from "./components/Feedback.vue";

function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$userOptions = options;
  Vue.component("feedback-ty", FeedbackButton);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

FeedbackButton.install = install;

export default FeedbackButton;
