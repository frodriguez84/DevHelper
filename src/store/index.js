import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
import axios from 'axios'

export default new Vuex.Store({
  state: {
    aporte: false,
    usuarios: [],
    auth: false,
    userSeleccionado: null,
    listaDev: [],
    listaPat: [],
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
    setAporte(state){
      state.aporte = !state.aporte
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
    pushDev: (state, listaDev) =>{
      state.listaDev.push(listaDev)
    },

    pushPat: (state, listaPat) =>{
      state.listaPat.push(listaPat)
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
    setAporte(context){
      context.commit('setAporte')
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

    pushDev : ({commit}, listaDev) =>{
      commit('pushDev', listaDev)
    },

    pushPat : ({commit}, listaPat) =>{
      commit('pushPat', listaPat)
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
    },
    getAporte:(state)=>{
      return state.aporte
    },
    getListaDev:(state) =>{
      return state.listaDev
    },
    getListaPat:(state) =>{
      return state.listaPat
    },
  },

})
