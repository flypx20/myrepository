import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    Amessage:'',
    Bmessage:''
}
const mutations = {
    Amessage(state,payload){
        state.Amessage=payload.Amessage
    },
    Bmessage(state,payload){
        state.Bmessage=payload.Bmessage
    }
}
export default {
    state,
    mutations
}