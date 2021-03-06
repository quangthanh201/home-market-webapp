import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth'
import home from './modules/home'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        home
    },
    plugins: [createPersistedState({paths: ['auth']})],
    state: {
        title: "Tổng quát"
    },
    mutations:{
        updateTitle(state,title){
            state.title = title;
        }
    }

})

export default store