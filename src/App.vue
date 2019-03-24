<template>
  <b-container>
    <div class="rounded" id="app">
      <WeatherInfo :cityName="cityName" :weatherInfo="weatherInfo" />
      <CityNameForm @submit="displayCity" />
    </div>
  </b-container>
</template>

<script>
import CityNameForm from './components/CityNameForm'
import WeatherInfo from './components/WeatherInfo'
import WeatherData from './services/api/WeatherData.js'

export default {
  name: 'App', 
  components: {
    CityNameForm,
    WeatherInfo
  },
  data() {
    return {
      cityName: '',
      weatherInfo: {}
    };
  },
  methods: {
    displayCity(cityName) {
      
      WeatherData.getCurrentWeatherData(cityName)
        .then(response => {
            this.weatherInfo = response;
            this.cityName = response.name;
        });
    }
  } 
}
</script>

<style>
    #app {
      display: inline-block;
      padding: 10px;
      background-color: #dddddd;
      text-align: left;
    }
    .container{
      text-align: center;
    }
</style>
