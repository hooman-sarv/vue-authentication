<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Account from './components/Account';
export default {
  name: 'App',

  components: {
    Home,
    Login,
    Register,
    Account
  },

  data: () => ({
    //
  }),
};
</script>
