import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }

} catch (err) {

}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  /* actions: {
     changeCity(ctx, city) {
       console.log(city);
       ctx.commit('changeCity',city)
     }
   },*/
  mutations: {
    changeCity(state, city) {
      state.city = city;
      try {
        localStorage.city = city
      } catch (err) {
      }

    }
  },
  /*getters: {
    doubleCity(state) {
      return state.city + '' + state.city

    }
  }*/

})
