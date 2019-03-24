import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import WeatherInfo from '../../src/components/WeatherInfo.vue';

describe('WeatherInfo', () =>{
    let wrapper;

    beforeEach(() => {
        wrapper = mount(WeatherInfo, {
            propsData: {
                weatherInfo: {
                    name: 'Chicago',
                    temp: 250,
                    icon: 'http://openweathermap.org/img/w/10d.png'
                }
            }
        });
    });

    describe('clicking the Celsius radio button', () => {
        beforeEach(() => {
            wrapper
                .find('[data-test="celsius"]')
                .trigger('click');
        });

        it('converts to Celsius', () => {
            let kelvinTemp = wrapper.props().weatherInfo.temp;
            let celsiusTemp = Math.floor((parseFloat(kelvinTemp) - 273.15) * 100) / 100;
            expect(
                wrapper.vm.unitTemp
            ).to.equal(celsiusTemp);
        })
    });

    describe('clicking the Fahrenheit radio button', () => {
        beforeEach(() => {
            wrapper
                .find('[data-test="fahrenheit"]')
                .trigger('click');
        });

        it('converts to Fahrenheit', () => {
            let kelvinTemp = wrapper.props().weatherInfo.temp;
            let fahrenheitTemp = Math.floor(((kelvinTemp - 273.15) * (9/5) + 32) * 100) / 100;
            expect(
                wrapper.vm.unitTemp
            ).to.equal(fahrenheitTemp);
        })
    });
})