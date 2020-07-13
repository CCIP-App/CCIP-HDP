import Vue from "vue";
import Vuex from "vuex";

import { app } from "@/store/modules/app.module";
import { declaration } from "@/store/modules/declaration.module";
import { form } from "@/store/modules/form.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    declaration,
    form
  }
});
