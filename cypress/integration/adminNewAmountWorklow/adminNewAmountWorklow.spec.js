import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am authenticated as Administrator", () => {
    cy.visit("https://stg-fr.rajapack.xyz/")
    cy.wait(300)
    cy.get('[id="dropdown-account"]').click()
    cy.get('[id="UserLoginDropdown"]').type('admingp3@data.fr')
    cy.get('[id="UserPasswordDropdown"]').type('test')
    cy.get('[class="js-connexion-submit button__primary m-t-12"]').should("contain", "Se connecter").click()
    cy.wait(1000)
    cy.url().should('contain', "ViewHomepage-Start")
    cy.get('h1').should('contain', "Tableau de bord")
    cy.get('[id="Admin"]').click()
    cy.url().should('contain', "ViewAccountAdministration-Start")
    cy.get('h1').should('contain', "Administration")
});
  
  When("I create an Amount workflow", () => {
    cy.get('#AdminWorkflows > .flex > a > .text-lightGrey').click()
    cy.get('[id="workflow_id"]').type('GP3 amount code')
    cy.get('[id="workflow_name"]').type('GP3 amount name')
    cy.get('[type="checkbox"]').check({force:true})
    cy.get('[id="workflow_trigger"]').select("AMOUNT")
    cy.get('[id="workflow_max"]').type('1000')
    cy.get('[id="workflow_validator1"]').select("yJEK_clgaPsAAAGAKvenTKgk")
    cy.get('[id="workflow_min"]').type('2000')
    cy.get('[id="create"]').should('contain.text', 'Valider').click()
  });
  
  Then("I have a validation message", () => {
    cy.get('[class="modal-body"]').should('contain.text', '\nLe workflow GP3 amount name a été créé\n\n\n\n\n\nFermer\n\n\n')
    cy.get('[data-ml-close="Annuler"]').click()
  });
