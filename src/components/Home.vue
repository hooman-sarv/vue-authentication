<template>
  <div>
      <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-btn text to="/Login">Login</v-btn>
    <v-spacer></v-spacer>
    <v-btn text to="/Register">Register</v-btn>
    </v-app-bar>
      <v-content>
        <h1>Home Page</h1>
      </v-content>
    
  </v-app>
  </div>
</template>

<script>


export default {
  name: 'Home',
}
</script>
