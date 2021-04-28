import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import msToMm from "@/filters/ms-to-mm.js";
import blur from "@/directives/blur.js";

import routes from "@/routes";

import EventBus from "@/plugins/event-bus";

Vue.use(EventBus);
Vue.use(VueRouter);
Vue.use(msToMm);
Vue.use(blur);

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
