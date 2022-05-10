/// <reference types="cypress"/>

describe('Login with Admin credential', () => {

    it('Use login formular with admin credentials', () => {
        cy.visit("https://stg-fr.rajapack.xyz/")
        cy.get('[id="dropdown-account"]').click()
        cy.get('[id="UserLoginDropdown"]').type('tnr_e2e_mrproc_buyer@mailcare.datasolution.site')
        cy.get('[id="UserPasswordDropdown"]').type('Azerti@123')
        cy.get('[class="js-connexion-submit button__primary m-t-12"]').should("contain", "Se connecter").click()
        cy.wait(1000)
        cy.url().should('contain', "ViewHomepage-Start")
        cy.get('#Admin').should('not.exist')
        cy.get('h1').should('contain', "Tableau de bord")
    })
})