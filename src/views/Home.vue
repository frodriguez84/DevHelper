<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>La solucion a tus proyectos</h3>
    <div>
      <button class="btn btn-dark" @click="login">Ingresar</button>
    </div>
    <hr />
    
    <div>
      <button @click="getUsuarios">Obtener usuarios</button>
      <ul>
        <span v-for="user in usuarios" :key="user.id">[ {{user.nombre}} ]</span>
        <br>
        <span v-for="user in usuarios" :key="user.id">[ {{user.password}} ]</span>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",

  data() {
    return {
      titulo: "Prueba de Data",
      usuarios: [],
    };
  },

  methods: {
    async getUsuarios() {
      const url = "https://6180891b8bfae60017adfb16.mockapi.io/api/users";
    let response = await axios.get(url)
    this.usuarios = response.data
    /* this.userSeleccionado = response.data */
    },

    login() {
      this.$router.push("/login");
    },
   
    
  },
  
};
</script>
