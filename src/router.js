import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import FormularioVue from './components/FormularioVue.vue';
import AlertUsuario from './components/AlertUsuario.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '',             component: HelloWorld },
    { path: '/formulario-vue',  component: FormularioVue },
    { path: '/alert-usuario',  component: AlertUsuario },
  ], 
});