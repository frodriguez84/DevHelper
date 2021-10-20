<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-toogle target="nav_collapse"></b-navbar-toogle>
        <b-navbar-brand href="#">DevHelper</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse"> 
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}" active-class="active" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'Login'}" active-class="active" exact>Login</b-nav-item>
            <b-nav-item :to="{name: 'Registro'}" active-class="active" exact>Registro</b-nav-item>
            <b-nav-item :to="{name: 'Principal'}" active-class="active" exact>Principal</b-nav-item>
            <b-nav-item :to="{name: 'Buscar'}" active-class="active" exact>Buscar</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar>

    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Log In</router-link> |
      <router-link to="/registro">Registro</router-link> |
      <router-link to="/principal">Principal</router-link> |
      <router-link to="/buscar">Buscar</router-link> |
    </div> -->
    <router-view />
  </div>
</template>


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
</style>  

