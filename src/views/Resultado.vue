<template>
  <div class="container">
    <div>
      <h2>Resultado de busqueda</h2>
      <h4>Estas buscando por: Aventura, Rol</h4>
    </div>

    <table class="table table-dark">
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
          <td>Doom</td>
          <td>Thornton</td>
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
      <button @click="buscar">Volver</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Resultado",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },

  methods: {
    buscar() {
      this.$router.push("/buscar");
    },
    producto() {
      this.$router.push("/producto");
    },
  },
};
</script>
