<template lang="html">

  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <router-link class="navbar-brand" to="/">Inicio</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="formulario-vue">Formulario Vue TP4</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="alert-usuario">Alert Usuarios</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >
  .src-components-navbar {
  }
</style>
