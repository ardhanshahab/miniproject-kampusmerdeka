<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="grey darken-2">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        
      </v-card-title>
      <v-card-text class="py-2 white--text text-center grey darken-2">
                  <v-row class="mx-auto my-auto">
          <v-col cols="1">

          </v-col>
          <v-col cols="2">
              <h3 class="title">HappyPills</h3>
          </v-col>
          <v-col cols="3">
              <h4 class="py-2">FAQ</h4>
              <h4 class="py-2">Blog</h4>
              <h4 class="py-2">Privacy Policy</h4>
          </v-col>
          <v-col cols="3">
              <h4 class="py-2">Call Center</h4>
              <h4 class="py-2">14048</h4>
              <h4 class="py-2">info@happypills.com</h4>
          </v-col>
          <v-col cols="2">
              <h4>Office</h4>
              <p>Gedung HappyPills, Jl. HR Rasuna Said Kav. B48-48, Jakarta Selatan 12940</p>
          </v-col>
          <v-col cols="1">

          </v-col>
          </v-row>
      </v-card-text>
      <v-card-text class="py-2 white--text text-center grey darken-2">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
      name: "footerVue",
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
