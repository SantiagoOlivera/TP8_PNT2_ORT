import Vue from 'vue'
import VueForm from 'vue-form'

let options = {
    validators: {
        /* 'max-length-nombre': function(value){
            return value.toString().length < 15
        } */
    }
}

Vue.use(VueForm, options);

