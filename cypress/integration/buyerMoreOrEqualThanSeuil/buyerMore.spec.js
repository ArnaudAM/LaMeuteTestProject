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
  cy.get('[data-qo-target-qty="TR4010"]').clear().type(9);
});
When("the buyer checks his cart", () => {
  cy.get('span:contains("Ajouter au panier"):first').click();
  cy.wait(1500);
  cy.get('span:contains("Voir le panier"):first').click({ force: true });
});
Then("he should see a Faire valider ma commande button", () => {
  cy.wait(2000);
  cy.get('span:contains("Faire valider ma commande"):first').click();
});
And("he should see a Faire valider la livraison button", () => {
  cy.get('span:contains("Faire valider la livraison"):first').click();
});
And(
  "he should see a j'ai lu et j'accepte les conditions de vente checkbox",
  () => {
    cy.scrollTo("bottom");
    cy.wait(1800);
    cy.get("a:contains('Conditions Générales de Vente')").should("be.visible");
  }
);
And(
  "he should be able to check j'ai lu et j'accepte les conditions de vente checkbox",
  () => {
    cy.get(".icheckbox_line > .iCheck-helper").click({ force: true });
  }
);
And("he should see a Faire valider le paiement button", () => {
  cy.get(
    '[data-testing-id="ISH_INVOICE"] > .iradio_bigline > .iCheck-helper'
  ).click({ force: true });
  cy.get('span:contains("Valider le paiement"):first').click();
  cy.wait(2500);
});
And("he should see a Commande en cours de validation message", () => {
  cy.get("h1.title__confirmation").should(
    "contain.text",
    "Commande en cours de validation"
  );
});

And("he should have a numéro de commande", () => {
  cy.get(".confirmation-title > span:first")
    .invoke("text")
    .then((number) => {
      cy.log(number);
      cy.task("setCommandNumber", number);
    });
  cy.task("getCommandNumber").then((response) => {
    cy.log(response);
  });
});
