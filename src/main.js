import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import bridge from "@vkontakte/vk-bridge";

import './App.css';

Vue.config.productionTip = false

bridge.send("VKWebAppInit", {});

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
