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
  
  When("I delete a workflow of a buyer", () => {
    cy.get('[id="Users"]').click()
    cy.get('[id="edit_fr_FR_byergp3@data.fr"]').click()
    cy.get('[id="delete_Workflow_1"]').click()
    cy.get('[class="button__primary"]').should('contain.text', 'Valider').click()
  });
  
  Then("I have NOT the corresponding workflow name", () => {
    cy.get('[class="text-center"]').should('contain.text', 'Aucun workflow.')
  });
