<template>
  <div class="col-sm-6 mb-3 centro">
    <div class="card" >
      <div class="card-header">
        <img class="card-img-top" src="" alt="">
        <h5 class="card-title">Titulo: {{ proyecto.titulo }}</h5>
        <h6 class="card-subtitule">Disponible: {{ proyecto.disponible }}</h6>
      </div>
      <div class="card-body">
        <p class="card-text">Genero: {{ proyecto.genero }}</p>
        <p class="card-text">Monto: ${{ proyecto.monto }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import mapGetters from 'vuex'
export default {
  props: {
    proyecto: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.card{
  
  margin: 0 auto !important;
  margin-left: 2em;
}
.card:hover{
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
}
</style>


