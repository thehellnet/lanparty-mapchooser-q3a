import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import Loading from "vue-loading-overlay";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(Loading, {
  color: "blue",
  canCancel: false,
  isFullPage: true
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
