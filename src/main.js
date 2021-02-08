import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import "font-awesome/css/font-awesome.min.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animated from "animate.css";
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import "./css/theme.js";
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from "axios";
import "../public/requestUrl.js";


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(MintUI);
Vue.use(animated);
Vue.use(ElementUI);
Vue.use(MuseUI);
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
