<template>
    <div>
        <h1 class="text-center text-muted">Buscador</h1>
        <buscador></buscador>
        <hr />
        <proyectos-list></proyectos-list>
    </div>
</template>

<script>
import Buscador from './Buscador.vue'
import ProyectosList from './ProyectosList.vue'

export default {
    components: {
        Buscador, 
        ProyectosList,
    }
}
</script>
