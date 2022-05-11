import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
let users = require("../../fixtures/users")
let email = users[0]["admin"]["email"]
let password = users[0]["admin"]["password"]

let workflows = require("../../fixtures/workflows")
let workflowName = workflows[0]["amount"]["workflowName"]
let code = workflows[0]["amount"]["code"]
let trigger = workflows[0]["amount"]["trigger"]
let max = workflows[0]["amount"]["max"]
let validator = workflows[0]["amount"]["validator"]
let min = workflows[0]["amount"]["min"]

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
  
When("I create an Amount workflow", () => {
  cy.createWorkflow(code, workflowName, trigger, max, validator, min)
  cy.get('[id="create"]').should('contain.text', 'Valider').click()
});
  
Then("I have a validation message", () => {
  cy.get('[class="modal-body"]').should('contain.text', '\nLe workflow GP3 amount name a été créé\n\n\n\n\n\nFermer\n\n\n')
  cy.get('[data-ml-close="Annuler"]').click()
});
