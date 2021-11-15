<template>
  <div class="col-sm-6 mb-3 centro">
    <div class="card" >
      <div class="card-header">
        <img class="card-img-top" src="" alt="">
        <h5 class="card-title">Titulo: {{ proyecto.titulo }}</h5>
        <h6 class="card-subtitule" v-if="proyecto.disponible">Disponible: Si</h6>
        <h6 class="card-subtitule" v-else>Disponible: No</h6>
      </div>
      <div class="card-body">
        <p class="card-text">Genero: {{ proyecto.genero }}</p>
        <p class="card-text">Monto: ${{ proyecto.monto }}</p>
        <button @click="producto" class="btn btn-outline-primary btn-block">Ver</button>
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
  methods:{
    producto() {
      this.$router.push("/producto");
    },
  }
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
.card-header{
  background-color: rgb(80, 80, 80);
  color: whitesmoke;
}
.card-body{
  background-color: rgb(209, 209, 209);
}
</style>


