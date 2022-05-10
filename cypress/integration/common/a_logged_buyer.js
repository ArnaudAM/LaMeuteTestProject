/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";

Given("a logged buyer", () => {
  cy.visit("/");
  cy.expect(cy.get('[id="dropdown-account"]').should("be.visible").click());
  cy.get('[id="UserLoginDropdown"]').type("byergp3@data.fr");
  cy.get('[id="UserPasswordDropdown"]').type("test {enter}");
});
