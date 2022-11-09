import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";

Vue.mixin({
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapMutations({}),
  },
});
