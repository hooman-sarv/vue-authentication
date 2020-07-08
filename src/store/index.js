import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myToken : localStorage.getItem('myToken') || ''
  },
  mutations: {
    auth(state , token){
      state.myToken = token;
    }
  },
  actions: {

    async login({commit},loginData){
      try {
        let res = await axios.post('http://localhost:5000/login',loginData);
        console.log(res.status);
        if (res.status == 200) {
          console.log(`user account page loaded`);
          console.log(router.push( { path:'/Account' } ));
          
        }

        let token = res.data;
        localStorage.setItem('myToken', token);
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth',token);

      } catch (err) {
        console.log(err);
      }

    },

    async register({commit},registerInfo){
      try {
        let res = await axios.post('http://localhost:5000/register',registerInfo);
        if (res.status == 200) {
          console.log(`here`);
          console.log(router.push( { path:'/' } ));
        }

        let token = res.data;
        localStorage.setItem('myToken', token);
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth',token);

      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {
  }
})
