describe('Home', () => {
    it('devrait contenir des liens cliquables', () => {
        cy.visit('/')
        cy.contains('Users')
        cy.contains('Compteur')
        cy.contains('Rôles')
        cy.contains('inscrivez-vous !').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/register')
    })
});