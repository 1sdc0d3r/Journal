// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import address from "../../src/config/address";
import { setToken, setUser } from "../../src/utils/authService";

Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: `${address.LOCALHOST}/api/auth/login`,
    body: {
      username: "jackBarry",
      password: "password",
    },
  }).then((resp) => {
    setToken(resp.body.user.token);
    setUser(resp.body.user.first_name);
  });
});

Cypress.Commands.add("loginWith", (user, pass) => {
  cy.get("[name=username]").type(`${user}`);
  cy.get("[name=password]").type(`${pass}{enter}`);
});

Cypress.Commands.add("logout", () => {
  cy.get('[href="/login"]').click();
});

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});
