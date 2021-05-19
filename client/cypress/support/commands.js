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
import {
  setToken,
  setUser
} from "../../src/utils/authService";
const userGenerator = require("random-username-generator");
const randomSentence = require("random-sentence");
const sentence = randomSentence({
  min: 5,
  max: 10
});
// import { loginActionSuccess } from "../../src/Redux/actions/user/loginAction";
//! Local storage is ran before every test
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

Cypress.Commands.add("register", () => {
  cy.request({
    method: "POST",
    url: `${address}/api/auth/register`,
    body: {
      first_name: `test`,
      last_name: "test",
      email: userGenerator.generate(),
      username: userGenerator.generate(),
      password: `pass`,
    },
  }).then((resp) => {
    setToken(resp.body.user.token);
    setUser(resp.body.user.first_name);
    cy.window().then((win) => {
      win.store.dispatch({
        type: "USER_LOGIN_SUCCESS"
      });
    });
  });
});

Cypress.Commands.add("loginWith", (user, pass) => {
  cy.request({
    method: "POST",
    url: `${address}/api/auth/login`,
    body: {
      username: user ? `${user}` : "jackBarry",
      password: pass ? `${pass}` : "password",
    },
  }).then((resp) => {
    setToken(resp.body.user.token);
    setUser(resp.body.user.first_name);
    cy.window().then((win) => {
      win.store.dispatch({
        type: "USER_LOGIN_SUCCESS"
      });
    });
  });
});

Cypress.Commands.add("logout", () => {
  cy.get('[href="/login"]').click();
});

Cypress.Commands.add("entry", () => {
  cy.get("textarea").type(sentence);
  cy.get("button").click();
});
