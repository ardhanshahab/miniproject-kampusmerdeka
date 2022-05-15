<template>
<v-app>
            
            <v-main>
                <v-container>
               <ApolloQuery
    :query="require('../graphql/queryobatdetail.gql')"
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
            <v-col cols="">
                <v-img :src="data.obatvitamin_by_pk.image"
                ></v-img>
                <h4>{{ data.obatvitamin_by_pk.nama_obat }}</h4>
                <h4>{{ data.obatvitamin_by_pk.harga_obat }}</h4>
                <h4>{{ data.obatvitamin_by_pk.description }}</h4>
                <h4>{{ data.obatvitamin_by_pk.komposisi }}</h4>
                <h4>{{ data.obatvitamin_by_pk.aturan_pakai }}</h4>
                <h4>{{ data.obatvitamin_by_pk.manufaktur }}</h4>

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
    name: "obatvitaminDetail",
    computed: {
   index () { 
       return this.$route.params.index;
   },
    
  },
}
</script>

