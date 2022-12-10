<template lang="html">

  <section class="src-components-alert-usuario">
    <div class="container">
      <h1>Alert Usuario</h1>
      <div class="alert alert-danger" role="alert">
          {{ mostrarMensaje }}
      </div>
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'src-components-alert-usuario',
    props: [],
    mounted () {
      this.data = this.getData();
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

<style scoped>
  .src-components-alert-usuario {
  }
</style>
