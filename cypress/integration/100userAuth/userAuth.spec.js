import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open La Meute page", () => {
    cy.visit("https://la-meute.jeremy-gueriba.fr/login?referer=https://la-meute.jeremy-gueriba.fr/")
});
  
  When("I fill in the form successfully", () => {
    cy.get('[id="inputName"]').type('arnaud')
    cy.get('[id="inputPassword"]').type('toutou')
    cy.get('[class="btn btn-primary btn-user btn-block"]').should("contain", "Connexion").click()
    cy.wait(1000)
  });
  
  Then("The user is authenticated", () => {
    cy.get('[id="userDropdown"]').should("contain.text", 'Arnaud');
    cy.url().should('contain', "la-meute.jeremy-gueriba.fr")
    cy.get('[id="selection-tab"]').should('contain', "La sélection du taulier")
  });
  