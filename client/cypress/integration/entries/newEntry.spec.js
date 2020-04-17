describe("/entry", () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("Visits Entry", () => {
    cy.visit("/");
    cy.logout();
    cy.loginWith("jackBarry", "password");
    cy.contains("h2", "Dashboard");
  });
  it("navigates to entry", () => {
    cy.get('[href="/entry"]').click();
    cy.contains("h1", "New Entry");
  });
  it("navigates to /journal on entry", () => {
    cy.get("textarea").type("New Entry Description");
    cy.get("button").click();
    cy.url().should("contain", "/journal");
  });
});
