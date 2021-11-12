<template>
  <div class="container">
    <h1 class="text-warning">
      Modulo del usuario: {{ usuarioLogeado.nombre }}
    </h1>
    <div>
      <h4>Proyectos colaborando como DEV</h4>
      <!-- <h1>{{usuarioLogeado.proyectosDev[0]}}</h1> -->
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
          <th scope="col">Mi aporte</th>
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
            <div v-if="!aporto">
              <input v-model="p.aporte" type="number" />
              <button @click="aportar(p.id, p.aporte)" class="btn btn-warning">
                Aportar
              </button>
            </div>
            <div v-else>
              <input v-model="p.aporte" type="number" disabled />
              <span class="btn btn-success disabled">Gracias</span>
            </div>
          </td>
          <td>
            <span> ${{ p.aporte }} </span>
          </td>
          <td>
            <div class="text-center" @click="borrarPat(p.id)">
              <button class="btn btn-danger">Borrar</button>
              <span class="fa fa-trash"></span>
            </div>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-block" @click="producto">
              Ver
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h5 v-if="usuarioLogeado.proyectosPat.length > 0" class="text-danger">
      Nota: Complete todos los aportes y clikee en "Aportar"
    </h5>
    <hr />
    <div>
      <button class="btn btn-dark" @click="tienda">Volver</button>
    </div>
    <br />
    <div>
      <button class="btn btn-dark" @click="principal">Principal</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
      aporto: false,
    };
  },

  beforeMount() {
    this.cargarListaDev();
    this.cargarListaPat();
  },

  methods: {
    ...mapActions("pushUsuarios"),

    principal() {
      this.$router.push("/principal");
    },

    tienda() {
      this.$router.push("/tienda");
    },
    producto() {
      this.$router.push("/producto");
    },
    async borrarDev(index) {
      const i = Number(index);
      const miUsuario = this.usuarioLogeado;
      const borrado = miUsuario.proyectosDev.findIndex(
        (element) => element.id == i
      );
      miUsuario.proyectosDev.splice(borrado, 1);

      try {
        await axios
          .put(
            `https://6180891b8bfae60017adfb16.mockapi.io/api/users/${miUsuario.id}`,
            miUsuario
          )
          .then(this.$store.dispatch("pushUsuarios", miUsuario));
      } catch (error) {
        console.log(error, "No se pudo enviar");
      }
    },
    async borrarPat(index) {
      const i = Number(index);
      const miUsuario = this.usuarioLogeado;
      const borrado = miUsuario.proyectosPat.findIndex(
        (element) => element.id == i
      );
      miUsuario.proyectosPat.splice(borrado, 1);

      try {
        await axios
          .put(
            `https://6180891b8bfae60017adfb16.mockapi.io/api/users/${miUsuario.id}`,
            miUsuario
          )
          .then(this.$store.dispatch("pushUsuarios", miUsuario));
      } catch (error) {
        console.log(error, "No se pudo enviar");
      }
    },

    aportar(index, aporte) {
      const result = window.confirm(
        "Seguro desea aportar las cantidades indicadas?"
      );
      const i = Number(index);
      const miUsuario = this.usuarioLogeado;
      const proyectoId = miUsuario.proyectosPat.findIndex(
        (element) => element.id == i
      );
      if (result) {
        if (aporte > 0 && aporte <= miUsuario.proyectosPat[proyectoId].monto) {
          miUsuario.proyectosPat[proyectoId].monto -= aporte;

          this.aporto = !this.aporto;
          alert("Su aporte ha sido guardado");
        } else {
          alert(
            "El monto no es correcto. \nPor favor verifique la cantidad ingresada"
          );
        }
      }
    },
    cargarListaDev() {
      return this.usuarioLogeado.proyectosDev;
    },
    cargarListaPat() {
      return this.usuarioLogeado.proyectosPat;
    },
  },
};
</script>

