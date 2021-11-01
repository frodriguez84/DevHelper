import Vue from 'vue'
import Vuex from 'vuex'
import fs from 'fs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Mensaje desde el STATE',
    msg2: 'Otro mensaje usando getters',
    nombre: 'Maximo',
    apellido: 'Cosetti',
    amigos:[],
    amigo: null,
    usuarios:[],
    usuario: null,
    auth: false,

  },
  mutations: {
    setAuth(state){
      state.auth = !this.auth
    },

    addAmigo(state){
      state.amigos = [state.amigo, ...state.amigos]
    },
    agregarUsuario : (state , usuario) =>{
      state.usuarios.push(usuario);
      /* var usu = JSON.stringify(usuario)
      fs.writeFile('bdUsuarios.json', usu, function(err, result){
        if(err) console.log("error: ", err)
      }) */
    }
  },
  actions: {
    addAmigoAction(context){
      context.commit('addAmigo')
    },
    agregarUsuario : ({commit}, usuario)=>{
      commit("agregarUsuario", usuario);
    },

    setAuthAction(context){
      context.commit('setAuth')
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
     },
     getUsuarios:(state) => {
      return state.usuarios;
    },
  }
})
