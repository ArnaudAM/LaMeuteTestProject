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
  
  When("I delete workflows", () => {
    cy.get('[id="Admin"]').click()
    cy.get('#delete_Workflow_1').click()
    cy.get('.button__primary').should('contain', "Valider").click()
    cy.wait(500)
    cy.get('#delete_Workflow_1').click()
    cy.get('.button__primary').should('contain', "Valider").click()
    cy.wait(500)
    cy.get('#delete_Workflow_1').click()
    cy.get('.button__primary').should('contain', "Valider").click()
    cy.wait(500)
    cy.get('#delete_Workflow_1').click()
    cy.get('.button__primary').should('contain', "Valider").click()
    cy.wait(500)
  });
  
  Then("I have not items in workflow list", () => {
    cy.get('#AdminWorkflows > .std-table > tbody > tr > .text-center').should('contain.text', 'Aucun workflow.')
  });
