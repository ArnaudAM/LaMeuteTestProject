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
