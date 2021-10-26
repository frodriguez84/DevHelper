<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>La solucion a tus proyectos</h3>
    <div>
      <button class="btn btn-dark" @click="login">Ingresar</button>
    </div>
    <hr> 
    <h2>Amigos</h2>
    <input type="text" v-model="amigo">
    <button @click="addAmigo">Agregar Amigo</button>
    <ul>
      <li 
      v-for="(amigo, index) in $store.state.amigos" 
      :key="index">
      {{ amigo }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Home",

  data() {
    return {
      titulo: "Prueba de Data",
      num: 0,
      amigo: '',
    };
  },

  methods: {
    suma() {
      this.num++;
    },
    login() {
      this.$router.push("/login");
    },
    addAmigo(){
      this.$store.state.amigo = this.amigo;
      this.$store.dispatch('addAmigoAction')
      this.amigo = '';
    },

  },
};
</script>
