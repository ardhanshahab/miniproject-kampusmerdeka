<template>
<v-app>
    
    <v-main>
        <h1>LandingPage</h1>
<h4>{{  }}</h4>
        <ApolloQuery
    :query="require('../gql/queryobat.gql')"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
         <div v-for="obat in data.obatvitamin" :key="obat.id">
         <v-row class="d-flex justify-space-around mb-6">
            <v-col cols="auto">
                <v-card
    class="mx-auto"
    max-width="400"
    elevation="4"
  >
    <v-img
    :src="obat.image"
    >
      
    </v-img>
<v-card-title>{{ obat.nama_obat }}</v-card-title>
    <v-card-subtitle class="pb-0">
    {{ obat.sourcenews }}
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
    </v-main>
    </v-app>
</template>

<script>

export default {
    name: "obatVitamin",
}
</script>

