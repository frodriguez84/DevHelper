<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <div>
      <h3>Proyecto mas caro en desarrollar</h3>
    </div>

    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Genero</th>
          <th scope="col">Monto</th>
          <th scope="col">Creador</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span>{{ proyectoMax.titulo }}</span>
          </td>
          <td>
            <span>{{ proyectoMax.genero }}</span>
          </td>
          <td>
            <span>${{ proyectoMax.monto }}</span>
          </td>
          <td>
            <span>{{ proyectoMax.creador }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />

    <div class="card">
      <div class="card container row mx-auto">
        <div class="card-header">
          <h5>Cantidad de proyectos disponibles</h5>
          <h5 class="text-success">{{ cantProDisp }}</h5>
        </div>
      </div>
      <div class="card container row mx-auto">
        <div class="card-header">
          <h5>Promedio de proyectos por usuario</h5>
          <h5 class="text-danger">{{ promPorUsuario }}</h5>
        </div>
      </div>
      <div class="card container row mx-auto">
        <div class="card-header">
          <h5>Promedio monto proyectos</h5>
          <h5 class="text-warning">${{ promMontoProyectos }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ listaProyectos: "getProyectos" }),
    ...mapGetters({ usuarios: "getUsuarios" }),
    ...mapGetters({ usuarioLogeado: "getUsuarioLogeado" }),
  },

  data() {
    return {
      titulo: "Dashboard",
      proyectoMax: {},
      proPorUsuario: [],
      cantProDisp: 0,
      promPorUsuario: 0,
      promMontoProyectos: 0,
    };
  },

  beforeMount() {
    this.proyectoMasCostoso();
    this.cantidadProyectosDisp();
    this.cantidadProyectos();
    this.cantidadUsuarios();
    this.promedioProPorUsuario();
    this.promedioMonto();
  },

  methods: {
    proyectoMasCostoso() {
      let max = 0;
      this.listaProyectos.forEach((p) => {
        if (p.monto > max) {
          this.proyectoMax = p;
          max = p.monto;
        }
      });

      return this.proyectoMax;
    },

    cantidadProyectos() {
      let cont = 0;
      this.listaProyectos.forEach(() => {
        cont++;
      });
      return Number(cont);
    },

    cantidadUsuarios() {
      let cont = 0;
      this.usuarios.forEach(() => {
        cont++;
      });
      return Number(cont);
    },

    cantidadProyectosDisp() {
      this.listaProyectos.forEach((p) => {
        if (p.disponible) {
          this.cantProDisp++;
        }
      });
      
    },

    promedioProPorUsuario() {
      let prom = Math.trunc(this.cantidadProyectos() / this.cantidadUsuarios());
      
      this.promPorUsuario = prom;
      return this.promPorUsuario;
    },

    sumatoriaMontos(){
        let suma = 0
        this.listaProyectos.forEach((p) => {
        suma += p.monto
      });
        
      return suma
    },
    promedioMonto(){
        let num = this.sumatoriaMontos() / this.cantidadProyectos()
        this.promMontoProyectos = num.toFixed(2)
        
    }
  },
};
</script>

<style scoped>
.card-header {
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}
</style>