/*Using for singleton*/
const VueAxios = {
  vm: {},
  install(Vue, instance) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    if (!instance) {
      return;
    }
    // eslint-disable-next-line no-param-reassign
    Vue.axios = instance;
    // eslint-disable-next-line no-param-reassign
    Vue.$http = instance;
    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get() {
          return instance;
        },
      },
      $http: {
        get: function get() {
          return instance;
        },
      },
    });
  },
};

export default VueAxios;
