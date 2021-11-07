<template>
  <div>
    <div class="container">
      <h1>{{ titulo }}</h1>     
      <div class="d-flex">
        <input id="ingresoT"
          v-model="proyectoNuevo.titulo" type="text" placeholder="Ingresar titulo" class="form-control"
          @keyup.enter="agregarProyecto" />

        <input id="ingresoG" v-model="proyectoNuevo.genero"  type="text" placeholder="Ingresar genero"
          class="form-control" @keyup.enter="agregarProyecto"   />

          <!-- <input id="ingresoC" v-model="proyectoNuevo.creador"  type="text" placeholder="Nombre creador"
          class="form-control" @keyup.enter="agregarProyecto"   /> -->
       
        <input id="ingresoM" v-model.number="proyectoNuevo.monto" type="number"  placeholder="Ingresar el monto"  class="form-control"
          @keyup.enter="agregarProyecto" />

          <div v-if="this.usuarioLogeado.nombre === undefined">
            <button  @click="login" class="btn btn-warning rounded-2"> Al Login</button>
          </div>
          <div v-else>
          <button  @click="push" class="btn btn-success rounded-2"> Crear Proyecto</button>
          </div>

      </div>
      <table class="table table-bordered mt-5">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Disponible</th>
            <th scope="col">Genero</th>
            <th scope="col">Monto</th>
            <th scope="col">Creador</th>
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
              <span>{{p.creador}}</span>
            </td>
            <td>
              <div class="text-center" @click="editarProyecto(index)">
                <button class="btn btn-warning">
                  Editar
                  <span ></span>
                </button>
              </div>
            </td>
            <td>
              <div class="text-center" @click="borrarProyecto(p.id)">
                <button class="btn btn-danger">Borrar</button>
                <span class="fa fa-trash"></span>
              </div>
            </td>
            <td>
              <div><button @click="agregarProyectoDev(p.id)" class="btn btn-dark text-center">Dev</button> <span></span></div>
            </td>
            <div>
              <button @click="agregarProyectoPat(p.id)" class="btn btn-dark text-center">Patrocinar</button> <span></span>
            </div>
            <td>
              <div><button @click="producto" class="btn btn-primary text-center">Ver</button> <span></span></div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div>
        <button class="btn btn-danger" @click="logout">Logout</button>
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
    ...mapGetters({ usuarios: "getUsuarios" }),
    ...mapGetters({ usuarioLogeado: "getUsuarioLogeado" }),

    logeado:{
       set(){
            this.$store.commit('setAuth');
        }
    }
  },
  data() {
    return {
      proyectoNuevo: {
        titulo: "",
        disponible: true,
        genero: "",
        monto: 0,
        creador: "",
      },
      proyectoEditado: null,
      titulo: "Pagina Principal",
      proyectos: [],
      estados: ["reclutando", "en progreso", "finalizado"],
      generos: ["Rol", "Rpg", "Accion", "Aventura", "Deportes", "Estrategia"],
      msj: "Porfavor visite su modulo para ver mas detalles",
    };
  },

  methods: {
    
    addProyect() {
      alert(this.msj);
    },
    login(){
      this.$router.push("/");
    },
    logout() {
      if (this.usuarioLogeado.nombre !== undefined) {
        this.$store.state.auth = false;
        this.usuarioLogeado.nombre = undefined
               
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
   
 async agregarProyectoDev(index){
     const i = Number(index)
     if(this.usuarioLogeado !== null){
       try {
         const proyecto = await axios.get(`https://618194d132c9e2001780488e.mockapi.io/api/products/${i}`)
          if(proyecto.data.disponible){

            this.usuarioLogeado.proyectosDev.push(proyecto.data) 
            alert("Proyecto guardado en lista DEV")
            this.addProyect()
          } else{
            alert("Proyecto no disponible")
          }

       } catch (error) {
         console.log(error, "No se puedo agregar")
       }
     }
   },
   async agregarProyectoPat(index){
     const i = Number(index)
     if(this.usuarioLogeado !== null){

       try {
         const proyecto = await axios.get(`https://618194d132c9e2001780488e.mockapi.io/api/products/${i}`)
        console.log(proyecto.data.disponible)

        if(proyecto.data.disponible){

           this.usuarioLogeado.proyectosPat.push(proyecto.data) 
           alert("Proyecto guardado en lista PAT")
           this.addProyect()
        } else {
          alert("Proyecto no disponible")
        }

         
       } catch (error) {
         console.log(error, "No se puedo agregar")
       }
     }
   },

   async push() {

      console.log("arranca");
      if(this.proyectoNuevo.titulo !== "" && this.proyectoNuevo.genero !== "" 
      && Number(this.proyectoNuevo.monto) > 0 ){
        
       await axios.post("https://618194d132c9e2001780488e.mockapi.io/api/products", {
          titulo: this.proyectoNuevo.titulo,
          disponible: this.proyectoNuevo.disponible,
          genero: this.proyectoNuevo.genero,
          monto: Number(this.proyectoNuevo.monto),
          creador: this.usuarioLogeado.nombre,
        },
          alert("Proyecto creado"),
          console.log("termina")
        );
      } else{
        alert("Complete todos los campos")
        console.log("Fallo en el envio");
      }
      this.limpiarCampos()
    },

    limpiarCampos(){
      document.getElementById("ingresoT").value=""
      document.getElementById("ingresoG").value=""
      document.getElementById("ingresoM").value=""
      document.getElementById("ingresoC").value=""

    },

  async borrarProyecto(index) {

    const i = Number(index)
    try {
      const proyecto = await axios.delete(`https://618194d132c9e2001780488e.mockapi.io/api/products/${i}`)
      alert('El proyecto fue borrado')
    } catch (error) {
      console.log(error, "error al borrar")
    }
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
.form-control{
  box-shadow: 0 30px 50px 0 rgba(151, 24, 24, 0.562);
}
</style>
