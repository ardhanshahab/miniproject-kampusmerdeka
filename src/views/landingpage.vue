<template>
<v-app>
    <v-main>
        <v-container fluid>
            <v-row>
                <!-- hero1 -->
                <v-col cols="6">
                    <v-row class="mx-auto my-auto px-5 py-5 justify-center">
                        <h1>Pusatkesehatanterlengkap</h1>
                    </v-row>
                    <v-spacer></v-spacer>
                <v-row class="d-flex align-end justify-space-around my-15 py-10">
                    <v-btn
                    elevation="3"
                    large
                    color="indigo accent-1"
                    >ObatVitamin</v-btn>
                    <v-btn
                    elevation="3"
                    large
                    color="indigo accent-1"
                    >ObatVitamin</v-btn>
                </v-row>
                </v-col>
                <v-col cols="6">
                  <v-img src="https://pbs.twimg.com/media/FSZiDEPakAA3E0s?format=jpg&name=small">
                  </v-img>
                  </v-col>
            </v-row>
 
            <v-row>
                <!-- hero2 -->
                <v-col cols="12">
                    <v-card
                        elevation="2"
                        color="teal accent-1"
                        class="px-5 py-5 mx-3 my-auto d-flex"
                        >
                        <v-card v-for="(healthy, index) in listHealthy" :key="index" width="400" class="mx-3">
                            <v-img
                                :src="healthy.urlToImage"
                                >
                                  
                                </v-img>
                            <v-card-title>{{ healthy.title }}</v-card-title>
                                <v-card-subtitle class="pb-0">
                                {{ healthy.source["name"] }}
                                </v-card-subtitle>
                        </v-card>
                        <v-card class="d-flex align-center justify-end px-4">
                          <v-icon>mdi-arrow-right-circle-outline</v-icon>
                          <span>Lihat Selengkapnya</span>
                        </v-card>
                        </v-card>
                </v-col>
               </v-row>
            <v-row>
                <!-- hero3 -->
                <v-col cols="12">
                  <v-card
                        elevation="2"
                        color="light-blue accent-1"
                        class="d-flex py-5 px-5 mx-5 my-auto ">
                       <v-card
                            class="mx-5 my-5"
                            width="300"
                          >
                            <v-img
                            src="https://pbs.twimg.com/media/FSZkRJBaAAUXYGC?format=jpg&name=4096x4096"
                            width="200"
                            >
                                  
                                </v-img>
                            <v-card-title>Kalkulator BMI</v-card-title>
                            </v-card>

<v-card
                            class="mx-5 my-5"
                            width="300"
                          >
                            <v-img
                            src="https://pbs.twimg.com/media/FSZkb_3agAEvOTz?format=png&name=small"
                            width="200"
                            >
                                  
                                </v-img>
                            <v-card-title>Statistik Covid-19</v-card-title>
                            </v-card>

                          <v-card
                            class="mx-5 my-5"
                            width="300"
                          >
                            <v-img
                            src="https://pbs.twimg.com/media/FSZkRI-aIAAVu4f?format=jpg&name=large"
                            width="200"
                            >
                                  
                                </v-img>
                            <v-card-title>Diagnosis Covid-19</v-card-title>
                            </v-card>

<v-card class="d-flex align-center justify-space-around px-4">
                          <v-icon>mdi-arrow-right-circle-outline</v-icon>
                          <span>Lihat Selengkapnya</span>
                        </v-card>
</v-card></v-col>
            </v-row>
        
        </v-container>
    </v-main>
    </v-app>
</template>

<script>

export default {
    name: "LandingPage",
    computed: {
    listHealthy() {
      return this.$store.state.news.list;
    },
  },
  methods: {
    fetchHealthy() {
      this.$store.dispatch("news/landingList");
    },
    
  },
  mounted() {
    this.fetchHealthy();
  },
}
</script>