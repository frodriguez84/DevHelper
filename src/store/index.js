import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Mensaje desde el STATE',
    msg2: 'Otro mensaje usando getters',
    nombre: 'Maximo',
    apellido: 'Cosetti',
    amigos:[],
    amigo: null,

  },
  mutations: {
    addAmigo(state){
      state.amigos = [state.amigo, ...state.amigos]
    }
  },
  actions: {
    addAmigoAction(context){
      context.commit('addAmigo')
    }

  },
  modules: {
  },
  getters: {
     mensaje(state){
       return state.msg2;
     },
     nombreCompleto(state){
      return `${state.nombre} ${state.apellido}`
     }
  }
})
