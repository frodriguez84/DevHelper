<template>
  <div class="container">
    <h1>{{ titulo }} {{ nombreJuego }}</h1>

    <div>
      <b-card
        title=""
        img-src="https://xboxplay.games/imagenes/redimensionar2.php?imagen=https://xboxplay.games/uploadStream/11443.jpg&an=722&al=400"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 30rem"
        class="mb-2"
        >{{ nombreJuego }}
        <b-card-text>
          {{ descripcion }}
        </b-card-text>

        <b-button href="#" variant="primary">Imagenes</b-button>
      </b-card>

      <div class="pos">
        <div class="col-md-5">
          <h5>Avance del desarrollo</h5>
          <b-progress
            :value="35.25"
            :max="max"
            :precision="2"
            show-value
            variant="danger"
            class="mb-5"
          ></b-progress>
        </div>
      </div>
      <div class="pos2">
        <h5>Staff / Staff completo</h5>
        <b-progress
          :value="80"
          :max="max"
          :precision="2"
          show-value
          variant="success"
          class="mb-5"
        ></b-progress>
      </div>

      <div class="pos3">
        <h5>Recaudado / Requerido</h5>
        <b-progress
          show-value
          variant="warning"
          :value="40"
          :max="max"
          :precision="2"
          class="mb-5"
        ></b-progress>
        <b-button @click="principal" variant="dark">Volver</b-button>
      </div>
    </div>

    
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Producto",
  components: {
    HelloWorld,
  },

  data() {
    return {
      titulo: "Proyecto: ",
      nombreJuego: "Baldur's Gate 3",
      descripcion: "Agregar una descripcion",
      striped: true,
      
    };
  },
  methods: {
    principal() {
      this.$router.push("/principal");
    },
  },
};
</script>

<style scoped>
.pos {
  position: FIXED;
  top: 150px;
  left: 700px;
  width: 1500px;
  height: 200px;
}
.pos2 {
  position: FIXED;
  top: 270px;
  left: 700px;
  width: 650px;
  height: 300px;
}
.pos3 {
  position: FIXED;
  top: 400px;
  left: 700px;
  width: 650px;
  height: 300px;
}
</style>