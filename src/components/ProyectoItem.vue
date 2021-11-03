<template>
    <div class="col-sm-6 mb-3">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">{{ proyecto.titulo }}</h5>
                <h6 class="card-subtitule">Disponible: {{ proyecto.disponible }}</h6>
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
      required: true,
    },
  },
};
</script>


