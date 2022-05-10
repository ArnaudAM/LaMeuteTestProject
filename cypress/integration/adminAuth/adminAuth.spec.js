import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open RAJA page", () => {
    cy.visit("http://stg-fr.rajapack.xyz/")
});
  
  When("I fill in the form successfully", () => {
    cy.get('[id="dropdown-account"]').click()
    cy.get('[id="UserLoginDropdown"]').type('admingp3@data.fr')
    cy.get('[id="UserPasswordDropdown"]').type('test')
    cy.get('[class="js-connexion-submit button__primary m-t-12"]').should("contain", "Se connecter").click()
    cy.wait(1000)
  });
  
  Then("The user is authenticated", () => {
    cy.get('[id="connect-btn"]').should("be.visible").click();
    cy.get('[class="bb-1 p-2"]').should("contain.text", 'Admin');
    cy.url().should('contain', "ViewHomepage-Start")
    cy.get('#Admin').should('exist')
    cy.get('h1').should('contain', "Tableau de bord")
  });
  