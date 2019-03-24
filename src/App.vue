<template>
  <div>
    <WeatherInfo :cityName="cityName" :weatherInfo="weatherInfo" />
    <CityNameForm @submit="displayCity" />
  </div>
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
