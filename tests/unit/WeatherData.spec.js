import { expect } from 'chai';
import WeatherData from '../../src/services/api/WeatherData.js'

describe('WeatherData', () => {
    it('returns JSON', () => {
        return WeatherData.getCurrentWeatherData('Chicago')
            .then(response => {
                expect(response).to.be.a('object');
            });
    })
})