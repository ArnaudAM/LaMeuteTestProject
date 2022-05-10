/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";
let users = require("../../fixtures/users")
let email = users[2]["buyer"]["email"]
let password = users[2]["buyer"]["password"] 

// Given("a logged buyer", () => {
//   cy.visit("/");
//   cy.expect(cy.get('[id="dropdown-account"]').should("be.visible").click());
//   cy.get('[id="UserLoginDropdown"]').type("byergp3@data.fr");
//   cy.get('[id="UserPasswordDropdown"]').type("test {enter}");
// });

Given("a logged buyer", () => {
  cy.login(email, password).then(response => {
    expect(response.status).to.eq(200)
  })
  cy.visit("/")
});
