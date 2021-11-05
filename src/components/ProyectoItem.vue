<template>
  <div class="col-sm-6 mb-3">
    <div class="card" style="width: 27rem;">
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


