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
});
  
  When("I delete a workflow of a buyer", () => {
    cy.get('[id="Users"]').click()
    cy.get('[id="edit_fr_FR_byergp3@data.fr"]').click()
    cy.get('[id="delete_Workflow_1"]').click()
    cy.get('[class="button__primary"]').should('contain.text', 'Valider').click()
  });
  
  Then("I have NOT the corresponding workflow name", () => {
    cy.get('#AdminWorkflows > .std-table > tbody > tr > .text-center').should('contain.text', 'Aucun workflow.')
  });
