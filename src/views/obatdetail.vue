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
         <v-row class="d-flex justify-space-around mx-6">
            <v-col cols="4">
              <v-img :src="data.obatvitamin_by_pk.image"
                width="400"
                ></v-img>
            </v-col>
            
            <v-col cols="8">
                <h3 class="title">{{ data.obatvitamin_by_pk.nama_obat }}</h3>
                <h3>Rp. {{ data.obatvitamin_by_pk.harga_obat }}</h3>
                <br/>
                <h4>Kategori</h4>
                <p>{{ data.obatvitamin_by_pk.category }}</p>
                <h4>Deskripsi</h4>
                <p>{{ data.obatvitamin_by_pk.description }}</p>
                <h4>Komposisi</h4>
                <p>{{ data.obatvitamin_by_pk.komposisi }}</p>
                <h4>Aturan Pakai</h4>
                <p>{{ data.obatvitamin_by_pk.aturan_pakai }}</p>
                <h4>Manufaktur</h4>
                <p>{{ data.obatvitamin_by_pk.manufaktur }}</p>
            </v-col>
           </v-row>
      </div>
        </div>

      <!-- No result -->
      <div v-else class="no-result apollo"> <v-row class="d-flex align-center justify-center mx-6 my-6" align-content="center">
      <v-progress-circular
      :size="70"
      color="primary"
      indeterminate
    ></v-progress-circular>
 </v-row></div>
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

