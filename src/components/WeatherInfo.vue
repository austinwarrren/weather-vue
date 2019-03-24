<template>
    <div v-if="weatherInfo.icon">
        <img :src="weatherInfo.icon" alt="weatherState" />
        <p>{{ cityName }}&nbsp;<span v-if="weatherInfo.temp" data-test="temperature">{{ unitTemp }}&deg;</span></p>
        <label v-if="weatherInfo.temp">Temperature 
            <input type="radio" name="tempUnit" v-model="tempUnit" value="C" data-test="celsius" />&deg;C&nbsp;
            <input type="radio" name="tempUnit" v-model="tempUnit" data-test="fahrenheit" value="F" checked="checked" />&deg;F
        </label>
    </div>
</template>

<script>
    export default {
        name: 'WeatherInfo',
        props: {
            cityName: {
                type: String
            },
            weatherInfo: {
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