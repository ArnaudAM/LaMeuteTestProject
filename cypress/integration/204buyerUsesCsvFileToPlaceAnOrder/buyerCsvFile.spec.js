import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And("the buyer checks his cart", () => {
  cy.wait(1000);
  cy.get("#cart-dropdown-btn").should("be.visible").click();
  cy.get('[data-test-id="viewBasketMiniCartButton"]')
    .should("be.visible")
    .click();
});
When("he add a csv file order", () => {
  cy.reload();
  cy.get('[data-test-ihm="fileSender"]')
    .should("be.visible")
    .attachFile("command.csv");
});
// Then the cart should be updated from csv articles
// And their number should be equal to the csv file
