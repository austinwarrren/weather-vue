import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import CityNameForm from '../../src/components/CityNameForm.vue';

describe('CityNameForm', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(CityNameForm);
    });

    describe('clicking the submit button', () => {
        beforeEach(() => {
            wrapper
                .find('[data-test="cityName"]')
                .setValue('Chicago IL');
            
            wrapper
                .find('[data-test="submitButton"]')
                .trigger('click');
        });

        it('clears the text field', () => {
            expect(
                wrapper.find('[data-test="cityName"]').element.value
            ).to.equal('');
        });

        it('emits the "submit" event', () => {
            expect(wrapper.emitted().submit[0]).to.deep.equal(['Chicago IL']);
        });
    });
});