<template>
  <div>
    <h1>Registrar usuario</h1>
    <div class="registro">
      <div class="col-md-4 col-md-offset-4" id="login">
        <section id="inner-wrapper" class="login">
          <article>
            <form>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon"
                    ><i class="fa fa-user"> </i
                  ></span>
                  <input
                    v-model="usuarioNuevo.nombre"
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon"
                    ><i class="fa fa-envelope"> </i
                  ></span>
                  <input
                    v-model="usuarioNuevo.email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon"
                    ><i class="fa fa-key"> </i
                  ></span>
                  <input
                    v-model="usuarioNuevo.password"
                    type="text"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon"
                    ><i class="fa fa-key"> </i
                  ></span>
                  <input
                    v-model="usuarioNuevo.password2"
                    type="text"
                    class="form-control"
                    placeholder="Confirmar Password"
                  />
                </div>
              </div>
              <button @click="addUsuario()" type="button" class="btn btn-success btn-block" >
                Submit </button>
            </form>
            <br />
            <button @click="login" class="btn btn-dark">Logeate</button>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script >
import axios from 'axios'
import { mapActions } from "vuex";
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters({ listaProyectos: "getProyectos" }),
    ...mapGetters({ usuarios: "getUsuarios" }),
    ...mapGetters({ usuarioLogeado: "getUsuarioLogeado" })
  },

  data(){
    return{
      usuarioNuevo:{
        nombre: "" ,
        email: "",
        password: "",
        password2: "",
        proyectosDev:[],
        proyectosPat:[],
      }
    }
  },

  methods: {
    ...mapActions("agregarUsuario"),
    /* agregarUsuario(usuario) {
      if (usuario.clave !== usuario.clave2) {
        alert("Los password deben ser iguales");
      } else {
        
        this.$store.dispatch("agregarUsuario", usuario);
        alert("Usuario " + usuario.nombre + " creado \nPor favor logeese" )
        this.$router.push("/login");
      }
    }, */
    login() {
        this.$router.push("/login");
    },

    validaPassword(){
      if(this.usuarioNuevo.password === this.usuarioNuevo.password2){
        alert("Los passwords deben ser iguales")
      }
    },


    async addUsuario(){

      console.log("arranca");
      if( this.usuarioNuevo.nombre !== "" && this.usuarioNuevo.email !== "" 
      && this.usuarioNuevo.password !== "" && this.usuarioNuevo.password2 !== ""){

        try {
          
          await axios.post("https://6180891b8bfae60017adfb16.mockapi.io/api/users", {
             nombre: this.usuarioNuevo.nombre,
             email: this.usuarioNuevo.email,
             password: this.usuarioNuevo.password,
             proyectosDev: this.usuarioNuevo.proyectosDev,
             proyectosPat: this.usuarioNuevo.proyectosPat,
           },
             alert("Usuario creado correctamente"),
             console.log("termina")
           );

        } catch (error) {
          console.log(error, "No se agrego")
        }


      } else{
        alert("Complete todos los campos")
        console.log("Campos invalidos");
      }
    }
    
  },
};
</script>

<style scoped>
body {
  background: #333;
}
#login {
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
  margin-top: 50px;
  margin-left: 30%;
}
.loginx {
  font-family: "Josefin Sans", sans-serif;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  transition: 0.3s;
  -webkit-transform: rotateY(40deg);
  -moz-transform: rotateY(40deg);
  transform: rotateY(40deg);
}
.login:hover {
  -webkit-transform: rotate(0);
  -moz-transform: rotate(0);
  transform: rotate(0);
}

.login .form-group {
  margin-bottom: 17px;
}
.login .form-control,
.login .btn {
  border-radius: 0;
}
.login .btn {
  text-transform: uppercase;
  letter-spacing: 3px;
}
.input-group-addon {
  border-radius: 0;
  color: #fff;
  background: #f3aa0c;
  border: #f3aa0c;
}
.forgot {
  font-size: 16px;
}
.forgot a {
  color: #333;
}
.forgot a:hover {
  color: #5cb85c;
}

#inner-wrapper,
#contact-us .contact-form,
#contact-us .our-address {
  color: #1d1d1d;
  font-size: 19px;
  line-height: 1.7em;
  font-weight: 300;
  padding: 50px;
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: 100px;
}
.input-group-addon {
  border-radius: 0;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  color: #fff;
  background: #f3aa0c;
  border: #f3aa0c;
  border-right-color: rgb(243, 170, 12);
  border-right-style: none;
  border-right-width: medium;
}
</style>