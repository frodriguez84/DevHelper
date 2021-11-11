import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
import axios from 'axios'

export default new Vuex.Store({
  state: {
    usuarios: [],
    auth: false,
    userSeleccionado: null,
    listaUsuarios: [],
    proyectos: [],
    actualizar: false,
    url: "https://6180891b8bfae60017adfb16.mockapi.io/api/users",
    url: "https://618194d132c9e2001780488e.mockapi.io/api/products",
    filter: {
      query: '',
      disponible: true,
    }


  },
  methods: {

  },

  mutations: {
    setAuth(state) {
      state.auth = !state.auth
    },

    setActualizar(state){
      state.actualizar = !state.actualizar
    },

    /* agregarUsuario: (state, usuario) => {
      state.listaUsuarios.push(usuario);
    }, */
    SET_QUERY(state, query) {
      state.filter.query = query;
    },

    SET_DISPONIBLE(state) {
      state.filter.disponible = !state.filter.disponible;
    },

    llenarProyectos: (state, proyectos) => {
      state.proyectos = proyectos
    },

    pushProyectos: (state, proyectos) =>{
      state.proyectos.push(proyectos)
    },

    borrarProyecto: (state, id) => {
      let borrado = state.proyectos.findIndex(element => element.id == id)
      state.proyectos.splice(borrado, 1)
    },

    llenarUsuarios: (state, usuarios) =>{
      state.usuarios = usuarios
    },

    pushUsuarios: (state, usuarios) =>{
      state.proyectos.push(usuarios)
    },
  

  },
  actions: {

    /* agregarUsuario: ({ commit }, usuario) => {
      commit("agregarUsuario", usuario);
    }, */

    setAuthAction(context) {
      context.commit('setAuth')
    },
    setActualizar(context){
      context.commit('setActualizar')
    },

    llenarProyectos: ({ commit }, proyectos) => {
      commit('llenarProyectos', proyectos)
    },

    pushProyectos: ({ commit }, proyectos) => {
      commit('pushProyectos', proyectos)
    },

    borrarProyecto: ({ commit }, id) =>{
      commit('borrarProyecto', id, 1)
    },

    llenarUsuarios: ({ commit }, usuarios) =>{
      commit('llenarUsuarios', usuarios)
    },

    pushusUarios: ({ commit }, usuarios) => {
      commit('pushProyectos', usuarios)
    },

  },
  modules: {
  },
  getters: {
    
    filteredProyects(state) {
      if (state.filter.query.length > 2) {
        var proyectos = state.proyectos.filter(p => p.disponible === state.filter.disponible)
        return proyectos.filter(p => p.titulo.toLowerCase().includes(state.filter.query));
      }
      return proyectos;
    },
    getProyectos: (state) => {
      return state.proyectos
    },
    getUsuarios: (state) => {
      return state.usuarios;
    },
    getUsuarioLogeado:(state)=>{
      return state.userSeleccionado
    },
    getActualizar:(state)=>{
      return state.actualizar
    }
  },

})
