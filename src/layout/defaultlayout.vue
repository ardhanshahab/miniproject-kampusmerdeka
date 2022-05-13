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
import navbarVue from "../components/navbar.vue";
import footerVue from "../components/footer.vue";


export default {
    name: "defaultLayoutVue",
    components: {
    footerVue,
    navbarVue,

  },
}
</script>