<template>
    <div>
        <h1>Usuarios</h1>
        <div class="row">
                <div class="col-12 my-auto">
        
                     <span>Usuarios: {{ usuarios }}</span>
                </div>
        </div>
        <div>
          <AgregarUsuario />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AgregarUsuario from "../components/AgregarUsuario.vue";

export default {
    
   computed: {
    ...mapGetters({ usuarios: "getUsuarios" }),
  },
   components: {
        AgregarUsuario, 
    },
   
   
};
</script>