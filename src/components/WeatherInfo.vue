<template>
    <div>
        <img :src="weatherInfo.icon" alt="weatherState" />
        <p>{{ cityName }}&nbsp;<span data-test="temperature">{{ unitTemp }}&deg;</span></p>
        <label>Temperature 
            <input type="radio" name="tempUnit" v-model="tempUnit" value="C" data-test="celsius" />&deg;C&nbsp;
            <input type="radio" name="tempUnit" v-model="tempUnit" data-test="fahrenheit" value="F" />&deg;F
        </label>
    </div>
</template>

<script>
    export default {
        name: 'WeatherInfo',
        props: {
            cityName: {
                default: 'Chicago',
                type: String
            },
            weatherInfo: {
                default: { name: 'Chicago', temp: 250, icon: 'http://'},
                type: Object
            }
        },
        data() {
            return {
                tempUnit: 'F'
            }
        },
        computed: {
            unitTemp: function () {
                if(this.tempUnit == 'F'){
                    return Math.floor(((this.weatherInfo.temp - 273.15) * (9/5) + 32) * 100) / 100;
                }
                else{
                    return Math.floor((this.weatherInfo.temp - 273.15) * 100) / 100;
                }
            }
        }
    }
</script>