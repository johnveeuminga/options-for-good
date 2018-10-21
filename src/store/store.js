import Vue from 'vue'
import Vuex from 'vuex'
import fundraisers from './modules/fundraisers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    fundraisers
  }
})
