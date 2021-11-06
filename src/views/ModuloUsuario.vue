<template>
  <div class="container">
    <h1 class="text-warning">
      Modulo del usuario: {{ usuarioLogeado.nombre }}
    </h1>
    <div>
      <h4>Proyectos colaborando como DEV</h4>
    </div>

    <table class="table table-success">
      <thead>
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Genero</th>
          <th scope="col">Monto</th>
          <th scope="col">Creador</th>
          <th scope="col">Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in usuarioLogeado.proyectosDev" :key="p.id">
          <td>
            <span>{{ p.titulo }}</span>
          </td>
          <td>
            <span>{{ p.genero }}</span>
          </td>
          <td>
            <span>${{ p.monto }}</span>
          </td>
          <td>
            <span>{{ p.creador }}</span>
          </td>
          <td>
            <div class="text-center" @click="borrar(p.id)">
              <button class="btn btn-danger">Borrar</button>
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <h4>Proyectos colaborando como PATROCINADOR</h4>
    </div>
    <table class="table table-secondary">
      <thead>
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Genero</th>
          <th scope="col">Monto</th>
          <th scope="col">Creador</th>
          <th scope="col">Mi patrocinio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in usuarioLogeado.proyectosPat" :key="p.id">
          <td>
            <span>{{ p.titulo }}</span>
          </td>
          <td>
            <span>{{ p.genero }}</span>
          </td>
          <td>
            <span>${{ p.monto }}</span>
          </td>
          <td>
            <span>{{ p.creador }}</span>
          </td>
          <td>
            <span>{{ monto }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <button>Patrocinar</button>
    <input v-model="monto" type="text" />
    <hr />
    <div>
      <button class="btn btn-dark" @click="tienda">Volver</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ModuloUsuario",
  components: {},

  computed: {
    ...mapGetters({ listaProyectos: "getProyectos" }),
    ...mapGetters({ usuarios: "getUsuarios" }),
    ...mapGetters({ usuarioLogeado: "getUsuarioLogeado" }),
  },

  data() {
    return {
      monto: 0,
    };
  },

  methods: {
    tienda() {
      this.$router.push("/tienda");
    },
    producto() {
      this.$router.push("/producto");
    },
    borrarDev(index) {
      this.usuarioLogeado.proyectosDev.splice(index, 1);
    },
  },
};
</script>


