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
      state.auth = !this.auth
    },

    agregarUsuario: (state, usuario) => {
      state.listaUsuarios.push(usuario);
    },
    SET_QUERY(state, query) {
      state.filter.query = query;
    },
    SET_DISPONIBLE(state) {
      state.filter.disponible = !state.filter.disponible;
    },

    llenarProyectos: (state, proyectos) => {
      state.proyectos = proyectos
    },

  },
  actions: {

    agregarUsuario: ({ commit }, usuario) => {
      commit("agregarUsuario", usuario);
    },

    setAuthAction(context) {
      context.commit('setAuth')
    },

    llenarProyectos: ({ commit }, proyectos) => {
      commit('llenarProyectos', proyectos)
    },

  },
  modules: {
  },
  getters: {
    getUsuarios: (state) => {
      return state.listaUsuarios;
    },
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
  },

})
