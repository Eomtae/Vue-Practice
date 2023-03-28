import {createStore} from "vuex";
const store = createStore({
    state(){
            data:[{id:0 , name:'홍길동'}]
    },
    getters:{},
    mutations:{
        getData(state,obj){state.data = obj}
    },
    actions:{
            async getData({commit}){
            fetch ('/api')
            .then(res => {res.json()})
            .then(data => {
                commit('getData',data)
            })
        }
    }
});

export default defineNuxtPlugin((nuxtApp)=>{
    nuxtApp.vueApp.use(store);
});