import Vue from "vue";
import Vuex from "vuex";

import { app } from "@/store/modules/app";
import { declaration } from "@/store/modules/declaration";
import { form } from "@/store/modules/form";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    declaration,
    form
  }
});
