<template>
  <div class="row">
    <div class="col">
      <div class="form-group mb-2">
        <label class="sr-only">Ingresar la busqueda</label>
        <input type="text" v-model="search" class="form-control" />
      </div>

      <div class="form-check form-check-inline">
          <input class="form-radio-input" v-model="disponible" :value="true" type="radio">Disponibles

      </div>
      <div class="form-check form-check-inline">
          <input class="form-radio-input" v-model="disponible" :value="false" type="radio">No disponibles

      </div>
    </div>
  </div>
</template>

<script>

export default {
    computed:{
        search:{
            get(){
                return this.$store.state.filter.query
            },
            set(val){
                this.$store.commit('SET_QUERY', val)
            }
        },
    disponible:{
        get(){
            return this.$store.state.filter.disponible
        },
        set(){
            this.$store.commit('SET_DISPONIBLE');
        }
    }
    }
};
</script>

<style>
</style>