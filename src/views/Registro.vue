<template>
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
                <input type="text" class="form-control" placeholder="Nombre" />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="fa fa-envelope"> </i
                ></span>
                <input type="email" class="form-control" placeholder="Email" />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="fa fa-key"> </i
                ></span>
                <input
                  type="password"
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
                  type="password"
                  class="form-control"
                  placeholder="Confirmar Password"
                />
              </div>
            </div>
            <button @click="registro" type="submit" class="btn btn-success btn-block">
              Submit </button>
            </form>
            <br>
          <button @click="login" class="btn btn-dark">Al Login</button>
        </article>
      </section>
    </div>

    <!-- <h1>Registro nuevo usuario</h1>
    <div>
      <h2>DNI</h2>
      <input type="text" />
    </div>
    <div>
      <h2>Constraseña</h2>
      <input type="password" />
    </div>
    <div>
      <h2>Repetir Constraseña</h2>
      <input type="password" />
    </div>
    <div>
      <h2>Email</h2>
      <input type="email" />
    </div><br /><br /><br />
    <div>
      <button @click="registro">Registrarse</button>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Registro",
  components: {
    HelloWorld,
  },

  data() {
    return {
      mensaje:
        "Se envio un mail a su casilla de correo. Ingrese sus crendenciales en la pantalla de login",
    };
  },

  methods: {
    registro() {
      alert(this.mensaje);
    },
    login() {
      this.$router.push("/login");
    },
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
.login {
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