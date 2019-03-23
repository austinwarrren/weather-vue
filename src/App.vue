<template>
  <div>
    <WeatherInfo :cityName="cityName" />
    <CityNameForm @submit="displayCity" />
  </div>
</template>

<script>
import CityNameForm from './components/CityNameForm'
import WeatherInfo from './components/WeatherInfo'

export default {
  name: 'App', 
  components: {
    CityNameForm,
    WeatherInfo
  },
  data() {
    return {
      cityName: ''
    };
  },
  methods: {
    displayCity(cityName) {
      this.cityName = cityName;
    }
  } 
}
</script>
