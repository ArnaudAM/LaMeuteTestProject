import "cypress-file-upload";
require("cypress-downloadfile/lib/downloadFileCommand");

Cypress.Commands.add("login", (email, pw) => {
    cy.visit("https://la-meute.jeremy-gueriba.fr/login?referer=https://la-meute.jeremy-gueriba.fr/"),
    cy.get('[id="inputName"]').type('arnaud')
    cy.get('[id="inputPassword"]').type('toutou')
    cy.get('[class="btn btn-primary btn-user btn-block"]').should("contain", "Connexion").click()
  });

Cypress.Commands.add("deconnexion", () => {
  // cy.visit("/");
  cy.get(".icon-account").click({ force: true });
  cy.wait(2000);
  cy.get('[data-test-id="signOutButton"]').click({ force: true });
});

Cypress.Commands.add("createWorkflow", (code, workflowName, trigger, max, validator, min) => {
  cy.get('#AdminWorkflows > .flex > a > .text-lightGrey').click()
  cy.get('[id="workflow_id"]').type(code)
  cy.get('[id="workflow_name"]').type(workflowName)
  cy.get('[type="checkbox"]').check({force:true})
  cy.get('[id="workflow_trigger"]').select(trigger)
  cy.get('[id="workflow_max"]').type(max)
  cy.get('[id="workflow_validator1"]').select(validator)
  cy.get('[id="workflow_min"]').type(min)
})