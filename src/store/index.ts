import Vue from "vue";
import Vuex from "vuex";

import { app } from "@/store/modules/app";
import { declaration } from "@/store/modules/declaration";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    declaration
  }
});
