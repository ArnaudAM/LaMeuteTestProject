Cypress.Commands.add('login', (email, pw) => {
    cy.request({
        url: "/INTERSHOP/web/WFS/RAJA-FR-Site/fr_FR/-/EUR/ViewUserLogin-ProcessLogin",
        method: "POST",
        qs: {
            SynchronizerToken: "9bc13b5bac2ce9aa91e224f4fb0a53ec25f1f629273c19a85b712e819dea8e00",
            LoginForm_Login: email,
            LoginForm_Password: pw
        }
    })
})