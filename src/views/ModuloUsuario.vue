<template>
  <div class="container">
    <h1 class="text-warning">
      Modulo del usuario: {{ usuarioLogeado.nombre }}
    </h1>
    <div>
      <h4>Proyectos colaborando como DEV</h4>
      <!-- <h1>{{listaDev}}</h1> -->
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
        <tr v-for="p in listaDev" :key="p.id">
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
            <button class="btn btn-outline-primary btn-block" @click="producto">Ver</button>
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
        <tr v-for="p in listaPat" :key="p.id">
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
            <div v-if="!p.aportable">
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
      Nota: Recuerde que solo puede aportar a un proyecto solo una vez
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
    ...mapGetters({ aporte: "getAporte" }),
    ...mapGetters({ listaDev: "getListaDev" }),
    ...mapGetters({ listaPat: "getListaPat" }),
  },

  data() {
    return {
      aporto: false,
    };
  },
 

  methods: {
    ...mapActions("setAporte"),
    ...mapActions("pushUsuarios"),
    ...mapActions("pushDev"),
    ...mapActions("pushPat"),

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

      this.listaDev.splice(borrado, 1);
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
      this.listaPat.splice(borrado, 1);
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
          miUsuario.proyectosPat[proyectoId].aportable = !miUsuario.proyectosPat[proyectoId].aportable

          alert("Su aporte ha sido guardado");
        } else {
          alert(
            "El monto no es correcto o supera la meta para el desarrollo. \nPor favor verifique la cantidad ingresada"
          );
        }
      }
    },

    
  },
};
</script>

