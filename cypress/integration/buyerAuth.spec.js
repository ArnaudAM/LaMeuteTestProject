/// <reference types="cypress"/>

describe('Login with Admin credential', () => {

    it('Use login formular with admin credentials', () => {
        cy.visit("https://stg-fr.rajapack.xyz/")
        cy.get('[id="dropdown-account"]').click()
        cy.get('[id="UserLoginDropdown"]').type('byergp3@data.fr')
        cy.get('[id="UserPasswordDropdown"]').type('test')
        cy.get('[class="js-connexion-submit button__primary m-t-12"]').should("contain", "Se connecter").click()
        cy.wait(1000)
        cy.url().should('contain', "ViewHomepage-Start")
        cy.get('#Admin').should('not.exist')
        cy.get('h1').should('contain', "Tableau de bord")
    })
})