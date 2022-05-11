/// <reference types="cypress" />

const cucumber = require("cypress-cucumber-preprocessor").default;
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());

  let commandNumber;

  on("task", {
    setCommandNumber(v) {
      commandNumber = v;
      return null;
    },

    getCommandNumber() {
      return commandNumber || null;
    },

    // require('cypress-mochawesome-reporter/plugin')(on);
  });
};
