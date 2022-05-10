/// <reference types="cypress"/>

import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";
let users = require("../../fixtures/users.json")

Before(function () {
    Given("A user on home page", () => {
        cy.visit("/");
    }) 
    When("The user follows on login link", () => {
        cy.get('.icon-account').click()
    }) 
})

And("He enter valid credentials", () => {
    cy.get("#UserLoginDropdown").type(users[1]["approval"]["email"])
    

})