describe('Querying a city', () => {
    it('Displays city name and temperature', () => {
        cy.visit('/');

        cy.get('[data-test="cityName"]')
            .type('Chicago IL');
        
        cy.get('[data-test="submitButton"]')
            .click();

        cy.get('[data-test="cityName"]')
            .should('have.value', '');

        cy.contains('Chicago IL');
    })
})