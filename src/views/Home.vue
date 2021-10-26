<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h3>La solucion a tus proyectos</h3>

    <div>
      <button class="btn btn-dark" @click="login">Ingresar</button>
    </div>
    <br>
    <hr> 
    <h4>{{ titulo }}</h4>
    <button @click="suma">+1</button>
    <h1>{{ num }}</h1>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {},

  data() {
    return {
      titulo: "Prueba de Data",
      num: 0,
    };
  },

  methods: {
    suma() {
      this.num++;
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>
