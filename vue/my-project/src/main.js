// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';

Vue.config.productionTip = false

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
      Amessage:'',
      Bmessage:''
  },
    getters: {},
    actions: {},
    mutations: {
      Amessage(state,payload){
          state.Amessage=payload.Amessage
      },
      Bmessage(state,payload){
          state.Bmessage=payload.Bmessage
      }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data:{},
  components: { App },
  template: '<App/>'
})
 