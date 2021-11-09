<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-toogle target="nav_collapse"></b-navbar-toogle>

        <b-navbar-brand href="#">DevHelper</b-navbar-brand>
        <!--<b-navbar-brand class="user">Bienvenido: </b-navbar-brand>-->
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Home' }" active-class="active" exact
              >Home</b-nav-item
            >
            <template v-if="$store.state.auth">
              <b-navbar-brand class="user"
                >Bienvenido:
                {{ this.$store.state.userSeleccionado.nombre }}</b-navbar-brand
              >
              <button @click="logout" class="user1 btn btn-danger">Logout</button>

              <b-nav-item
                :to="{ name: 'Principal' }"
                active-class="active"
                exact
                >Principal</b-nav-item
              >
              <b-nav-item :to="{ name: 'Tienda' }" active-class="active" exact
                >Tienda</b-nav-item
              >
              <!-- <b-nav-item :to="{ name: 'Producto' }" active-class="active" exact
                >Producto</b-nav-item
              > -->
              <b-nav-item
                :to="{ name: 'ModuloUsuario' }"
                active-class="active"
                exact
                >Modulo Usuario</b-nav-item
              >
              <b-nav-item
                :to="{ name: 'Dashboard' }"
                active-class="active"
                exact
                >Dashboard</b-nav-item
              >
            </template>

            <template v-else>
              <b-nav-item :to="{ name: 'Login' }" active-class="active" exact
                >Login</b-nav-item
              >
              <b-nav-item :to="{ name: 'Registro' }" active-class="active" exact
                >Registro</b-nav-item
              >

              <b-nav-item
                :to="{ name: 'Principal' }"
                active-class="active"
                exact
                >Principal</b-nav-item
              >

              <b-nav-item :to="{ name: 'Tienda' }" active-class="active" exact
                >Tienda</b-nav-item
              >
              <b-nav-item
                :to="{ name: 'Dashboard' }"
                active-class="active"
                exact
                >Dashboard</b-nav-item
              >
            </template>
          </b-navbar-nav>
          <b-navbar-nav>
            
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
    <template>
      <div class="foot">
        <footer class="sticky-footer">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright © DevHelper 2021</span>
            </div>
          </div>
        </footer>
      </div>
    </template>
  </div>
</template>

<script>
import AgregarUsuarios from "./components/AgregarUsuario.vue";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "app",

  components: {
    AgregarUsuarios,
  },
  data() {
    return {
      url: "https://618194d132c9e2001780488e.mockapi.io/api/products",
      url2: "https://6180891b8bfae60017adfb16.mockapi.io/api/users",
    };
  },

  computed: {
    ...mapGetters({ usuarios: "getUsuarios" }),
    ...mapGetters({ usuarioLogeado: "getUsuarioLogeado" }),

  },
  methods: {
    logout() {
      if (this.usuarioLogeado.nombre !== undefined) {
        this.$store.state.auth = false;
        this.usuarioLogeado.nombre = undefined
        this.$router.push("/");
      } else {
        this.$router.push("/");
      }
    },
    ...mapActions("llenarProyectos"),
    ...mapActions("llenarUsuarios"),
  },
  async created() {
    await axios.get(this.url2).then((result) => {
      this.$store.dispatch("llenarUsuarios", result.data);
    }),
      await axios.get(this.url).then((result) => {
        this.$store.dispatch("llenarProyectos", result.data);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body{
  margin: 0;
  padding: 0;
  height: 100%;
}
footer {
  bottom: 0px !important;
  /* position: absolute; */
  margin-top: 8em;
  display: flex;
  align-items: center;
   height: 100px;
   background-color: rgba(0, 0, 0, 0.753);
}

footer.sticky-footer .copyright {
  line-height: 1;
  font-size: 1.5rem;
  color: white;
}

@media (min-width: 768px) {
  footer.sticky-footer {
    width: calc(100% - 0px);
  }

  .user {
    position: absolute;
    width: 20%;
    right: 10%;
    text-align: center;
  }
  .user1 {
    position: absolute;
    width: 5%;
    right: 3%;
    display: flexbox;
    text-align: center;
  }
}
</style>  

