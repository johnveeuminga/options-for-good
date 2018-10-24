import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

// Plugins
import smoothScroll from './plugins/smoothScroll'
import BannerSwitcher from './plugins/banner-switcher'

Vue.config.productionTip = false

const bgImages = ['banner-image-2.jpg', 'banner-image.jpg', 'banner-image-3.jpg', 'banner-image-4.jpg']

Vue.use(smoothScroll)
Vue.use(BannerSwitcher, store, {
  bgImages,
  selected: 0
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
