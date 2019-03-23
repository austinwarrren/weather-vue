import { expect } from 'chai';
import WeatherData from '../../src/services/api/WeatherData.js'
import nock from 'nock';
import WeatherDataResponse from './mocks/weatherDataResponse.js';

describe('WeatherData', () => {
    beforeEach(() => {
        nock('http://api.openweathermap.org')
            .defaultReplyHeaders({'access-control-allow-origin': '*'})
            .get('/data/2.5/weather')
            .query({
                q: 'Chicago',
                APPID: process.env.VUE_APP_OPEN_WEATHER_MAP_KEY
            })
            .reply(200, WeatherDataResponse.currentWeatherData);
    })
    it('returns correct information', () => {
        return WeatherData.getCurrentWeatherData('Chicago')
            .then(response => {
                //expect(response).to.be.a('object');
                expect(response.name).to.equal('Chicago')
            });
    })
})