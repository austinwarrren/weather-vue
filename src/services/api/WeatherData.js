import axios from 'axios'

export default {
    getCurrentWeatherData(cityName) {
        return axios.get('http://api.openweathermap.org/data/2.5/weather', {params: {
            q: cityName,
            APPID: process.env.VUE_APP_OPEN_WEATHER_MAP_KEY
        }}).then(response => {
            return response.data;
        }).catch(error => {
            console.log(error)
        });
    }
}