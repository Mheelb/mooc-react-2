describe('Inscription', () => {
    it('devrait afficher une erreur si le nom est trop court', () => {
        cy.visit('/register')
        cy.get("#name").type("q")
        cy.get("button[type=submit]").click()
        cy.get("div.alert.alert-warning.name").should('have.text', 'Votre nom doit comporter au moins 2 caractères' )
        cy.url().should('eq', Cypress.config().baseUrl + '/register')
    })

    it('devrait afficher une erreur si le mdp est trop court', () => {
        cy.visit('/register')
        cy.get("#password").type("q")
        cy.get("button[type=submit]").click()
        cy.get("div.alert.alert-warning.password").should('have.text', 'Votre mot de passe doit comporter au moins 8 caractères' )
        cy.url().should('eq', Cypress.config().baseUrl + '/register')
    })

    it("devrait afficher une erreur si l'email n'est pas valide", () => {
        cy.visit('/register')
        cy.get("#email").type("q")
        cy.get("button[type=submit]").click()
        cy.get("div.alert.alert-warning.email").should('have.text', 'Email invalide' )
        cy.url().should('eq', Cypress.config().baseUrl + '/register')
    })

    it("devrait afficher une erreur si pays n'est pas séléctionné", () => {
        cy.visit('/register')
        cy.get("#country").select("")
        cy.get("button[type=submit]").click()
        cy.get("div.alert.alert-warning.country").should('have.text', 'Le pays est obligatoire' )
        cy.url().should('eq', Cypress.config().baseUrl + '/register')
    })

    it('devrait rediriger vers la home lorsque le formulaire est correctement rempli', () => {
        cy.visit('/register')
        cy.get("#name").type("qedfzef")
        cy.get("#email").type("test@test.com")
        cy.get("#password").type("12345678")
        cy.get("#country").select("FRANCE")
        cy.get("button[type=submit]").click()
        cy.url().should('eq', Cypress.config().baseUrl + '/')
    })
});