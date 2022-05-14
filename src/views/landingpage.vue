<template>
<v-app>
    <v-main>
        <v-container fluid>
                            <!-- hero1 -->
            <v-row>
                <v-col cols="6">
                    <v-row class="mx-auto my-auto px-5 py-5 justify-center">
                        <h1>Pusat Informasi kesehatan terlengkap</h1>
                    </v-row>
                    <v-spacer></v-spacer>
                <v-row class="d-flex align-end justify-space-around my-15 py-10">
                    <v-btn
                    elevation="3"
                    large
                    rounded
                    dark
                    to="/obatvitamin"
                    color="light-blue darken-1"
                    >Obat Vitamin</v-btn>
                    <v-btn
                    elevation="3"
                    large
                    dark
                    rounded
                    to="/rumahsakit"
                    color="light-blue darken-1"
                    >List Rumah Sakit</v-btn>
                </v-row>
                </v-col>
                <v-col cols="6">
                  <v-img src="https://pbs.twimg.com/media/FSZiDEPakAA3E0s?format=jpg&name=small">
                  </v-img>
                  </v-col>
            </v-row>
 <!-- hero2 -->
            <v-row>
                <v-col cols="12">
                    <h4 class="title mx-3 my-3">Topik Teratas</h4>
                        
                      <v-card
                        elevation="2"
                        color="light-blue darken-1"
                        class="px-5 py-5 mx-3 my-auto d-flex align-center"
                        >

                        <v-col cols="12" class="d-flex align-center">
                       
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
                        <v-btn class="d-flex align-center justify-end px-4 my-7"
                        rounded
                        text
                        to="/healthyarticles"
                        >
                          <v-icon>mdi-arrow-right-circle-outline</v-icon>
                          <span>Lihat Selengkapnya</span>
                        </v-btn>
                </v-col>
                </v-card>
                
                </v-col>
                
               </v-row>
              <!-- hero3 -->
            <v-row> 
                <v-col cols="12">
              <h4 class="title mx-3 my-3">Fitur kesehatan</h4>
                  <v-card
                        elevation="2"
                        color="light-blue accent-1"
                        class="d-flex py-5 px-5 mx-5 my-auto justify-center">              
                        <router-link to="/fiturkesehatan"></router-link>
                        
                        <v-col cols="12" class="d-flex align-center">
                        <v-card  width="400" class="mx-3">
                            <v-img
                                src="https://pbs.twimg.com/media/FSZkRJBaAAUXYGC?format=jpg&name=4096x4096"
                                position="center center"
                                max-height="200"
                                max-width="300"
                                >
                                  
                                </v-img>
                            <v-card-title>Kalkulator BMI</v-card-title>
                                <v-card-subtitle class="pb-0">
                                
                                </v-card-subtitle>
                        </v-card>
                        <v-card  width="400" class="mx-3">
                            <v-img
                                src="https://pbs.twimg.com/media/FSZkb_3agAEvOTz?format=png&name=small"
                                position="center center"
                                max-height="200"
                                max-width="200"
                                >
                                  
                                </v-img>
                            <v-card-title>Statistik Covid-19</v-card-title>
                                <v-card-subtitle class="pb-0">
                                
                                </v-card-subtitle>
                        </v-card>
                        <v-card  width="400" class="mx-3">
                            <v-img
                                src="https://pbs.twimg.com/media/FSZkRI-aIAAVu4f?format=jpg&name=large"
                                position="center center"
                                max-height="200"
                                max-width="200"
                                >
                                  
                                </v-img>
                            <v-card-title>Diagnosis Covid-19</v-card-title>
                                <v-card-subtitle class="pb-0">
                                
                                </v-card-subtitle>
                        </v-card>
                        <v-btn class="d-flex align-center justify-end px-4 my-7"
                        rounded
                        text
                        >
                          <v-icon>mdi-arrow-right-circle-outline</v-icon>
                          <span>Lihat Selengkapnya</span>
                        </v-btn>
                        
</v-col>
</v-card>
</v-col>



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