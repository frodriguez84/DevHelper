<template>
  <div class="registro">
    <h1>Registro nuevo usuario</h1>
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
    </div>
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
      mensaje: "Se envio un mail a su casilla de correo. Ingrese sus crendenciales en la pantalla de login",
    };
  },

  methods: {
    registro(){
      alert(this.mensaje)
    },
  },
};
</script>