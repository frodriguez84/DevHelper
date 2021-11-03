<template>
    <div>
        <div class="row" v-if="proyectos.length > 0">
            <Proyecto :proyecto="proyecto" v-for="proyecto in proyectos" :key="proyecto.id"></Proyecto>
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
        ...mapGetters ({
            proyectos: 'filteredProyects',
        })
    }
}

</script>
