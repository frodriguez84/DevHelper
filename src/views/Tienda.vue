<template>
  <div class="container"  >
    <h1>{{ titulo }}</h1>
  
<div class="centrado">
      <slider class="carousel" animation="fade" width="500px" height="200px" >
      <slider-item v-for="(i, index) in listaProyectos" :key="index">
        <h3 class="text-success">{{ i.titulo }}</h3>
        <h4 class="text-warning">{{ i.genero }}</h4>
        <h4 class="text-success">${{ i.monto }}</h4>
        <div v-if="i.disponible">
          <h6 class="text-success">Disponible</h6>
        </div>
        <div v-else>
          <h6 class="text-danger">No disponible</h6>
        </div>
      </slider-item>
    </slider>

</div>
    <proyectos-app></proyectos-app>
   

    <div class="">
      <button class="btn btn-dark" @click="principal">Volver</button>
    </div>
  </div>
</template>


<script>
import ProyectosApp from "../components/ProyectosApp.vue";
import { mapGetters } from "vuex";
export default {
  name: "Tienda",

  components: {
    ProyectosApp,
  },
  computed: {
    ...mapGetters({ listaProyectos: "getProyectos" }),
  },

  data() {
    return {
      titulo: "Tienda",
      subtitulo: "Descubri todo lo que tenemos",
      check: [],
      tipos: [
        { value: "Estrategia", text: "Estrategia" },
        { value: "Rol", text: "Rol" },
        { value: "Rpg", text: "Rpg" },
        { value: "Deporte", text: "Deporte" },
        { value: "Accion", text: "Accion" },
        { value: "Indie", text: "Indie" },
        { value: "Aventura", text: "Aventura" },
      ],
    };
  },
  methods: {
    principal() {
      this.$router.push("/principal");
    },
    buscar() {
      this.$router.push("/resultado");
    },
  },
};
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  
}

.gallery {
  background: #eee;
}

.carousel{
  border: solid red 1px;
  margin: auto;
  color: grey;
  background-color: rgba(0, 0, 0, 0.103) ;
  border-radius: 20px;
}
.container{
  border: solid green 1px;
  margin-bottom: 100px;
  
}
.centrado{
  border: solid blue 1px;
}
</style>
