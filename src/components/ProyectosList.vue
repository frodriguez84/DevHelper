<template>
    <div class="container">
        <div class="row" v-if="proyectos.length > 0">

            <div class="alert alert-success">Se encontraron proyectos</div>
            <Proyecto :Proyecto="Proyecto" v-for="p in proyectos" :key="p.id"></Proyecto>
            
        </div>
        <div v-else class="alert alert-danger">No se encontraron proyectos</div>
    </div>
</template>
  
<script>

import Proyecto from './ProyectoItem.vue'
import {mapGetters} from 'vuex'

export default {
    
    components: {
        Proyecto,
    },
    computed:{
        ...mapGetters ({proyectos: 'filteredProyects'})
    }
}

</script>
