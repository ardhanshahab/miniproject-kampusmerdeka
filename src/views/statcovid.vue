<template>
<v-app>
    
    <v-main>
        <h1>Statistik Covid19 di Indonesia</h1>
        <barchart-vue/>
    </v-main>
    </v-app>
</template>

<script>
import axios from 'axios';
import barchartVue from "@/components/barchart.vue"

export default {
    name: "statistikCovid",
    components: {
        barchartVue,
    },
    async created() {
        const { data } = await axios.get("https://data.covid19.go.id/public/api/prov.json");
        console.log(data)
    }
   
    
}
</script>
