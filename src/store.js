import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        defaultForm: {
            nombre: '',
            email: null,
            edad: null
        },
        cantUsuarios: 0,
        MIN_NOMBRE_LENGTH: 5,
        MAX_NOMBRE_LENGTH: 15,
        MIN_EDAD: 18,
        MAX_EDAD: 120,
        API_URL: "https://6366f216f5f549f052ce96e7.mockapi.io/TP_PNT2_ORT/TP7",
    },
    actions:{
        setCantUsuarios({commit}, cant){
            commit('setCantUsuarios', cant );
        },
    },
    mutations:{
        setCantUsuarios(state, cant ){
            state.cantUsuarios = cant;
        },
    }
})