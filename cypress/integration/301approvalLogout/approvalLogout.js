/// <reference types="cypress"/>

import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";

let users = require("../../fixtures/users")
let email = users[1]["approval"]["email"]
let password = users[1]["approval"]["password"]

Given("A logged approval on home page", () => {
    // cy.visit("/")
    // cy.get('.icon-account').click()
    // cy.get('#UserLoginDropdown').type(users[1]["approval"]["email"])
    // cy.get('#UserPasswordDropdown').type(users[1]["approval"]["password"])
    // cy.get('.js-connexion-submit').click()
    cy.login(email, password).then((response) => {
        expect(response.status).to.eq(200)
    })
})


And("Approval follows my account link", () => {
    cy.visit("/")
    cy.get('.icon-account').click({force:true})
})


When("he clicks on logout button", () => {
    cy.wait(2000)
    cy.get('[data-test-id="signOutButton"]').click({force:true})
})

Then("url is {string}", (url) => {
    cy.url().should('eql', url)
})

And("{string} is visible", (element) => {
    cy.contains(element).should('be.visible')
})