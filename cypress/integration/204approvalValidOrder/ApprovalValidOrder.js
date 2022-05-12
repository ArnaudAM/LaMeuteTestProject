/// <reference types="cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
let users = require("../../fixtures/users.json")
let email = users[1]["approval"]["email"]
let password = users[1]["approval"]["password"]
let commandNumberJson = require("../../fixtures/commandNumber.json")
let commandNumber = commandNumberJson["commandNumber"]

Given("Approval on home page", () => {
    cy.login(email, password).then(response => {
        expect(response.status).to.eq(200)
    })
    cy.visit('/')
})

And("An order is pending validation", () => {
    cy.get('#pending > .std-table > tbody > tr > :nth-child(2)').invoke('text').should('contains', commandNumber)
})

When("Approval click on validates", () => {
    let validateId = `#order_validate_${commandNumber}`
    cy.get(validateId).click()
})

And("He confirms validation", () => {
    cy.wait(2000)
    cy.contains("Valider").click()
})

Then("{string} is displayed", (message) => {
    cy.get(".modal-title").should('contain', message)
    cy.get('[data-ml-close="Annuler"]').click()
})

And("The order as a status {string}", (status) => {
    cy.wait(2000)
    cy.get('#historic > .std-table > tbody > :nth-child(1) > :nth-child(5)').invoke('text').should('contains', status)
})