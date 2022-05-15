<template>
<v-app>
            
            <v-main>
                <v-container>
               <ApolloQuery
    :query="require('../graphql/queryhealthdetail.gql')"
    :variables="{id :index}"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
         <div>
         <v-row class="d-flex justify-space-around mb-6">
            <v-col cols="12" >
                <v-img :src="data.healthyarticles_by_pk.image"
                width="600"
                ></v-img>
                <h1>{{ data.healthyarticles_by_pk.title }}</h1>
                <h4>{{ data.healthyarticles_by_pk.author }}</h4>
                <h4>{{ data.healthyarticles_by_pk.soucenews }}</h4>
                <h4>{{ data.healthyarticles_by_pk.created_at }}</h4>
                <p>{{ data.healthyarticles_by_pk.description }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-btn
            class="mx-auto my-4"
             color="light-blue accent-1"
            :href="data.healthyarticles_by_pk.url"
            >
          Baca Lebih Lanjut
            </v-btn>
          
        </v-row>
      </div>
        </div>

      <!-- No result -->
      <div v-else class="no-result apollo">
      <v-row class="d-flex align-center justify-center my-4" align-content="center">
      <v-progress-circular
      :size="70"
      color="primary"
      indeterminate
    >
    </v-progress-circular>
    </v-row>
    </div>
    </template>
  </ApolloQuery>     
                </v-container>
                
     
   
    </v-main>
    </v-app>
</template>

<script>

export default {
    name: "healthyArticlesDetail",
      computed: {
   index () { 
       return this.$route.params.index;
  },
},
}
</script>

