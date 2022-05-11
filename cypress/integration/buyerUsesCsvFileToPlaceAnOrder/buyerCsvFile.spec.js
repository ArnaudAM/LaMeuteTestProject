import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And("the buyer checks his cart", () => {
  cy.get("#cart-dropdown-btn > .link-white").click({ force: true });
  cy.get('[data-test-id="viewBasketMiniCartButton"]').click();
});
// When he add a csv file order
// Then the cart should be updated from csv articles
// And their number should be equal to the csv file
