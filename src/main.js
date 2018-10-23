import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

// Plugins
import smoothScroll from './plugins/smoothScroll'

Vue.config.productionTip = false

Vue.use(smoothScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
