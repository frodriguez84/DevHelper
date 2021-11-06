<template>
  <div class="container" >
    <div class="row" v-if="proyectos.length > 0">
      <div class="alert alert-success">
        Se encontraron: {{ proyectos.length }} proyectos
      </div>
      <proyecto :proyecto="p" v-for="p in proyectos" :key="p.id"></proyecto>
      <!-- <span v-for="p in proyectos" :key="p.id">
        <p>{{ p.titulo }}</p>
        <p>{{ p.monto }}</p>
      </span> -->
    </div>
    <div v-else class="alert alert-danger">No se encontraron proyectos</div>
  </div>
</template>
  
<script>
import proyecto from "./ProyectoItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    proyecto,
  },
  computed: {
    ...mapGetters({ proyectos: "filteredProyects" }),
  },
};
</script>
