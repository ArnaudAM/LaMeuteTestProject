import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
let users = require("../../fixtures/users")
let email = users[1]["user"]["email"]
let password = users[1]["user"]["password"]

Given("I am authenticated as User", () => {
  cy.login(email, password)
  cy.get('[id="selection-tab"]').should('contain', "La sélection du taulier")
});
  
When("I navigate on my favorites movies", () => {
  cy.get(':nth-child(6) > .nav-link > span').click()
  cy.get('[id="favorites"]').should('contain.text', 'Films').click()
  cy.url().should('contain', "https://la-meute.jeremy-gueriba.fr/videos/favorites/1/1")
  cy.get('[class="badge badge-dark poster-badge"]').should('not.exist')
  cy.get('[class="row"]').should('not.empty')
});
  
Then("I only have movies displayed", () => {
  cy.get(':nth-child(4) > .page-link').click()
  cy.url().should('contain', "https://la-meute.jeremy-gueriba.fr/videos/favorites/2/1")
  cy.get('[class="row"]').should('not.empty')
  cy.get('[class="badge badge-dark poster-badge"]').should('not.exist')
});
