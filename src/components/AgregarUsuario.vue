<template>
    <div>
        <h1>Agregar usuario</h1>
        <input v-model="documento" type="text" class="form-control">
        <input v-model="password" type="text" class="form-control">

        <button @click="agregarUsuario({nombre : documento , clave : password})">Agregar Usuario</button>

    </div>
</template>

<script >
import { mapActions } from 'vuex'

export default ({

    methods:{
        ...mapActions("agregarUsuario"),
        agregarUsuario(usuario){
            this.$store.dispatch("agregarUsuario" , usuario)
            
        },
    },
    
});
</script>