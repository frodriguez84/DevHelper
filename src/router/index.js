import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '../views/LogIn.vue')
  },

  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },

  {
    path: '/principal',
    name: 'Principal',
    component: () => import(/* webpackChunkName: "about" */ '../views/Principal.vue')
  },
  {
    path: '/tienda',
    name: 'Tienda',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tienda.vue')
  },
  {
    path: '/resultado',
    name: 'Resultado',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resultado.vue')
  },
  {
    path: '/producto',
    name: 'Producto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Producto.vue')
  },
  {
    path: '/modulo_usuario',
    name: 'ModuloUsuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/ModuloUsuario.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
