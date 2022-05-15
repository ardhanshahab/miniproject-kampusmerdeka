<template>
  <div>
    <v-app-bar
      color="light-blue darken-4"
      dense
      dark
      app
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-app-bar-title>HappyPills</v-app-bar-title>

      <v-spacer></v-spacer>


      <!-- <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          class="text-center"
        >
          <v-list-item
          link
          to="/"
          >
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item
          link
          to="/healthyarticles"
          >
            <v-list-item-title>Healthy Articles</v-list-item-title>
          </v-list-item>

          <v-list-item
          link
          to="/obatvitamin"
          >
            <v-list-item-title>ObatVitamin</v-list-item-title>
          </v-list-item>
          
          <v-list-item
          link
          to="/KalkulatorBMI"
          >
            <v-list-item-title>Kalkulator BMI</v-list-item-title>
          </v-list-item>
          

          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
  export default {
    name: 'navbarVue',
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
  </script>