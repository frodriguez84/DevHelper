<template>
  <div class="col-sm-6 mb-3">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">{{ proyecto.titulo }}</h5>
        <div v-if="proyecto.disponible">
          <h6 class="card-subtitule">Proyecto disponible</h6>
        </div>
        <div v-else>
          <h6 class="card-subtitule">Proyecto no disponible</h6>
        </div>
      </div>
      <div class="card-body">
        <p class="card-text">{{ proyecto.genero }}</p>
        <p class="card-text">{{ proyecto.monto }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    proyecto: {
      type: Object,
      required: true
    },
  },
};
</script>


