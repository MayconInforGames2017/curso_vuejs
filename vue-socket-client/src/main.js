import Vue from 'vue'
import App from './App.vue'

import Vuex from 'Vuex'
Vue.use(Vuex)

import VueSocketio from 'vue-socket.io'

import counterModule from '@/modules/counter'

const store = new Vuex.Store({
  state: {
    io: {}
  },
  mutations: {
    setSocket: (state, socket) => {
      state.io = socket
      console.log('Socket conectado')
    }
  },
  modules: {
     counterModule
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(VueSocketio, 'http://localhost:5000', store)

new Vue({
  el: '#app',
  store,
  // Em cada fardo, definimos um socket para este cliente
  beforeCreate () {
    store.commit('setSocket', this.$socket)
  },
  render: h => h(App)
})
