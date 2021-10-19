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
      <button>Ingresar</button>
      <br />
      <br />
      <div>
        <h2>Crear cuenta</h2>
        <router-link to="/registro">
          <button>Registrarse</button>
          

        </router-link>
      </div>
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
  name: "LogIn",
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
    
  },
};
</script>