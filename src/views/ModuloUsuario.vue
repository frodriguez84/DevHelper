<template>
  <div class="container">
    <h1>Modulo del usuario: {{ usuario }}</h1>
    <div>
      <h4>Proyectos DEV</h4>
    </div>

    <table class="table table-danger">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Creador</th>
          <th scope="col">Presupuesto necesario</th>
          <th scope="col">Ver</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mario Kart</td>
          <td>Otto</td>
          <td>$ 1000</td>
          <td><button @click="producto">Ver</button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Baldur's Gate 3</td>
          <td>Larian</td>
          <td>$ 1500</td>
          <td><button @click="producto">Ver</button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Lineage 2</td>
          <td>the Bird</td>
          <td>$ 950</td>
          <td><button @click="producto">Ver</button></td>
        </tr>
      </tbody>
    </table>

    <div>
      <h4>Proyectos PATROCINADOR</h4>
    </div>

    <table class="table table-info">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Creador</th>
          <th scope="col">Presupuesto necesario</th>
          <th scope="col">Mi aporte</th>
          <th scope="col">Ver</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Icewind Dale 2</td>
          <td>Phil_4char</td>
          <td>$ 975</td>
          <td>$ 250</td>
          <td><button @click="producto">Ver</button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Neverwinger Nights 2</td>
          <td>Nvidia</td>
          <td>$ 1800</td>
          <td>$ 350</td>
          <td><button @click="producto">Ver</button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Warcraft 4</td>
          <td>Blizzard</td>
          <td>$ 9800</td>
          <td>$ 110</td>
          <td><button @click="producto">Ver</button></td>
        </tr>
      </tbody>
    </table>

    <div>
      <button class="btn btn-dark" @click="tienda">Volver</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "ModuloUsuario",
  components: {
    HelloWorld,
  },
  data() {
    return {
      usuario: "player_not_found",
    };
  },

  methods: {
    tienda() {
      this.$router.push("/tienda");
    },
    producto() {
      this.$router.push("/producto");
    },


  },
};
</script>


