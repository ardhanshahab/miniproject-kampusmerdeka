<template>
<v-app>
    <v-main>
        <v-container>
        <v-row>
          <v-col cols="12" class="d-flex mx-3">
            <h1>HealthyArticles</h1>
          </v-col>
        </v-row>
<ApolloQuery
    :query="require('../gql/queryhealth.gql')"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
         <div v-for="healthy in data.healthyarticles" :key="healthy.id">
           <v-row class="d-flex justify-space-around mb-6">
            <v-col cols="auto">
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
        @click="redirect(index)"
      >
        Share
      </v-btn>

    </v-card-actions>
  </v-card>
  
            </v-col>
        </v-row>
      </div>
        </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>        
       
        
        </v-container>
    </v-main>
    </v-app>
</template>

<script>
export default {
    name: "healthyArticles",
computed: {
    // listHealthy() {
    //   return this.$store.state.news.list;
    // },
    // infoHealthy() {
    //   return this.$store.state.news.info;
    // },
  },
  methods: {
    // fetchHealthy() {
    //   this.$store.dispatch("news/fetchList");
    // },
  
    redirect(index) {
        this.$router.push('/healthyarticles/detailtopic/' + index);
    }
    
  },
  // mounted() {
  //   this.fetchHealthy();
  // },
}
</script>
