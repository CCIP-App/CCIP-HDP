import Vue from "vue";
import VueQrcodeReader from "vue-qrcode-reader";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./registerServiceWorker";

import VueQrcode from "@chenfengyuan/vue-qrcode";

Vue.component(VueQrcode.name, VueQrcode);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab);
library.add(fas);
library.add(far);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueQrcodeReader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
