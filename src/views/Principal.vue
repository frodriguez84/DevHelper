<template>
  <div class="principal">
    <h1>{{ titulo }}</h1>

    <div class="proyect">
      <div class="text">Titulo Proyecto</div>
      <div class="text">Descripcion</div>
      <div class="text">Creador</div>

      <div>
        <button class="btn">Ver</button>
      </div>

      <div>
        <button class="btn">Dev</button>
      </div>
      <div>
        <button class="btn">Patrocinador</button>
      </div>
    </div>
    <br />
    <hr />

    <div class="bot">
      <button class="tienda">Tienda</button>
      <router-link to="/">
        <button class="out">LogOut</button>
      </router-link>
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
      titulo: "Pagina Principal",
    };
  },

  methods: {},
};
</script>

<style>
.proyect {
  background-color: darkgray;
  padding: 3%;
  margin-left: 35%;
  margin-right: 35%;
  text-align: left;
}
.btn {
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
  float: left;
}
.out {
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
  float: right;
  padding: 0.5%;
  margin-left: 15%;
  margin-right: 35%;
}
.tienda {
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
  float: left;
  padding: 0.5%;
  margin-left: 35%;
  margin-right: 15%;
}

</style>