<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <h3>{{ subtitulo }}</h3>
    <div class="d-flex">
      <div><input type="text" /><button @click="buscar">Buscar</button></div>

      <div class="check">
          <p class="p">Buscar por genero</p>
        <form class="checkbox">
          <b-form-checkbox-group v-model="check" :options="tipos">
          </b-form-checkbox-group>
            <p>
              Filtro: <strong>{{ check }}</strong>
            </p>
        </form>
      </div>
    </div>

    <div id="carouselExampleControls" class="pos" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../img/Monkey.jpg" alt="" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../img/bdg.jpg" alt="" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../img/Monkey.jpg" alt="" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide=""
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide=""
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
      </a>
    </div>

    <div class="separador">
      <button class="btn btn-dark" @click="principal">Volver</button>
    </div>
  </div>
</template>


<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Tienda",
  components: {
    HelloWorld,
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
.pos {
  position: FIXED;
  top: 150px;
  left: 660px;
  width: 700px;
  height: 250px;
}
.check {
  position: fixed;
  top: 180px;
  left: 150px;
  width: 100px;
  height: 50px;
}
.separador {
  position: fixed;
  top: 550px;
  left: 900px;
  width: 100px;
  height: 50px;
}
.checkbox {
  text-align: left;
  width: 30em;
}
.p {
  text-align: center;

  width: 140%;
  text-decoration-line: underline;
}
</style>
