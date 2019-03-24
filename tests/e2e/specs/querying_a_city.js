describe('Querying a city', () => {
    it('Displays city name and temperature', () => {
        cy.visit('/');

        cy.get('[data-test="cityName"]')
            .type('Chicago');
        
        cy.get('[data-test="submitButton"]')
            .click();

        cy.get('[data-test="cityName"]')
            .should('have.value', '');

        cy.contains('Chicago');

        cy.get('[data-test="celsius"]')
            .click();

        // Check if temperature has changed format:
    })
})