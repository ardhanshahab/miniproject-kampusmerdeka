<template>
<v-app>
    <v-main>
        <v-container fluid>
                            <!-- hero1 -->
            <v-row>
                <v-col cols="6">
                    <v-row class="mx-auto my-auto px-5 py-5 justify-center">
                        <h1>Pusat Informasi Kesehatan Terlengkap</h1>
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
                    disabled
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
                       
<ApolloQuery
    :query="require('../graphql/queryarticleslimit.gql')"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
           <v-row class="d-flex justify-space-around mb-6">
            <v-col cols="auto" v-for="healthy in data.healthyarticles" :key="healthy.id" class="d-flex justify-space-around mb-6">
                <v-card
    class="mx-auto"
    max-width="400"
    elevation="4"
  >
    <v-img
    :src="healthy.image"
    >
      
    </v-img>
<v-card-title>{{ healthy.title }}</v-card-title>
    <v-card-subtitle class="pb-0">
    {{ healthy.sourcenews }}
    </v-card-subtitle>

    <v-card-text class="text--primary">

     </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        :href="healthy.url"
      >
        Lihat
      </v-btn>

    </v-card-actions>
  </v-card>
  
            </v-col>
        </v-row>
        </div>

      <!-- No result -->
      <div v-else class="no-result apollo">
                <v-row class="d-flex align-center justify-center my-4" align-content="center">
      <v-progress-circular
      :size="70"
      color="white"
      indeterminate
    ></v-progress-circular>
    </v-row>
        </div>
    </template>
  </ApolloQuery>    
                        <v-btn class="d-flex align-center justify-end px-4 mx-4 my-7"
                        rounded
                        text
                        dark
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
                        
                        <v-col cols="12" class="d-flex align-center">
                        <v-card  width="400" class="mx-3"
                        to="/kalkulatorBMI"
                        >
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
                        <!-- <v-card  width="400" class="mx-3">
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
                        </v-btn> -->
                        
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

  methods: {
      redirect(id) {
        this.$router.push('/obatvitamin/detailobat/' + id);
    },
    
  },
}
</script>