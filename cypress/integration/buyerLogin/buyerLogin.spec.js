import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("a user on the home page", () => {
  cy.visit("/");
});

And("he clicks on se connecter menu", () => {
  cy.get('[id="dropdown-account"]').should("be.visible").click();
});

When("he fills the username and the password correctly", () => {
  cy.get('[id="UserLoginDropdown"]').type("byergp3@data.fr");
  cy.get('[id="UserPasswordDropdown"]').type("test {enter}");
});
Then("he should be logged in", () => {
  cy.url().should("contain", "ViewHomepage-Start");
});
And("he should have a acheteur role", () => {
  cy.get("div.status").should("contain", "Acheteur");
});
