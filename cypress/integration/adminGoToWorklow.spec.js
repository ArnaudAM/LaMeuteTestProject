/// <reference types="cypress"/>

describe('Go to admin workflow', () => {

    it('Log in with admin credentials and go to workflow', () => {
        cy.visit("https://stg-fr.rajapack.xyz/")
        cy.get('[id="dropdown-account"]').click()
        cy.get('[id="UserLoginDropdown"]').type('tnr_e2e_mrproc_admin@mailcare.datasolution.site')
        cy.get('[id="UserPasswordDropdown"]').type('Azerti@123')
        cy.get('[class="js-connexion-submit button__primary m-t-12"]').should("contain", "Se connecter").click()
        cy.wait(1000)
        cy.url().should('contain', "ViewHomepage-Start")
        cy.get('h1').should('contain', "Tableau de bord")
        cy.get('[id="Admin"]').click()
        cy.url().should('contain', "ViewAccountAdministration-Start")
        cy.get('h1').should('contain', "Administration")
    })
})