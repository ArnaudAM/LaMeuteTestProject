import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
let users = require("../../fixtures/users")
let email = users[0]["admin"]["email"]
let password = users[0]["admin"]["password"]

Given("I am authenticated as Administrator", () => {
  cy.login(email, password).then(response => {
    expect(response.status).to.eq(200)
  })
  cy.visit("/")
  cy.wait(1000)
  cy.url().should('contain', "ViewHomepage-Start")
  cy.get('h1').should('contain', "Tableau de bord")
  cy.get('[id="Admin"]').click()
  cy.url().should('contain', "ViewAccountAdministration-Start")
  cy.get('h1').should('contain', "Administration")
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
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain.text', 'Arnaud')
    // cy.get('[data-ml-close="Annuler"]').click()
  });
