<template>
  <v-app>
    
<navbar-vue></navbar-vue>
    <v-main>

      <router-view></router-view>
    </v-main>
    <footer-vue></footer-vue>
  </v-app>
</template>

<script>
import navbarVue from "./components/navbar.vue";
import footerVue from "./components/footer.vue";

export default {
  name: 'App',

  components: {
    footerVue,
    navbarVue,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

p,h1,h2,h3,h4,h5,h6{
  
    font-family: Arial, Helvetica, sans-serif;
  
  }
</style>