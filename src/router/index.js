import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import list from '../views/List.vue'

Vue.use(VueRouter)

export const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About'},
  { path: '/lista', component: list, name: 'List'},

];

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  base: process.env.BASE_URL

});

export default router

