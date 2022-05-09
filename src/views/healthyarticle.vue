<template>
<v-app>
    <v-main>
        <v-container>
        <v-row class="d-flex justify-space-around mb-6">
            <v-col cols="auto" v-for="(healthy, index) in listHealthy" :key="index">
                <v-card
    class="mx-auto"
    max-width="400"
    elevation="4"
  >
    <v-img
    :src="healthy.urlToImage"
    >
      
    </v-img>
<v-card-title>{{ healthy.title }}</v-card-title>
    <v-card-subtitle class="pb-0">
    {{ healthy.source["name"] }}
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
        <h1>HealthyArticles</h1>
        </v-container>
    </v-main>
    </v-app>
</template>

<script>
export default {
    name: "healthyArticles",
computed: {
    listHealthy() {
      return this.$store.state.news.list;
    },
    infoHealthy() {
      return this.$store.state.news.info;
    },
  },
  methods: {
    fetchHealthy() {
      this.$store.dispatch("news/fetchList");
    },
  
    redirect(index) {
        this.$router.push('/healthyarticles/detailtopic/' + index);
    }
    
  },
  mounted() {
    this.fetchHealthy();
  },
}
</script>
