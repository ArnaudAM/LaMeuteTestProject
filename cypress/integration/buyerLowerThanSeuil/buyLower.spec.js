import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And("he selects furniture", () => {
  cy.wait(4000);
  cy.get('span:contains("Commande par référence")')
    .should("be.visible")
    .click({ force: true });
  cy.wait(2000);
  cy.get('[data-test-ihm="inputRefProduct"]').type("tr4010");
  cy.wait(1000);
  cy.get('[data-test-ihm="refProductSuggest"]').should("be.visible").click();
});
And("the amount of money is less than the seuil de commande value", () => {
  cy.get(".total-price").should("be.visible");
  cy.get('[data-qo-target-qty="TR4010"]').clear().type(7);
});
When("the buyer checks his cart", () => {
  cy.get('span:contains("Ajouter au panier"):first').click();
  cy.wait(1500);
  cy.get('span:contains("Voir le panier"):first').click({ force: true });
  // cy.get(".total-price")
  //   .invoke("text")
  //   .then((money) => {
  //     let intermediateSum = parseInt(money, 10);
  //     cy.log(intermediateSum);
  //   });
});
Then("he should see a finaliser button", () => {
  cy.wait(1000);
  cy.get('span:contains("Finaliser"):first').click();
});
And("he should be able to valider la livraison", () => {
  cy.get('span:contains("Valider la livraison"):first').click();
});
And(
  "he should see a j'ai lu et j'accepte les conditions de vente checkbox",
  () => {
    cy.scrollTo("bottom");
    cy.wait(1800);
    // cy.get("div:contains(\"j'ai lu et j'accepte les\")").should("be.visible");
  }
);
And(
  "he should be able to check j'ai lu et j'accepte les conditions de vente checkbox",
  () => {
    // cy.log(cy.get('[type="checkbox"]'));
    // cy.get('[class="icheck_line-icon"]').check();
    // cy.get('[class="icheck_line-icon"]').click();
    // cy.get(".icheck_line-icon").click();
    cy.get(".icheckbox_line > .iCheck-helper").click({ force: true });
  }
);
And("he should be able to valider le paiment", () => {
  cy.get('[data-testing-id="ISH_INVOICE"]').click();
  cy.get('span:contains("Valider le paiement"):first').click();
  cy.get(".title__confirmation").should("contain.text", "Commande confirmée");
});
