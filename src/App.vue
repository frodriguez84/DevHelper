<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-toogle target="nav_collapse"></b-navbar-toogle>
          
        <b-navbar-brand href="#">DevHelper</b-navbar-brand>
         <!--<b-navbar-brand class="user">Bienvenido: </b-navbar-brand>-->
        <b-collapse is-nav id="nav_collapse"> 
          <b-navbar-nav>
            
            <b-nav-item :to="{name: 'Home'}" active-class="active" exact>Home</b-nav-item>
            <template v-if="$store.state.auth">
              <span >
              <b-navbar-brand class="user">Bienvenido: </b-navbar-brand>
              <b-nav-item :to="{name: 'Login'}" active-class="active" exact>Logout</b-nav-item>
              </span>
            </template>
            <template v-else>
            <b-nav-item :to="{name: 'Login'}" active-class="active" exact>Login</b-nav-item>

            </template>
            <b-nav-item :to="{name: 'Registro'}" active-class="active" exact>Registro</b-nav-item>
            <b-nav-item :to="{name: 'Principal'}" active-class="active" exact>Principal</b-nav-item>
            <b-nav-item :to="{name: 'Tienda'}" active-class="active" exact>Tienda</b-nav-item>
            <b-nav-item :to="{name: 'Producto'}" active-class="active" exact>Producto</b-nav-item>
            <b-nav-item :to="{name: 'ModuloUsuario'}" active-class="active" exact>Modulo Usuario</b-nav-item>
          </b-navbar-nav>
            <b-navbar-nav>
              <!-- <b-nav-item class="user">Bienvenido: {{usuarios.nombre}}</b-nav-item> -->
            </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <HelloWorld/>
    <router-view />
<footer class="sticky-footer">
        <div class="container my-auto">
            <div class="copyright text-center my-auto">
                <span>Copyright © DevHelper 2021</span>
            </div>
        </div>
    </footer>
    <div>
          <AgregarUsuario/>
        </div>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import AgregarUsuarios from './components/AgregarUsuario.vue'
import { mapGetters } from "vuex";

export default {
  name: 'app',

  components:{
    HelloWorld,
    AgregarUsuarios
    
  },
  computed: {
    ...mapGetters({ usuarios: "getUsuarios" }),
  },
  
}
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
footer.sticky-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: dimgray;
}

footer.sticky-footer .copyright {
  line-height: 1;
  font-size: 0.9rem;
  color:white;
}

@media (min-width: 768px) {
  footer.sticky-footer {
    width: calc(100% - 0px);
  }
  
  .user{
    position:absolute;
    width:20%;
    right: 5%;
    text-align:center;
  }
}
</style>  

