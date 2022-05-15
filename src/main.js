// Recomendation of babeljs (https://babeljs.io/docs/en/babel-polyfill)
import 'core-js/stable'; // only stable feature also is possible with only `core-js`
import 'regenerator-runtime/runtime'; // To ensure that regeneratorRuntime is defined globally

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import { createProvider } from './vue-apollo'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
