<template>
  <div>
    <div class="container">
      <h1>{{ titulo }}</h1>
      <p>Aca estaria la lista de todos los proyectos que se cargan</p>

      <div class="d-flex">
        <input
          v-model="proyectoNuevo"
          type="text"
          placeholder="Ingresar nuevo proyecto"
          class="form-control"
          @keyup.enter="agregarProyecto"
        />
        <button @click="agregarProyecto" class="btn btn-warning rounded-0">
          Nuevo Proyecto
        </button>
      </div>
      <table class="table table-bordered mt-5">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Estado</th>
            <th scope="col" class="text-center">Editar</th>
            <th scope="col" class="text-center">Borrar</th>
            <th scope="col">Quiero Desarrollar</th>
            <th scope="col">Quiero Patrocinar</th>
            <th scope="col">Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, index) in proyectos" :key="index">
            
            <td>
              
              <span :class="{ finalizado: p.estado === 'finalizado' }">{{
                firstCharUpper(p.nombre)}}</span>
            </td>
            <td style="width: 120px">
              <span
                @click="cambiarEstado(index)"
                class="pointer"
                :class="{
                  'text-danger': p.estado === 'reclutando',
                  'text-warning': p.estado === 'en progreso',
                  'text-success': p.estado === 'finalizado',}">
                {{ firstCharUpper(p.estado) }}
              </span>
            </td>
            <td>
              <div class="text-center" @click="editarProyecto(index)"> <button>Editar
                <span class="fa fa-pen"></span>
              </button>
              </div>
            </td>
            <td>
              <div class="text-center" @click="borrarProyecto(index)"> <button>Borrar</button>
                <span class="fa fa-trash"></span>
              </div>
            </td>
            <td>
              <div>
                <button @click="addProyect">Dev</button> <span></span>
              </div>
            </td>
                <div>
                <button @click="addProyect">Patrocinar</button> <span></span>
              </div>
            <td>
              
                <div>
                <button @click="producto">Ver</button> <span></span>
              </div>
            <td>

          </td>
          </tr>
          
        </tbody>
      </table>
      <hr>
      <div>
        <button class="btn btn-dark" @click="logut">Logout</button>
      </div>
      <br>
      <div>
        <button @click="buscar" class="btn btn-dark">Buscar proyecto</button>
      </div>
      <br>
      <div>
        <button @click="moduloUsuario" class="btn btn-dark">Ir Modulo Usuario</button>
      </div>
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
      creador: "",
      proyectoNuevo: "",
      proyectoEditado: null,
      titulo: "Pagina Principal",
      proyectos: [],
      estados: ["reclutando", "en progreso", "finalizado"],
      msj: "Proyecto agregado, porfavor visite su modulo para ver mas detalles"
    };
  },

  methods: {
    addProyect(){
      alert(this.msj)
    },
    logut() {
      if(this.$store.state.auth == false){
        this.$store.dispatch('setAuthAction')
        this.$router.push("/");

      }else{
        this.$router.push("/");
      }

    },
    buscar() {
      this.$router.push("/tienda");
    },
    producto() {
      this.$router.push("/producto");
    },
    moduloUsuario() {
      this.$router.push("/modulo_usuario");
    },
    agregarProyecto() {
      if (this.proyectoNuevo.length === 0) return;

      if (this.proyectoEditado === null) {
        this.proyectos.push({
          nombre: this.proyectoNuevo,
          estado: "reclutando",
        });
      } else {
        this.proyectos[this.proyectoEditado].nombre = this.proyectoNuevo;
        this.proyectoEditado = null;
      }

      this.proyectoNuevo = "";
    },

    borrarProyecto(index) {
      this.proyectos.splice(index, 1);
    },

    editarProyecto(index) {
      this.proyectoNuevo = this.proyectos[index].nombre;
      this.proyectoEditado = index;
    },

    cambiarEstado(index) {
      let nuevoIndex = this.estados.indexOf(this.proyectos[index].estado);
      if (++nuevoIndex > 2) nuevoIndex = 0;
      this.proyectos[index].estado = this.estados[nuevoIndex];
    },

    firstCharUpper(letra) {
      return letra.charAt(0).toUpperCase() + letra.slice(1);
    },
  },
};
</script>

<style scoped>
.poiter {
  cursor: pointer;
}
.finalizado {
  text-decoration: line-through;
}
</style>
