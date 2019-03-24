import axios from 'axios'

export default {
    getCurrentWeatherData(cityName) {
        return axios.get('http://api.openweathermap.org/data/2.5/weather', {params: {
            q: cityName,
            APPID: process.env.VUE_APP_OPEN_WEATHER_MAP_KEY
        }}).then(response => {
            let trimmedResponse = {
                "name": response.data.name,
                "temp": response.data.main.temp,
                "icon": 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png'
            }
            return trimmedResponse;
        }).catch(error => {
            console.log(error);
            let errorResponse = {
                'name': 'Error: Invalid entry',
                'temp': null,
                'icon': require('../../assets/warning-icon-small.png')
            };
            return errorResponse;
        });
    }
}