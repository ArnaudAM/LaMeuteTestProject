import "cypress-file-upload";
require("cypress-downloadfile/lib/downloadFileCommand");

Cypress.Commands.add("login", (email, pw) => {
  cy.request({
    url: "/INTERSHOP/web/WFS/RAJA-FR-Site/fr_FR/-/EUR/ViewUserLogin-ProcessLogin",
    method: "POST",
    qs: {
      SynchronizerToken:
        "9bc13b5bac2ce9aa91e224f4fb0a53ec25f1f629273c19a85b712e819dea8e00",
      LoginForm_Login: email,
      LoginForm_Password: pw,
    },
  });
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