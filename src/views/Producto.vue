<template>
    <div class="container">
        <h1>{{ titulo }} {{ nombreJuego }}</h1>






    </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Producto",
  components: {
    HelloWorld,
  },

  data() {
    return {
      titulo: "Proyecto: ",
      nombreJuego: "Baldur's Gate 3",
    };
    
  },
  methods: {
    
  },
};
</script>
