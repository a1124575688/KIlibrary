import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        headNavText:{
            first:'小步创想组件',
            second:'开发常用组件'
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
