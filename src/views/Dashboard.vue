<template>
  <div class="container">
    <h1 class="tituloEstilo">{{ titulo }}</h1>
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
      <tbody class="table bg-success" style="color: white">
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
          <h5>Cantidad de proyectos de {{ usuarioLogeado.nombre }}</h5>
          <h5 class="text-primary">{{ proyectosUsuario }}</h5>
        </div>
      </div>
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
      <div class="card container row mx-auto">
        <div class="card-header">
          <h5>De los juegos publicados, el genero mas elegido es:</h5>
          <h5 class="text-primary">{{ gMax.texto }}</h5>
        </div>
      </div>
    </div>
    <br />
    <div>
      <button @click="buscar" class="btn btn-success">Buscar proyecto</button>
    </div>
    <br />
    <div>
      <button @click="moduloUsuario" class="btn btn-dark">
        Ir Modulo Usuario
      </button>
    </div>
    <br />
    <div>
      <button @click="principal" class="btn btn-primary">Principal</button>
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
      proyectosUsuario: 0,
      gAccion: {texto:"Accion", cant: 0},
      gEstrategia: {texto:"Estrategia", cant: 0},
      gAventura: {texto:"Aventura", cant: 0},
      gRol: {texto:"Rol", cant: 0},
      gRpg: {texto:"Rpg", cant: 0},
      gIndie: {texto:"Indie", cant: 0},
      gDeporte: {texto:"Deporte", cant: 0},
      gMax: {texto:"", cant: 0},
    };
  },

  beforeMount() {
    this.proyectoMasCostoso();
    this.cantidadProyectosDisp();
    this.cantidadProyectos();
    this.cantidadUsuarios();
    this.promedioProPorUsuario();
    this.promedioMonto();
    this.proyectosDelUsuario();
    this.generoMax();
  },

  methods: {
    buscar() {
      this.$router.push("/tienda");
    },
    principal() {
      this.$router.push("/principal");
    },
    moduloUsuario() {
      this.$router.push("/modulo_usuario");
    },

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

    sumatoriaMontos() {
      let suma = 0;
      this.listaProyectos.forEach((p) => {
        suma += p.monto;
      });

      return suma;
    },
    promedioMonto() {
      let num = this.sumatoriaMontos() / this.cantidadProyectos();
      this.promMontoProyectos = num.toFixed(2);
    },

    proyectosDelUsuario() {
      this.listaProyectos.forEach((p) => {
        if (p.creador === this.usuarioLogeado.nombre) {
          this.proyectosUsuario++;
        }
      });
    },
    generoMax() {
      
      this.listaProyectos.forEach((p) => {
        switch (p.genero) {
          case "Accion": this.gAccion.cant++; break;
          case "Estrategia": this.gEstrategia.cant++; break;
          case "Aventura": this.gAventura.cant++; break;
          case "Deporte": this.gDeporte.cant++; break;
          case "Rol": this.gRol.cant++; break;
          case "Rpg": this.gRpg.cant++; break;
          case "Indie": this.gIndie.cant++; break;
          default: break;
        }   
      },
    );
      let generos = [this.gAventura, this.gAccion, this.gEstrategia, this.gDeporte, 
      this.gRol, this.gRpg, this.gIndie]
      
      this.gMax.cant = Math.max(this.gAccion.cant, this.gEstrategia.cant, this.gAventura.cant,
      this.gDeporte.cant, this.gRol.cant, this.gRpg.cant, this.gIndie.cant)

      generos.forEach(element => {
          if(element.cant === this.gMax.cant){
            this.gMax.texto = element.texto
          }
          
      },

      );
       
    },
  },
};
</script>

<style scoped>
.card-header {
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 8px; /* Added */
  margin-top: 8px
}
.tituloEstilo{
  background-color: rgba(12, 63, 35, 0.76);
  color: white;
  border-radius: 15px;
  margin-top: 5px;

}
</style>