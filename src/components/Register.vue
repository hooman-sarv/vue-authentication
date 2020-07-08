<template>
  <div class="regPage">
      <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-btn text to="/">Home</v-btn>
    </v-app-bar>
    <v-alert type="success" :timeout="4000" :value="myAlert">
      I'm a success alert.
    </v-alert>
    <v-content>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="username"
                  :rules="nameRules"
                  :counter="10"
                  label="username"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="password"
                  :rules="nameRules"
                  :counter="10"
                  label="password"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

              </v-col>
            </v-row>
            <v-row>
              <v-col>
                  <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="register"
                >
                  register
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
    </v-content>
  </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Register',
  data: () => ({
      valid: false,
      myAlert:false,
      username: '',
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      async register () {
        console.log('register');
        this.myAlert = !this.myAlert;
        this.$store.dispatch('register' ,{username: this.username ,password: this.password});
      },
    },
    mounted () {
    axios
      .get('http://localhost:5000/register')
      .then(response => {
        console.log(response);
        
      })
  }
}
</script>
