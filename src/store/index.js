import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase/firebaseDb'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Juguetes:[]
  },
  mutations: {
    //mutación para evitar sobrescritura con fetch
  RESET_JUGUETES(state){
    state.Juguetes = []
  },
  ADD_JUGUETE(state,juguete){
    state.Juguetes.push({
      id:juguete.id,
      Codigo: juguete.data().Codigo,
      Nombre: juguete.data().Nombre,
      Precio: juguete.data().Precio,
      Stock: juguete.data().Stock
    })
  }
  },
  actions: {
    //fetchjuguetes trae juguetes colección
    fetchJuguetes({commit}){
      db.collection('Juguetes').onSnapshot((snap)=>{
        commit('RESET_JUGUETES')
        //SNAP ARRAY POR EL QUE SE GIRA
        snap.forEach(doc=>{
          commit('ADD_JUGUETE',doc)
        })
      })
    }
  },
  modules: {
  }
})
