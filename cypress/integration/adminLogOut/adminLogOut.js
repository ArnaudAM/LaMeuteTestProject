/// <reference types="cypress"/>

import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";

let users = require("../../fixtures/users")
let email = users[0]["admin"]["email"]
let password = users[0]["admin"]["password"]

Given("A logged approval on home page", () => {
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