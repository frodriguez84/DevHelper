import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
    users: [],
    usuario: null,
    auth: false,
    url: "https://6180891b8bfae60017adfb16.mockapi.io/api/users",

  },
  methods:{

  },

  mutations: {
    setAuth(state) {
      state.auth = !this.auth
    },

    agregarUsuario: (state, usuario) => {
      state.usuarios.push(usuario);
    },

  },
  actions: {

    agregarUsuario: ({ commit }, usuario) => {
      commit("agregarUsuario", usuario);
    },

    setAuthAction(context) {
      context.commit('setAuth')
    }

  },
  modules: {
  },
  getters: {
    getUsuarios: (state) => {
      return state.usuarios;
    },

    async getUsers() {
      let response = await axios.get(url);
      this.users = response.data
    }
  },
  created() {
    this.getUsers()
  },
})
