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
        cy.get('#AdminWorkflows > .flex > a > .text-lightGrey').click()
        cy.get('[id="workflow_id"]').type('Code du Workflow')
        cy.get('[id="workflow_name"]').type('Nom du Workflow')
        cy.get('[id="workflow_trigger"]').select("AMOUNT")
        cy.get('[id="workflow_max"]').type('1000')
        cy.get('[id="workflow_validator1"]').select("nD8K_clgsqMAAAF2taiLiPCX")
        cy.get('[id="workflow_min"]').type('5')
        cy.get('[id="create"]').should('contain.text', 'Valider').click()
        cy.get('[class="modal-body"]').should('contain.text', '\nLe workflow Nom du Workflow a été créé\n\n\n\n\n\nFermer\n\n\n')
        cy.get('[data-ml-close="Annuler"]').click()
    })
})