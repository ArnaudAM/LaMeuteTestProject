/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";
let users = require("../../fixtures/users")
let email = users[1]["user"]["email"]
let password = users[1]["user"]["password"] 

Given("a logged buyer", () => {
  cy.login(email, password).then(response => {
    expect(response.status).to.eq(200)
  })
  cy.visit("/")
});
