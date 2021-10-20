<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <div class="d-flex">
      <div><input type="text" /><button @click="buscar">Buscar</button></div>

      <div class="check">
        <p>Buscar por genero</p>
        <input type="checkbox" id="Accion" name="Accion" value="Bike" />
        <label for="Accion">Accion</label><br />
        <input type="checkbox" id="Estrategia" name="Estrategia" value="Car" />
        <label for="Estrategia">Estrategia</label><br />
        <input type="checkbox" id="Deportes" name="Deportes" value="Boat" />
        <label for="Deportes">Deportes</label><br /><br />
        <input type="checkbox" id="Rol" name="Rol" value="Boat" />
        <label for="Rol">Rol</label><br /><br />
        <input type="checkbox" id="Aventura" name="Aventura" value="Boat" />
        <label for="Aventura">Aventura</label><br /><br />
      </div>
    </div>

    <div id="carouselExampleControls" class="pos" data-ride="carousel" >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../img/Monkey.jpg" alt=""/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../img/Monkey.jpg" alt=""/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../img/Monkey.jpg" alt="" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="" >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls"  role="button" data-slide="">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="separador">
      <button @click="principal">Volver</button>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Principal",
  components: {
    HelloWorld,
  },

  data() {
    return {
      titulo: "Buscar proyecto",
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
  left: 600px;
  width: 600px;
  height: 250px;
  background-color: red;
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
</style>
