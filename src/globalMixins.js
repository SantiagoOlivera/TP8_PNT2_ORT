import Vue from 'vue';

const globalMixins = {
    methods:{
        getDefaultForm(){
            return this.$store.state.defaultForm;
        },
        getApiURL(){
            return this.$store.state.API_URL
        },
        async guardar(data){
            try{
              await this.axios.post(this.getApiURL(), data,  { 'content-type' : 'application/json' });
            }catch(e){
              console.error(e);
            }
        },

        async getData(){
            try{
                var res = await this.axios( this.getApiURL() );
                var cant = res.data.length;
                console.log(res.data);
                this.cargarNumeroDeUsuarios(cant);
                return res.data;
                
            }catch(e){
                console.error(e);
            }
        },
        cargarNumeroDeUsuarios(cant){
            this.$store.dispatch('setCantUsuarios', cant);
        },
    },
    computed:{
        MIN_NOMBRE_LENGTH: function(){
            return this.$store.state.MIN_NOMBRE_LENGTH;
        },
        MAX_NOMBRE_LENGTH: function(){
            return this.$store.state.MAX_NOMBRE_LENGTH;
        },
        MIN_EDAD: function(){
            return this.$store.state.MIN_EDAD;
        },
        MAX_EDAD: function(){
            return this.$store.state.MAX_EDAD;
        },
        mostrarMensaje(){
            var msg = null;
            var cantUsuarios = this.$store.state.cantUsuarios;
            if(cantUsuarios === 0){
              msg = 'No hay usuarios registrados en MockApi!';
            }else{
              msg = `Hay en MockApi ${cantUsuarios} usuarios registrados!`;
            }
            return msg;
        }
    }
}

Vue.mixin(globalMixins);