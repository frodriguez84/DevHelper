<template>
    <div class="busca">
        <h1 class="text-center text-muted mt-3">Buscador</h1>
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

<style scoped>
.busca{
    border: rgba(0, 0, 0, 0.5) solid 1px;
    margin: 0.5em;
    border-radius: 10px;
    padding: 2em;
    
    
}
.footer.sticky-footer{
    position: relative;
}
</style>
