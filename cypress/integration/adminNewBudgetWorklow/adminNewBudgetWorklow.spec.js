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
  
  When("I create a Budget amount workflow", () => {
    cy.get('#AdminWorkflows > .flex > a > .text-lightGrey').click()
    cy.get('[id="workflow_id"]').type('GP3 budget code')
    cy.get('[id="workflow_name"]').type('GP3 budget name')
    cy.get('[type="checkbox"]').check({force:true})
    cy.get('[id="workflow_trigger"]').select("BUDGET")
    cy.get('[id="workflow_max"]').type('1000')
    cy.get('[id="workflow_validator1"]').select("yJEK_clgaPsAAAGAKvenTKgk")
    cy.get('[id="workflow_min"]').type('2000')
    cy.get('[id="create"]').should('contain.text', 'Valider').click()
  });
  
  Then("I have a validation message", () => {
    cy.get('[class="modal-body"]').should('contain.text', '\nLe workflow GP3 budget name a été créé\n\n\n\n\n\nFermer\n\n\n')
    cy.get('[data-ml-close="Annuler"]').click()
  });
