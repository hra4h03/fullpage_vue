import Vue from "vue";
import App from "./App.vue";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import "./fullpage.scrollHorizontally.min"; // Optional. When using fullpage extensions
import VueFullPage from "vue-fullpage.js";
import "video.js/dist/video-js.css";

Vue.use(VueFullPage);

import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
