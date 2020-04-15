//Arrange Act Assert
describe("/login", () => {
  it("Visits Journal", () => {
    cy.visit("/");
    // cy.url().should("include", "/login");
    //   cy.contains("Login");
    //   cy.get(".action-username")
    //     .type("jackBarry")
    //     .should("have.value", "jackBarry");
  });
  it("greets with sign in", () => {
    cy.contains("h2", "Login");
  });
  it("links to #/register", () => {
    cy.contains("Don't have an account?").should(
      "have.attr",
      "href",
      "/register"
    );
  });
  //todo require username and password
  it("require username", () => {
    cy.get("form").contains("button", "Login").click();
    cy.contains("h3", "Please provide username");
  });
  it("require password", () => {
    cy.get("[name=username]").type("jackBarry{enter}");
    cy.contains("h3", "Please provide password");
  });
  it("requires valid username and password", () => {
    cy.get("[name=password]").type("invalid{enter}");
    cy.contains("h3", "invalid credentials");
  });
  it("navigates to #/ on successful login", () => {
    cy.get("[name=password]").type("{selectAll}{del}password{enter}");
    cy.hash().should("eq", "");
  });
});
