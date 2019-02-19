// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import VueFire from "vuefire";

import App from "./App";
import Log from "./components/Log";
import Result from "./components/Result";
import Datetime from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuelidate);
Vue.use(VueFire);
Vue.use(VueRouter);
Vue.use(Datetime);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Log },
    { path: "/result", component: Result }
  ]
});

/* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   components: { App },
//   template: "<App/>"
// });

/* Instance: Each Vue instance goes through a series of initialization steps when it’s created 
- for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. 
*/

new Vue({
  router,
  // BootstrapVue,
  // el: "#app",
  components: {
    // datetime: Datetime
    // BootstrapVue
  },
  template: `
    <div id="app">
      <ul id="nav">
        <li><router-link to="/">Log</router-link></li>
        <li><router-link to="/result">Result</router-link></li>
      </ul>
      <router-view/>
    </div>
  `
  // template: "<App>"
}).$mount("#app");

/* 
Mounting hooks are often the most-used hooks, for better or worse. They allow you to access your component immediately before and after the first render. They do not, however, run during server-side rendering.

Use if: You need to access or modify the DOM of your component immediately before or after the initial render.


*/
