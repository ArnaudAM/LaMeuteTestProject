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
});
  
  When("I assign a workflow to a buyer", () => {
    cy.get('[id="Users"]').click()
    cy.get('[id="edit_fr_FR_byergp3@data.fr"]').click()
    cy.get('#AdminWorkflows > .flex > a > .text-lightGrey').click()
    // cy.get('[type="checkbox"]').check()
    cy.get('tbody > :nth-child(1) > :nth-child(1) > .icheckbox_line > .iCheck-helper').click()
    cy.get('[class="button__primary mr-auto"]').should('contain.text', 'Valider').click()
  });
  
  Then("I have the corresponding workflow name", () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain.text', 'GP3 PNICF code')
    // cy.get('[data-ml-close="Annuler"]').click()
  });
