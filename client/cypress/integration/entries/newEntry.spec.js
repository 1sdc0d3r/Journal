import { loginActionSuccess } from "../../../src/redux/actions/user/loginAction";
const randomSentence = require("random-sentence");

describe("/entry", () => {
  const sentence = randomSentence({ min: 5, max: 10 });

  it("Navigates to entry", () => {
    cy.visit("/");
    cy.loginWith("jackBarry", "password");
    cy.get('[href="/entry"]').click();
    cy.contains("h1", "New Entry");
  });
  it("navigates to /journal on successful entry", () => {
    cy.get("textarea").type(sentence);
    cy.get("button").click();
    cy.url().should("contain", "/journal");
  });
});
