<template>
  <div class="principal">
    <h1>{{ titulo }}</h1>

    <div class="proyect">
      <div class="text">Titulo Proyecto</div>
      <div class="text">Descripcion</div>
      <div class="text">Creador</div>

    </div>
    <div>
        <button>Ver</button>
      </div>

      <div>
        <button >Dev</button>
      </div>
      <div>
        <button >Patrocinador</button>
      </div>
      
    <br />
    <hr />

    <div class="bot">
      <button class="tienda">Tienda</button>
      <router-link to="/">
        <button class="out">LogOut</button>
      </router-link>
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
      titulo: "Pagina Principal",
    };
  },

  methods: {},
};
</script>

