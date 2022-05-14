<template>
<v-app>
    
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex mx-3">
            <h1>Obat & Vitamin</h1>
          </v-col>
        </v-row>

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
         <v-row class="d-flex justify-space-around mb-6">
            <v-col cols="auto" v-for="healthy in data.obatvitamin" :key="healthy.id" class="d-flex justify-space-around mb-6">
                <v-card
    class="mx-auto"
    width="300"
    elevation="4"
  >
    <v-img
    :src="healthy.image"
    width="200"
    >
      
    </v-img>
<v-card-title>{{ healthy.nama_obat }}</v-card-title>
    <v-card-subtitle class="pb-0">
      <p>
        Rp.
    {{ healthy.harga_obat }}
    </p>
    </v-card-subtitle>

    <v-card-text class="text--primary">

     </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        @click="redirect(healthy.id)"

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
      color="primary"
      indeterminate
    ></v-progress-circular>
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
    name: "obatVitamin",
    methods: {
      redirect(id) {
        this.$router.push('/obatvitamin/detailobat/' + id);
    },
    }

}
</script>

