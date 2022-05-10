/// <reference types="cypress"/>

import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";
let users = require("../../fixtures/users.json")

Before(function () {
    Given("A user on home page", () => {
        cy.visit("/");
    }) 
    And("The user follows on login link", () => {
        cy.get('.icon-account').click()
    }) 
})

When("He enter valid credentials", () => {
    cy.get("#UserLoginDropdown").type(users[1]["approval"]["email"])
    cy.get("#UserPasswordDropdown").type(users[1]["approval"]["password"])
    cy.get(".js-connexion-submit").click()

})

Then("Url contains {string}", (message) => {
    cy.url().should('include', message);
})

And("{string} is visible", (tableauDeBord) => {
    cy.contains(tableauDeBord).should('be.visible')
}) 

And("{string} is visible", (approbateur) => {
    cy.contains(approbateur).should('be.visible')
})

When("A user enters invalid credentials", () => {
    cy.get("#UserLoginDropdown").type("invalidemail@test.com")
    cy.get("#UserPasswordDropdown").type("invalidpassword123")
    cy.get(".js-connexion-submit").click()
})

Then("An error message displayed {string}", (message) => {
    cy.contains(message).should('be.visible')
})
