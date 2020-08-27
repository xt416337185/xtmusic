import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store= new Vuex.Store({
    state:{
        islogin:false
    },
    mutations:{
        login(state,msg){
            state.islogin=msg;
            console.log(state.islogin)
        }
    },
    actions:{
        uplogin(con,msg){
            con.commit('login',msg)
        }
    }
})

export default store