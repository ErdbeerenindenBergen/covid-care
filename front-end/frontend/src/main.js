import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashCan);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_REMOTE_API;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
