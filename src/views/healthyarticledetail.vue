<template>
<v-app>
            
            <v-main>
                <v-container>
                <v-row>
                    <v-col cols="2"></v-col>
                    <v-col cols="8">
        <img :src="newsData.urlToImage" width="auto"/>
        <v-row class="mx-auto my-2">
        <h3 class="title">{{ newsData.title }}</h3>
            <h4 class="subtitle">{{ newsData.publishedAt }}</h4><br/>
            <h4>By : {{ newsData.author }}</h4>
        </v-row>
        <v-row class="mx-auto my-2">
        <p>{{ newsData.description }}</p>
            <h4>from : {{ newsData.source ["name"] }}</h4>
        </v-row>
        <v-row class="mx-auto my-5 justify-center">
             <v-btn
    elevation="2"
  large
  color="blue lighten-1"
  dark
  :href="newsData.url"
  target="_blank"
  >Baca Lebih Lanjut</v-btn>
        </v-row>
                    </v-col>
                    <v-col cols="2"></v-col>
                </v-row>
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
   newsData() {
        return this.$store.state.news.list[this.index];
    },
  },
  mounted() {
      console.log(this.newsData)
      console.log(this.index)
    
  },
}
</script>

