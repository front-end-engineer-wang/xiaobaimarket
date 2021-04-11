import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[]
  },
  mutations: {
    addto(state, payload){
      if(state.cart.length==0){
        payload.count=1
        state.cart.push(payload)
      }     
      else
      for(let item of state.cart)
      {
        if(item.id===payload.id)
        item.count++
        else
        { payload.count++
          state.cart.push(payload);
          break;}
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    length: state => {
      return state.cart.length;
    },
    list: state=>{
      return state.cart
    }
  }
})
