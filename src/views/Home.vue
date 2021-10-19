<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bienvenidos a DevHelper"/>
    <h2>La solucion a tus proyectos</h2>

  <div>
    <router-link to="/login">
  <button id="myButton" class="foo bar">Logeate</button>
</router-link>
  </div>

    <h3>{{ titulo }}</h3>
    <button @click="suma">+1</button>
    <h1>{{ num }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  data(){
    return{
      titulo: "Prueba de Data",
      num: 0,
    }
  },

  methods:{
    suma(){
      this.num++
    }
  }
}
</script>
