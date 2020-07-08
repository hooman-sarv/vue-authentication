<template>
    <div>
        <v-app-bar color="success">
      <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

      <v-snackbar v-model="snackbar" :timeout="4000" bottom color="success">
          <span color="success">Welcome to your account :)</span>
          <v-btn small text color="pink" @click="snackbar = false">Close</v-btn>
      </v-snackbar>

      <v-alert :value="alert" type="success">
        I'm a success alert.
      </v-alert>

    <v-navigation-drawer
      absolute
      app class="indigo lighen-4"
      v-model="drawer"
      right
    >
      <template v-slot:prepend>
        <v-list-item two-line>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
            <v-list-item-avatar>
             <img src="https://randomuser.me/api/portraits/women/81.jpg">
            </v-list-item-avatar>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="(item,index) in items"
          :key="index"
          @click="sideBarIcon(index)"
        >

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
 data () {
      return {
        snackbar:true,
        drawer:true,
        alert:false,
        items: [
          { title: 'Home', icon: 'mdi-home-city' , route:'/' },
          { title: 'My Account', icon: 'mdi-account' , route:'/my-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' , route:'/users' },
          { title: 'Exit', icon: 'mdi-exit-to-app' , route:'/' },

        ],
      }
    },
    methods:{
      sideBarIcon(index){
        if (index === 3) {
          console.log(`user log out`);
          this.$router.push({path:'/'})
          localStorage.clear()
          this.alert = true;
            setTimeout(()=>{
            this.alert=false
          },5000)
          console.log(this.alert);



        }
      },
    },
}
</script>

<style>

</style>