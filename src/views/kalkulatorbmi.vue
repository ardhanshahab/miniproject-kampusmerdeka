<template>
<v-app>
    
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12" class="my-auto mx-auto align-center">
        <h1>Kalkulator BMI</h1>

       <v-text-field
            label="Height in cm"
            outlined
            v-model="height"
          ></v-text-field>
        <v-text-field
            label="Weight in kgs"
            outlined
            v-model="weight"
          ></v-text-field>
          <v-btn @click="bmicalculation()">GO</v-btn>
            </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="my-auto mx-auto">
            <div v-if="bmi < 25">
            <v-alert
            border="left"
            type="success"
            >{{ bmi }} LOW
            </v-alert>
            </div>
            <div v-else-if="bmi >= 25 && bmi < 30 ">
                        <v-alert
            border="left"
            type="info"
            >{{ bmi }} Moderate
            </v-alert>

            </div>
            <div v-else-if="bmi >= 30">
            <v-alert
            border="left"
            type="error"
            >{{ bmi }} HIGH
            </v-alert>
            </div>     
            </v-col>   
            </v-row>
        </v-container>
    </v-main>
    </v-app>
</template>

<script>

export default {
    name: "LandingPage",
    data() {
        return{
            weight: "",
            height: "",
            hasil: "",
            bmiwan: "",
            bmi: "",
        }
    },
    props: ['name'],
    methods: {
        bmicalculation() {
            const w = this.weight
            const h = this.height/100
            const hasil = w / (h *h)
            console.log(hasil)
            this.bmi = hasil
            console.log(this.bmi)
            if (this.bmi < 25) {
                return "low"
            }
            if (this.bmi > 25) {
                return "Moderate"
            }
            
            

        }
    }
}
</script>

