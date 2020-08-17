const user = require("random-username-generator");
describe("/register", () => {
  it("Visits Register", () => {
    cy.visit("/register");
  });

  it("greets with register", () => {
    cy.contains("h2", /register/i);
  });

  it("links to /login", () => {
    cy.contains("Already have an account?").should(
      "have.attr",
      "href",
      "/login"
    );
  });
  // todo test for last_name required as well
  it("require first_name & email", () => {
    cy.get("form").contains("button", "Register").click();
    cy.contains("h3", "please provide name and email");
    cy.get("[name=first_name]").type("test");
    cy.get("[name=last_name]").type("user{enter}");
    cy.get("[name=email]").type("jackBarry@testing.com{enter}");
  });

  it("requires valid username and password", () => {
    cy.contains("h3", "please provide username and password");
    cy.get("[name=username]").type("jackBarry");
    cy.get("[name=password]").type("password{enter}");
  });

  it("doesn't allow duplicate email or username", () => {
    cy.contains("h3", "Account with this email already exits");
    cy.get("[name=email]").clear().type(`${user.generate()}{enter}`);
  });

  it("navigates to / on successful register", () => {
    cy.get("[name=username]").clear().type(`${user.generate()}{enter}`);
    cy.contains("h2", "Dashboard");
    cy.url().should("contain", "/");
  });
});
