<template>
<v-app>
    
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12" class="d-flex justify-center">
                           <v-img
                                src="https://pbs.twimg.com/media/FSZkRJBaAAUXYGC?format=jpg&name=4096x4096"
                                position="center center"
                                max-height="500"
                                max-width="500"
                                ><h1 class="text-center">Kalkulator BMI</h1></v-img>
                                        
                </v-col>
                <v-col cols="12" class="my-auto mx-auto align-center">


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
            <div v-if="bmi < 19">
            <v-alert
            border="left"
            type="success"
            > BMI kamu : {{ bmi }} Berat rendah
            </v-alert>
            </div>
            <div v-else-if="bmi >= 19 && bmi < 23 ">
                        <v-alert
            border="left"
            type="info"
            >BMI kamu : {{ bmi }} Berat Ideal
            </v-alert>

            </div>
            <div v-else-if="bmi > 23 && bmi < 25">
            <v-alert
            border="left"
            type="error"
            >BMI kamu : {{ bmi }} Kelebihan Berat badan (kurang ideal) 
            </v-alert>
            </div>     
            <div v-else-if="bmi >= 25 && bmi < 30 ">
            <v-alert
            border="left"
            type="error"
            >BMI kamu : {{ bmi }} Berat berlebih (obesitas)
            </v-alert>
            </div>
            <div v-else-if="bmi >= 30 ">
            <v-alert
            border="left"
            type="error"
            >BMI kamu : {{ bmi }} obesitas (Segera Konsultasi ke Dokter)
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

