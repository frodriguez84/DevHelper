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
          <th scope="col">Ver</th>
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
            <div class="text-center" @click="borrarDev(p.id)">
              <button class="btn btn-danger">Borrar</button>
              <span class="fa fa-trash"></span>
            </div>
          </td>
          <td>
            <button class="btn btn-warning" @click="producto">Ver</button>
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
          <th scope="col">Meta para desarrollo</th>
          <th scope="col">Creador</th>
          <th scope="col">Cuanto aportar?</th>
          <th scope="col">Mi monto</th>
          <th scope="col">Borrar</th>
          <th scope="col">Ver</th>
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
            <input v-model="monto" type="number">
            <button @click="aportar(p.id)">Patrocinar</button>
          </td>
          <td>
            <span>{{ monto }}</span>
          </td>
          <td>
            <div class="text-center" @click="borrarPat(p.id)">
              <button class="btn btn-danger">Borrar</button>
              <span class="fa fa-trash"></span>
            </div>
          </td>
          <td>
            <button class="btn btn-warning" @click="producto">Ver</button>         
          </td>
        </tr>
      </tbody>
    </table>
    
    <hr />
    <div>
      <button class="btn btn-dark" @click="tienda">Volver</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from "vuex";
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

    ...mapActions("pushUsuarios"),

    tienda() {
      this.$router.push("/tienda");
    },
    producto() {
      this.$router.push("/producto");
    },
  async borrarDev(index) {

      const i = Number(index);
      const miUsuario = this.usuarioLogeado
      const borrado = miUsuario.proyectosDev.findIndex(element => element.id == i)
      miUsuario.proyectosDev.splice(borrado, 1)

      try {
        await axios.put( `https://6180891b8bfae60017adfb16.mockapi.io/api/users/${miUsuario.id}`,
                      miUsuario)
                      .then(this.$store.dispatch("pushUsuarios", miUsuario))
      } catch (error) {
        console.log(error, 'No se pudo enviar')
      }

    },
  async borrarPat(index) {
      const i = Number(index);
      const miUsuario = this.usuarioLogeado
      const borrado = miUsuario.proyectosPat.findIndex(element => element.id == i)
      miUsuario.proyectosPat.splice(borrado, 1)

      try {
        
        await axios.put( `https://6180891b8bfae60017adfb16.mockapi.io/api/users/${miUsuario.id}`,
                      miUsuario)
                      .then(this.$store.dispatch("pushUsuarios", miUsuario))
      } catch (error) {
        console.log(error, 'No se pudo enviar')
      }

    },


    aportar(index){

    },
  },
};
</script>

