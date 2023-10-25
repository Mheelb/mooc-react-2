describe('Inscription', () => {
    it("devrait se deconnecter", () => {
        cy.visit('/login')
        cy.get("#login").type("admin")
        cy.get("#password").type("adminadmin")
        cy.get("button[type=submit]").click()
        cy.url().should('eq', Cypress.config().baseUrl + '/')
        cy.get("#logout").click()
        cy.contains("Deconnexion").should('not.exist')
    });
});