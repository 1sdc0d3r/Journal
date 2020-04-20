// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
// Alternatively you can use CommonJS syntax:
// require('./commands')
// import "@cypress/code-coverage/support";
console.log("before all");

beforeEach(() => {
  cy.restoreLocalStorage();
});
afterEach(() => {
  cy.saveLocalStorage();
});

//! Test files in order CYPRESS.JSON
//   "testFiles": [
//     "login/*.js",
//     "leads/new-lead.spec.js",
//     "leads/leads-list.spec.js",
//     "leads/lead-detail.spec.js",
//     "leads/lead-modify.spec.js"
//   ]
