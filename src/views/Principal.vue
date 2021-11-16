<template>
  <div>
    <div class="container">
      <h1 class="tituloEstilo">{{ titulo }}</h1>

      <div class="d-flex">
        <input
          id="ingresoT"
          v-model="proyectoNuevo.titulo"
          type="text"
          placeholder="Ingresar titulo"
          class="form-control"
          @keyup.enter="agregarProyecto"
        />

        <input
          id="ingresoG"
          v-model="proyectoNuevo.genero"
          type="text"
          placeholder="Ingresar genero"
          class="form-control"
          @keyup.enter="agregarProyecto"
        />
        <input
          id="ingresoM"
          v-model.number="proyectoNuevo.monto"
          type="number"
          placeholder="Ingresar el monto"
          class="form-control"
          @keyup.enter="agregarProyecto"
        />

        <div v-if="this.usuarioLogeado.nombre === undefined">
          <button @click="login" class="btn btn-warning rounded-2">
            Al Login
          </button>
        </div>

        <div v-else-if="this.actualizar">
          <button @click="update" class="btn btn-warning rounded-2">
            Actualizar Proyecto
          </button>
        </div>

        <div v-else>
          <button @click="push" class="btn btn-success rounded-2">
            Crear Proyecto
          </button>
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
              <span>{{ p.titulo }}</span>
            </td>
            <div>
              <td class="text-success" v-if="p.disponible">
                <span>Juego disponible</span>
              </td>
              <td class="text-danger" v-else>
                <span>Juego no disponible</span>
              </td>
            </div>
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
              <div class="text-center" @click="editarProyecto(index)">
                <button class="btn btn-warning">Editar</button>
                <span class="fa fa-pen"></span>
              </div>
            </td>
            <td>
              <div class="text-center" @click="borrarProyecto(p.id)">
                <button class="btn btn-danger">Borrar</button>
                <span class="fa fa-trash"></span>
              </div>
            </td>
            <td>
              <div>
                <button
                  @click="agregarProyectoDev(p.id)"
                  class="btn btn-dark text-center"
                >
                  Dev
                </button>
                <span></span>
              </div>
            </td>
            <div>
              <button
                @click="agregarProyectoPat(p.id)"
                class="btn btn-dark text-center"
              >
                Patrocinar
              </button>
              <span></span>
            </div>
            <td>
              <div>
                <button
                  @click="producto"
                  class="btn btn-outline-primary btn-block"
                >
                  Ver
                </button>
                <span></span>
              </div>
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
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "Principal",
  components: {},
  computed: {
    ...mapGetters({ listaProyectos: "getProyectos" }),
    ...mapGetters({ usuarios: "getUsuarios" }),
    ...mapGetters({ usuarioLogeado: "getUsuarioLogeado" }),
    ...mapGetters({ actualizar: "getActualizar" }),
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
      msj: "Porfavor visite su modulo para ver mas detalles",
    };
  },

  methods: {
    ...mapActions("pushProyectos"),
    ...mapActions("llenarProyectos"),
    ...mapActions("borrarProyecto"),
    ...mapActions("setActualizar"),
    ...mapActions("pushDev"),
    ...mapActions("pushPat"),

    addProyect() {
      alert(this.msj);
    },
    home() {
      this.$router.push("/");
    },
    login() {
      this.$router.push("/login");
    },
    logout() {
      if (this.usuarioLogeado.nombre !== undefined) {
        this.$store.state.auth = false;
        this.usuarioLogeado.nombre = undefined;

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

    async agregarProyectoDev(index) {
      const i = Number(index);
      const result = window.confirm("Desea agregar el proyecto a su lista?");
      if (this.usuarioLogeado !== undefined && result) {
        try {
          const proyecto = await axios.get(
            `https://618194d132c9e2001780488e.mockapi.io/api/products/${i}`
          );

          if (proyecto.data.disponible) {
            const idUsuario = this.usuarioLogeado.id;
            try {
              const u = await axios
                .get(
                  `https://6180891b8bfae60017adfb16.mockapi.io/api/users?id=${idUsuario}`
                )
                .then((res) => {
                  const miUsuario = res.data[0];

                  miUsuario.proyectosDev.push(proyecto.data);
                  
                  axios.put(
                    `https://6180891b8bfae60017adfb16.mockapi.io/api/users/${idUsuario}`,
                    miUsuario
                    
                  ).then(this.$store.dispatch('pushDev', proyecto.data));
                });
            } catch (error) {
              console.log(error, "No se encontro usuario");
            }

            alert("Proyecto guardado en su lista DEV \nVisite su modulo");
          } else {
            alert("Proyecto no disponible");
          }
        } catch (error) {
          console.log(error, "No se puedo agregar");
        }
      }
    },

    async agregarProyectoPat(index) {
      const i = Number(index);
      const result = window.confirm("Desea agregar el proyecto a su lista?");
      if (this.usuarioLogeado !== undefined && result) {
        try {
          const proyecto = await axios.get(
            `https://618194d132c9e2001780488e.mockapi.io/api/products/${i}`
          );

          if (proyecto.data.disponible) {
            const idUsuario = this.usuarioLogeado.id;
            try {
              const u = await axios
                .get(
                  `https://6180891b8bfae60017adfb16.mockapi.io/api/users?id=${idUsuario}`
                )
                .then((res) => {
                  const miUsuario = res.data[0];
                  miUsuario.proyectosPat.push(proyecto.data);
                  axios.put(
                    `https://6180891b8bfae60017adfb16.mockapi.io/api/users/${idUsuario}`,
                    miUsuario
                  ).then(this.$store.dispatch('pushPat', proyecto.data));
                });
            } catch (error) {
              console.log(error, "No se encontro usuario");
            }

            alert("Proyecto guardado en lista PAT \nVisite su modulo");
          } else {
            alert("Proyecto no disponible");
          }
        } catch (error) {
          console.log(error, "No se puedo agregar");
        }
      } else {
        alert("Para agregar proyectos debe logearse");
      }
    },

    async push() {
      const result = window.confirm(
        "Esta por crear un proyecto, desea continuar?"
      );
      if (result) {
        let nuevoProyecto = {
          titulo: this.proyectoNuevo.titulo,
          disponible: this.proyectoNuevo.disponible,
          genero: this.proyectoNuevo.genero,
          monto: Number(this.proyectoNuevo.monto),
          creador: this.usuarioLogeado.nombre,
        };

        if (
          this.proyectoNuevo.titulo !== "" &&
          this.proyectoNuevo.genero !== "" &&
          Number(this.proyectoNuevo.monto) > 0
        ) {
          //dispatch para mostrar el nuevo objeto
          await axios
            .post(
              "https://618194d132c9e2001780488e.mockapi.io/api/products",
              nuevoProyecto
            )
            .then(this.$store.dispatch("pushProyectos", nuevoProyecto));

          alert("Proyecto creado");
        } else {
          alert("Complete todos los campos");
          console.log("Fallo en el envio");
        }
        this.limpiarCampos();
      }
    },

    limpiarCampos() {
      this.proyectoNuevo.titulo = "";
      this.proyectoNuevo.genero = "";
      this.proyectoNuevo.monto = "";
    },

    async borrarProyecto(index) {
      const i = Number(index);
      const result = window.confirm("Desea borrar el proyecto?");
      if (
        this.usuarioLogeado.nombre === this.listaProyectos[i].creador &&
        result
      ) {
        try {
          const proyecto = await axios
            .delete(
              `https://618194d132c9e2001780488e.mockapi.io/api/products/${i}`
            )
            .then(this.$store.dispatch("borrarProyecto", i, 1));

          alert(`El proyecto ${proyecto.data.titulo} fue borrado`);
          //dispatch con splice
        } catch (error) {
          console.log(error, "error al borrar");
        }
      } else {
        alert("Debe ser el creador del proyecto para poder borrarlo");
      }
    },

    editarProyecto(index) {
      const i = Number(index);
      if (this.usuarioLogeado.nombre === this.listaProyectos[i].creador) {
        this.$store.dispatch("setActualizar");

        let pEditado = {
          titulo: this.listaProyectos[i].titulo,
          genero: this.listaProyectos[i].genero,
          monto: this.listaProyectos[i].monto,
          id: this.listaProyectos[i].id,
        };

        this.proyectoNuevo.titulo = pEditado.titulo;
        this.proyectoNuevo.genero = pEditado.genero;
        this.proyectoNuevo.monto = pEditado.monto;

        this.proyectoEditado = pEditado;
        console.log(this.proyectoEditado);
      } else {
        alert(
          "No puede modifcar el proyecto seleccionado. \nAsegurese de ser el creador del mismo"
        );
      }
    },

    update() {
      const result = window.confirm(
        "Esta por editar un proyecto, desea continuar?"
      );
      if (this.proyectoEditado !== null && result) {
        this.proyectoEditado.titulo = this.proyectoNuevo.titulo;
        this.proyectoEditado.genero = this.proyectoNuevo.genero;
        this.proyectoEditado.monto = this.proyectoNuevo.monto;
        try {
          axios
            .put(
              `https://618194d132c9e2001780488e.mockapi.io/api/products/${this.proyectoEditado.id}`,
              this.proyectoEditado
            )
            .then(this.$store.dispatch("pushProyectos", this.proyectoEditado));
          alert("Proyecto editado correctamente");
        } catch (error) {
          console.log(error, "No se pudo editar");
        }
      }
      this.$store.dispatch("setActualizar");
      this.limpiarCampos();
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
.form-control {
  
  box-shadow: 0 30px 50px 0 rgba(151, 24, 24, 0.562);
}
.tituloEstilo{
  background-color: darkslategray;
  color: white;
  border-radius: 15px;
  margin-top: 5px;
}

</style>
