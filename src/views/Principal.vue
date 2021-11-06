<template>
  <div>
    <div class="container">
      <h1>{{ titulo }}</h1>
      <p>Aca estaria la lista de todos los proyectos que se cargan</p>

      <div class="d-flex">
        <input
          v-model="proyectoNuevo.titulo" type="text" placeholder="Ingresar titulo" class="form-control"
          @keyup.enter="agregarProyecto" />

        <input   v-model="proyectoNuevo.genero"  type="text" placeholder="Ingresar genero"
          class="form-control"  @keyup.enter="agregarProyecto"   />
       
        <input v-model.number="proyectoNuevo.monto" type="number"  placeholder="Ingresar el monto"  class="form-control"
          @keyup.enter="agregarProyecto" />

        <button @click="push" class="btn btn-warning rounded-0"> Crear Proyecto</button>
      </div>
      <table class="table table-bordered mt-5">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Disponible</th>
            <th scope="col">Genero</th>
            <th scope="col">Monto</th>
            <th scope="col" class="text-center">Editar</th>
            <th scope="col" class="text-center">Borrar</th>
            <th scope="col">Quiero Desarrollar</th>
            <th scope="col">Quiero Patrocinar</th>
            <th scope="col">Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, index) in listaProyectos" :key="index">
            <td>
              <span>{{p.titulo}}</span>
            </td>
            <div>
             <td class="text-success" v-if="p.disponible">
              <span >Juego disponible</span>
            </td>
            <td class="text-danger" v-else>
              <span >Juego no disponible</span>
            </td>
            </div>            
             <td>
              <span>{{p.genero}}</span>
            </td>
            <td>
              <span>${{p.monto}}</span>
            </td>
            <td>
              <div class="text-center" @click="editarProyecto(index)">
                <button>
                  Editar
                  <span class="fa fa-pen"></span>
                </button>
              </div>
            </td>
            <td>
              <div class="text-center" @click="borrarProyecto(p.id)">
                <button>Borrar</button>
                <span class="fa fa-trash"></span>
              </div>
            </td>
            <td>
              <div><button @click="addProyect">Dev</button> <span></span></div>
            </td>
            <div>
              <button @click="addProyect">Patrocinar</button> <span></span>
            </div>
            <td>
              <div><button @click="producto">Ver</button> <span></span></div>
            </td>


            <!-- <td>
              <span :class="{ finalizado: p.disponible === 'finalizado' }">{{
                firstCharUpper(p.titulo)
              }}</span>
            
            <td style="width: 120px">
              <span
                @click="cambiarEstado(index)"
                class="pointer"
                :class="{
                  'text-danger': p.disponible === 'reclutando',
                  'text-warning': p.disponible === 'en progreso',
                  'text-success': p.disponible === 'finalizado',
                }"
              >
                {{ firstCharUpper(p.disponible) }}
              </span>
            </td>
            <td>
              <span @click="cambiarGenero(index)">
                {{ firstCharUpper(p.genero) }}
              </span>
            </td>
            <td>
              <div class="text-center" @click="editarProyecto(index)">
                <button>
                  Editar
                  <span class="fa fa-pen"></span>
                </button>
              </div>
            </td>
            <td>
              <div class="text-center" @click="borrarProyecto(index)">
                <button>Borrar</button>
                <span class="fa fa-trash"></span>
              </div>
            </td>
            <td>
              <div><button @click="addProyect">Dev</button> <span></span></div>
            </td>
            <div>
              <button @click="addProyect">Patrocinar</button> <span></span>
            </div>
            <td>
              <div><button @click="producto">Ver</button> <span></span></div>
            </td> -->
          </tr>
        </tbody>
      </table>
      <hr />
      <div>
        <button class="btn btn-dark" @click="logout">Logout</button>
      </div>
      <br />
      <div>
        <button @click="buscar" class="btn btn-dark">Buscar proyecto</button>
      </div>
      <br />
      <div>
        <button @click="moduloUsuario" class="btn btn-dark">
          Ir Modulo Usuario
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import axios from 'axios'
export default {
  name: "Principal",
  components: {},
  computed:{
    ...mapGetters({ listaProyectos: "getProyectos" }),
  },
  data() {
    return {
      proyectoNuevo: {
        titulo: "",
        disponible: true,
        genero: "",
        monto: 0,

      },
      proyectoEditado: null,
      titulo: "Pagina Principal",
      proyectos: [],
      estados: ["reclutando", "en progreso", "finalizado"],
      generos: ["Rol", "Rpg", "Accion", "Aventura", "Deportes", "Estrategia"],
      msj: "Proyecto agregado, porfavor visite su modulo para ver mas detalles",
    };
  },

  methods: {
    addProyect() {
      alert(this.msj);
    },
    logout() {
      if (this.$store.state.auth) {
        this.$store.state.auth = false;

        this.$router.push("/");
      } else {
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
    /* agregarProyecto() {
      if (this.proyectoNuevo.length === 0) return;

      if (this.proyectoEditado === null) {
        this.proyectos.push({
          nombre: this.proyectoNuevo,
          estado: "reclutando",
          genero: "A determinar",
          monto: 50,
        });
      } else {
        this.proyectos[this.proyectoEditado].nombre = this.proyectoNuevo;
        this.proyectoEditado = null;
      }

      this.proyectoNuevo = "";
    }, */

   async push() {
      console.log("arranca");
      if(this.proyectoNuevo.titulo !== "" && this.proyectoNuevo.genero !== "" && Number(this.proyectoNuevo.monto) > 0){
        
       await axios.post("https://618194d132c9e2001780488e.mockapi.io/api/products", {
          titulo: this.proyectoNuevo.titulo,
          disponible: this.proyectoNuevo.disponible,
          genero: this.proyectoNuevo.genero,
          monto: Number(this.proyectoNuevo.monto),
        },
          alert("Envio exitoso"),
          console.log("termina")
        );
      } else{
        alert("Complete todos los campos")
        console.log("Fallo en el envio");
      }
      this.proyectoNuevo.titulo = ""
      this.proyectoNuevo.genero = ""
      this.proyectoNuevo.monto = 0
    },

  async borrarProyecto(index) {

    const i = Number(index)
    try {
      await axios.delete(`https://618194d132c9e2001780488e.mockapi.io/api/products/${i}`)
      alert('El proyecto fue borrado')
    } catch (error) {
      console.log(error, "error al borrar")
    }

      /* this.listaProyectos.splice(index, 1); */
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
    cambiarGenero(index) {
      let nuevoIndex = this.generos.indexOf(this.proyectos[index].genero);
      if (++nuevoIndex > 5) nuevoIndex = 0;
      this.proyectos[index].genero = this.generos[nuevoIndex];
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
