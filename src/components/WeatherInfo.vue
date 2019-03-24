<template>
    <div v-if="weatherInfo.icon">
        <b-row>
            <b-col cols="7">
                <h4>{{ cityName }}</h4>
            </b-col>
            <b-col cols="5">
                <div class="btn-group btn-group-toggle" v-if="weatherInfo.temp">
                    <label v-bind:class="{ active: isCelsius }" class="btn btn-outline-primary">
                        <input type="radio" name="tempUnit" data-test="celsius" value="C" v-model="tempUnit" />&deg;C
                    </label>
                    <label v-bind:class="{ active: isFahrenheit }" class="btn btn-outline-primary">
                        <input type="radio" name="tempUnit" data-test="fahrenheit" value="F" v-model="tempUnit" checked="checked" />&deg;F
                    </label>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <img :src="weatherInfo.icon" alt="Weather Condition" />
                <span v-if="weatherInfo.temp" data-test="temperature">{{ unitTemp }}&deg;</span>
            </b-col>
        </b-row>
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
                tempUnit: 'F',
                isFahrenheit: true,
                isCelsius: false
            }
        },
        computed: {
            unitTemp: function () {
                if(this.tempUnit == 'F'){
                    this.isFahrenheit = true;
                    this.isCelsius = false;
                    return Math.round(((this.weatherInfo.temp - 273.15) * (9/5) + 32));
                }
                else{
                    this.isFahrenheit = false;
                    this.isCelsius = true;
                    return Math.round(this.weatherInfo.temp - 273.15);
                }
            },
        }
    }
</script>