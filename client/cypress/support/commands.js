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
const userGenerator = require("random-username-generator");
// import { loginActionSuccess } from "../../src/redux/actions/user/loginAction";
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

Cypress.Commands.add("register", (user) => {
  cy.request({
    method: "POST",
    url: `${address.LOCALHOST}/api/auth/register`,
    body: {
      first_name: `test`,
      email: `${user.email}` || userGenerator.generate(),
      username: `${user.username}` || userGenerator.generate(),
      password: `pass`,
    },
  }).then((resp) => {
    setToken(resp.body.user.token);
    setUser(resp.body.user.first_name);
    cy.window().then((win) => {
      win.store.dispatch({ type: "USER_LOGIN_SUCCESS" });
    });
  });
});

Cypress.Commands.add("loginWith", (user, pass) => {
  cy.request({
    method: "POST",
    url: `${address.LOCALHOST}/api/auth/login`,
    body: {
      username: `${user}`,
      password: `${pass}`,
    },
  }).then((resp) => {
    setToken(resp.body.user.token);
    setUser(resp.body.user.first_name);
    cy.window().then((win) => {
      win.store.dispatch({ type: "USER_LOGIN_SUCCESS" });
    });
  });
});

Cypress.Commands.add("logout", () => {
  cy.get('[href="/login"]').click();
});
