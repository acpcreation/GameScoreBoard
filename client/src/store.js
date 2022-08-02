import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        
    },

    mutations:{

        storePasscode(state, data){
            state.passcode = data;
        },

    
    },

    getters:{
        getProgress: state =>{
            return state.progress;
        },


    },

    actions: {
        
    },

    

})

