<template>
  <div class="login">
    <h1>Pagina de LogIn</h1>

    <div>
      <h2>DNI</h2>
      <input type="text" />
    </div>
    <div>
      <h2>Constraseña</h2>
      <input type="text" />
    </div>
    <br />
    <div>
      <button @click="principal">Ingresar</button>

      <br />
      <br />
      <div>
        <h2>Crear cuenta</h2>
        <button @click="registro">Registrarse</button>
      </div>
      <br />
      <br />
      <br />
     
      <button @click="suma">Prueba +1 en LogIn</button>
      <h2>{{ num }}</h2>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Login",
  components: {
    HelloWorld,
  },

  data() {
    return {
      titulo: "Prueba de Data",
      num: 0,
    };
  },

  methods: {
    suma() {
      this.num++;
    },
    registro() {
      this.$router.push("/registro");
    },
    principal() {
      this.$router.push("/principal");
    },
  },
};
</script>