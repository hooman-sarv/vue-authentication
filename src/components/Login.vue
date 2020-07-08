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
            </v-row>
            <v-row>
                <v-col >
                    <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="login"
                        >
                        login
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
  name: 'login',
  data: () => ({
      valid: false,
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
      async login () {
        console.log('login');
        this.$store.dispatch('login' ,{username: this.username ,password: this.password});
      },
    },
}
</script>

