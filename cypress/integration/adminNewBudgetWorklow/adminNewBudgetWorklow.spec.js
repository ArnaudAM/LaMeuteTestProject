import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
let users = require("../../fixtures/users")
let email = users[0]["admin"]["email"]
let password = users[0]["admin"]["password"]

let workflows = require("../../fixtures/workflows")
let workflowName = workflows[1]["budget"]["workflowName"]
let code = workflows[1]["budget"]["code"]
let trigger = workflows[1]["budget"]["trigger"]
let max = workflows[1]["budget"]["max"]
let validator = workflows[1]["budget"]["validator"]
let min = workflows[1]["budget"]["min"]

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
  
  When("I create a Budget amount workflow", () => {
    cy.createWorkflow(code, workflowName, trigger, max, validator, min)
    cy.get('[id="create"]').should('contain.text', 'Valider').click()
  });
  
  Then("I have a validation message", () => {
    cy.get('[class="modal-body"]').should('contain.text', '\nLe workflow GP3 budget name a été créé\n\n\n\n\n\nFermer\n\n\n')
    cy.get('[data-ml-close="Annuler"]').click()
  });
