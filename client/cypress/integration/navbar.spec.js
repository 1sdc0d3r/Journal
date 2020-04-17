describe("NavBar", () => {
  it("navigates to dashboard", () => {
    cy.visit("/");
    cy.loginWith("jackBarry", "password");
    cy.get('a[href="/"]').contains("Dashboard");
  });
});
