import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        headNavText:{
            first:'',
            second:''
        }
    },
    mutations:{
        setHeadNavText(state,params){
            for (let i in params){
                state.headNavText[i] = params[i];
            }
        }
    }
})
