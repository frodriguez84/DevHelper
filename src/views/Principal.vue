<template>
  <div class="principal">
    <h1>{{ titulo }}</h1>

    <div class="proyect">
      <div class="text">
        Titulo Proyecto
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa saepe
          animi incidunt, non enim minima, officia culpa porro et fugiat iure
          accusamus corporis quas, repudiandae nihil. Deserunt voluptate ea
          dolores.
        </p>
      </div>
      <div class="text">Descripcion
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa saepe
          animi incidunt, non enim minima, officia culpa porro et fugiat iure
          accusamus corporis quas, repudiandae nihil. Deserunt voluptate ea
          dolores.
        </p>
      </div>
      <div class="text">Creador
          <p>
          Efesto
        </p>
      </div>
    </div>
    <div>
      <button>Ver</button>
    </div>

    <div>
      <button>Dev</button>
    </div>
    <div>
      <button>Patrocinador</button>
    </div>

    <br />
    <hr />

    <div class="bot">
      <button class="tienda">Tienda</button>

      <button @click="home" class="out">LogOut</button>
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

  methods: {
    home() {
      this.$router.push("/");
    },
  },
};
</script>

